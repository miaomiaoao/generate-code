exports.comment = function(methods, summary) {
  if (methods == 'get') {
    return `
      /**
       * @description ${summary}
       * @params { Object } params
       */
    `
  } else if (methods == 'post') {
    return `
      /**
       * @description ${summary}
       * @params { Object } params
       */
    `
  }
}