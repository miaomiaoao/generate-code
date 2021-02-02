#!/usr/bin/env node
const program = require('commander')
const fs = require('fs');
const axios = require('axios')
const generate = require('./generate')
const { transFirstCharToUpper } = require('./utils')

let swaggerDocUrl = 'http://192.168.3.173:19009/mvc/v2/api-docs'

program
  .version('1.0.0', '-v --version')
  .option('-u, --swagger-doc-url <value>', 'swagger-doc地址')
  .option('-d, --target-dir <value>', '生成的api文件存放的文件夹地址，默认在当前目录下生成api文件')
  .parse(process.argv)

console.log('swagger脚本正在执行')

process.on('exit', code => {
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

run()

function run() {
  getData(swaggerDocUrl)
}

/**
 * @description 请求swagger doc 文件
 * @param { String } url swagger地址
 */
function getData(url) {
  axios({
    methods: 'get',
    url
  }).then(res => {
    if (res.data) { // 拿到res.data后再删除api下面的文件夹
      createDir()
      deleteDir('api')
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
    arr = arr.slice(6, 20)
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
  })
}

/**
 * @description 创建文件夹,先判断api文件夹是否存在,不存在则创建文件夹
 */
function createDir() {
  if(fs.existsSync('api')) {
    console.log('api文件夹已存在,不创建api文件夹')
    return false
  } 
  fs.mkdir('api', { recursive: true }, err => {
    if (err) throw err;
    console.log('创建api文件夹成功')
  })
}


/**
 * @description 删除文件,先判断文件是否存在,如果存在再删除文件
 */
function deleteDir(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`${filePath}目录不存在,请检查后再调用删除方法!`)
    return false
  }
  const files = fs.readdirSync(filePath)
  files.forEach(file => {
    if (fs.statSync(`${filePath}/${file}`).isDirectory()) {
      deleteDir(`${filePath}/${file}`)
    } else {
      fs.unlinkSync(`${filePath}/${file}`)
    }
  })
} 
