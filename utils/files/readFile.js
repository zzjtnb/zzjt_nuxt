const fs = require('fs')
const fm = require('front-matter');//https://github.com/jxson/front-matter
const md = require('markdown-it')();// https://markdown-it.docschina.org/
function readFile(fullPath) {
  //需要注意的是fs是异步,所以需要return new Promise
  return new Promise((resolve, reject) => {
    // 读取md文件
    fs.readFile(fullPath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        let result = md.render(data)
        // console.log('md文件读取的结果' + result)
        fs.writeFile('database/test.html', result + "\n", (err) => {
          if (err) {
            reject(err)
          };
          // console.log("创建写入文件成功");
        });
        resolve(result)
        // resolve(md.render(fm(data).body))

        //  // 处理组件名称首字母大写
        // A-coder-beauty应为ACoderBeauty
        // 处理md文件名，去掉前面的路径和文件类型后缀
        let filename = fullPath.replace(__dirname, '')
        let startIndex = filename.lastIndexOf('\\')
        let endIndex = filename.indexOf('.')
        filename = filename.substring(startIndex + 1, endIndex)

      }
    })
  });
}
module.exports = readFile
