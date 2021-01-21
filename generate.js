const path = require('path')
const fs = require('fs')
const template = require('./template')

// writeFile 传参 options mode, flag flag表示在文件后面追加
function renderTemplate(arr) {
  try {
    arr.forEach(item => {
      const comment = `${template.comment(item.summary)}\t`
      fs.writeFile('api/template.js', comment, {flag: 'a'}, err => {
        debugger
        if (err) {
          console.log(err)
        } else {
          console.log('生成注释文件成功')
        }
      })
    })
  } catch(e) {
    console.log(e)
  }
 
  // fs.writeFile('api/api.js', JSON.stringify(arr, null, "\t"), 'utf-8' , err => {
  //   if (err) {
  //     console.log(err)
  //   }
  // })
  // fs.writeFile('api/api.js', 'aaaa', {flag: 'a'}, err => {
  //   console.log('追加数据')
  //   if (err) {
  //     console.log(err)
  //   }
  // })
}

module.exports = {
  renderTemplate
}