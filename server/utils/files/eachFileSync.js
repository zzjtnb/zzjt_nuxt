const fs = require('fs')
const path = require('path');
/**
 * 遍历目录里面的所有文件 (同步)
 * @param {String} dir        目录名
 * @param {Function} callback  找到一个文件时的回调
 */
function eachFileSync(dir, callback) {
  fs.readdirSync(dir).forEach((filename) => {
    //获取当前文件的绝对路径
    const filePath = path.join(dir, filename)
    if (fs.statSync(filePath).isDirectory()) {
      eachFileSync(filePath, callback)
    } else {
      callback(filePath)
    }
  })
}
/**
 * 列出目录下所有文件 (同步)
 * @param {String} dir
 * @return {Array} Array
 */
function eachDirSync(dir) {
  if (fs.existsSync(dir)) {
    const stats = fs.statSync(dir);
    if (stats.isDirectory()) {
      const fileList = []
      eachFileSync(dir, (filePath) => {
        fileList.push(filePath)
      })
      return fileList;
    } else {
      return false
    }
  } else {
    return false
  }
};
module.exports = {
  eachDirSync
}