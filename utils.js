const fs = require('fs')

function transFirstCharToUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


/**
 * @description 创建文件夹,先判断api文件夹是否存在,不存在则创建文件夹
 */
function createDir(dir) {
  if(fs.existsSync(dir)) {
    console.log('api文件夹已存在,不创建api文件夹')
    return false
  } 
  fs.mkdir(dir, { recursive: true }, err => {
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


module.exports = {
  transFirstCharToUpper,
  createDir,
  deleteDir
}