const fs = require('fs')
const path = require('path');
const fileList = []

/**
 * 遍历目录里面的所有文件和目录 (同步)
 * @param {String} dir        目录名
 * @param {Function} callback  找到一个文件时的回调
 */
function eachFileSync(dir, callback) {
  fs.readdirSync(dir).forEach((filename) => {
    //获取当前文件的绝对路径
    const fielder = path.join(dir, filename)
    if (fs.statSync(fielder).isDirectory()) {
      eachFileSync(fielder, callback)
    } else {
      callback(filename)
    }
  })
}
/**
 * 列出目录下所有文件和目录 (同步)
 * @param {String} dir
 * @return {Array} Array
 */
function readDirSync(dir) {
  eachFileSync(dir, (filename) => {
    fileList.push(filename)
  })
  return fileList;
};

module.exports = {
  readDirSync
}