const path = require('path')
const fs = require('fs');
const axios = require('axios')
const generate = require('./generate')

const jsonSchema = {
  path: '',
  methods: '',
  file: ''
}


// run()

// function run() {
//   createDir()
//   deleteDir('api')
// }

getData('http://192.168.3.173:19009/mvc/v2/api-docs')

function getData(url) {
  axios({
    methods: 'get',
    url
  }).then(res => {
    const paths = res.data.paths
    let arr = []
    Object.keys(paths).forEach(key => {
      Object.keys(paths[key]).forEach(methods => {
        arr.push({path: key, methods: methods, ...paths[key][methods]})
      })
    })
    arr = arr.slice(6, 20)
    if (arr.length) {
      generate.renderTemplate(arr)
    }
  }).catch(err => {
    console.log(err)
    if (err.response) {
      console.log(err.response.data)
    }
  })
}
// 如果api文件存在,那么就不创建api文件,删除api文件夹下的所有文件
// fs.exits弃用,但是fs.existsSync还存在
// fs.access() fs.open()
function createDir() {
  if(fs.existsSync('api')) {
    console.log('api文件夹存在,不创建api文件夹')
    return false
  } 
  fs.mkdir('api', { recursive: true }, err => {
    if (err) throw err;
    console.log(fs.readdirSync('.'))
  })
}


// 创建一个文件
// 尝试写入代码到文件中
/**
 * 同步创建文件夹 writeFileSync  创建文件writeFile
 */
// fs.writeFile('api/api.js', '// this is test api file', err => {
//   if (err) new Error(err)
//   console.log(err)
//   console.log(fs.readFileSync('api/api.js').toString())
// })

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
