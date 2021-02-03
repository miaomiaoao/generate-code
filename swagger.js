#!/usr/bin/env node
const program = require('commander')
const fs = require('fs');
const path = require('path')
const axios = require('axios')
const generate = require('./generate')
const { transFirstCharToUpper, createDir, deleteDir } = require('./utils')

let swaggerDocUrl = ''
let baseDir = process.cwd()

console.log(process.cwd()) // 返回node进程的当前工作目录
console.log(path.resolve(process.cwd(), 'api'))
console.log('api文件是否已经存在: ' + fs.existsSync(path.resolve(process.cwd(), 'api')))
fs.mkdirSync(path.resolve(process.cwd(), 'api1'))

program
  .version('1.0.0', '-v --version')
  .option('-u, --swagger-doc-url <value>', 'swagger-doc地址')
  .option('-d, --target-dir <value>', '生成的api文件存放的文件夹地址，默认在当前目录下生成api文件')
  .parse(process.argv)

console.log('swagger脚本正在执行')

process.on('exit', () => {
  console.log('swagger脚本执行结束')
})

const opts = program.opts()
if(opts.swaggerDocUrl) {
  console.log(`swagger-doc-url: ${opts.swaggerDocUrl}`)
  swaggerDocUrl = opts.swaggerDocUrl
} else {
  console.log('swagger-doc-url不能为空')
  process.exit()
}

getData(swaggerDocUrl)

/**
 * @description 请求swagger doc 文件
 * @param { String } url swagger地址
 */
function getData(url) {
  axios({
    methods: 'get',
    url
  }).then(res => {
    const targetDir = path.resolve(baseDir, 'api')
    if (res.data) { // 拿到res.data后再删除api下面的文件夹
      createDir(targetDir)
      deleteDir(targetDir)
    }
    const paths = res.data.paths
    let arr = []
    Object.keys(paths).forEach(key => {
      Object.keys(paths[key]).forEach(methods => {
        if (key !== '/error') {
          let tags = paths[key][methods].tags[0].split('-')
          let moduleName = ''
          for(let tag of tags) {
            if (tag !== 'controller') {
              moduleName += transFirstCharToUpper(tag)
            }
          }
          arr.push({
            path: key,
            methods: methods,
            moduleName: moduleName,
            ...paths[key][methods],
          })
        }
      })
    })
    let moduleMap = {}
    for(let module of arr) {
      if (moduleMap[module.moduleName]) {
        moduleMap[module.moduleName].push(module)
      } else {
        moduleMap[module.moduleName] = []
        moduleMap[module.moduleName].push(module)
      }
    }
    moduleMap = new Map(Object.entries(moduleMap))
    generate.renderTemplate(moduleMap)
  }).catch(err => {
    if (err.response.status == '404') {
      console.log('无效的swagger地址')
    }
    if (err.response) {
      console.log(err.response.data)
    }
    process.exit()
  })
}
