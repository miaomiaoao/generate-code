const path = require('path')
const fs = require('fs')

// writeFile 传参 options mode, flag flag表示在文件后面追加
function renderTemplate(mapaaa) {
  try {
    for(let [key, module] of mapaaa.entries()) { 
      let template = `import http from './http'\nimport env from './env'\n\nclass ${key}Service {\n`
      for(let item of module) {
        item.parameters.forEach((param, index) => {
          if(param.name == 'token') { item.parameters.splice(index, 1)}
        })
        
        const paths = item.path.split('/')
        template += genTemplate(item)
        if (item.methods === 'post') {
          template += `  ${paths[paths.length-1]}(params) { return http.post('${item.path}', params, { baseURL: env.baseURL('cas') }) }`
        } else {
          template += `  ${paths[paths.length-1]}(${item.parameters.length ? 'params' : ''}) { return http.get(\`${item.path}`
          if (item.parameters.length) {
            template += `?`
            for (let index in item.parameters) {
              template += `${item.parameters[index].name}=\$\{params.${item.parameters[index].name}\}`
            }
          }
          template += `\`, { baseURL: env.baseURL('cas') }) }`
        }
        template+='\n'
      }  
      template += `}\n\nexport default new ${key}Service()\n`
      fs.writeFile(`api/${key}.js`, template, err => {
        if (err) {
          console.log(err)
        } else {
          console.log(`生成${key}.js文件成功`)
        }
      })
    }
  } catch(e) {
    console.log(e)
  }
}

function genTemplate ({methods, summary, parameters }) {
  if (methods == 'get') {
    let paramStr = ''
    for(let index in parameters) {
      const type = parameters[index].type.slice(0,1).toUpperCase() + parameters[index].type.slice(1)
      paramStr += `\n  * @param { ${type} }  ${parameters[index].name}`
    }
    return `\n  /**\n  * @description ${summary} ${paramStr}\n  */\n`
  } else if (methods == 'post') {
    return `\n  /**\n  * @description ${summary}\n  * @param { Object } params\n  */\n`
  }
}

module.exports = {
  renderTemplate
}