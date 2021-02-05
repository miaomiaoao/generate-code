const fs = require('fs')

// writeFile 传参 options mode, flag flag表示在文件后面追加
function renderTemplate(mapaaa, targetDir, targetModuleList) {
  let methodsMap = {
    get: 'http.get',
    post: 'http.post',
    put: 'http.put',
    delete: 'http.delete'
  }
  try {
    for(let [key, module] of mapaaa.entries()) { 
      if (targetModuleList && targetModuleList.length && !targetModuleList.includes(key)) {
        continue
      }
      let template = `import http from './http'\nimport env from './env'\n\nclass ${key}Service {\n`
      for(let item of module) {
        item.parameters && item.parameters.forEach((param, index) => {
          if(param.name == 'token') { item.parameters.splice(index, 1)}
        })
        const paths = item.path.split('/')
        // 模板格式需要固定，不能调整
        template += `\n  /**\n   * @description ${item.summary}\n   ${isParamsShow(item) ? '* @param {Object} params \n   ' : ''}* @returns { Promise }\n   */\n`
        template += `  ${paths[paths.length-1]}(${isParamsShow(item) ? 'params' : ''}) {
    return ${methodsMap[item.methods]}('${item.path}', ${isParamsShow(item) ? 'params' : '{}'}, {
      baseURL: env.baseURL('cas') 
    })\n  }\n`
      }  
      template += `}\n\nexport default new ${key}Service()\n`
      fs.writeFile(`${targetDir}/${key}.js`, template, err => {
        if (err) {
          console.log(err)
        } else {
          console.log(`${key}.js文件创建成功`)
        }
      })
    }
  } catch(e) {
    console.log(e)
  }
}

/**
 * @description 是否展示params这个字段
 */
function isParamsShow(item) {
  return item.parameters && item.parameters.length || item.methods === 'post'
}
module.exports = {
  renderTemplate
}