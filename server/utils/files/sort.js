const fs = require('fs');
const path = require('path');
/**
 * 列出目录下目录 (同步)
 * @param {String} dir
 * @return {Array} Array
 */
exports.sortList = (dir) => {
  if (fs.existsSync(dir)) {
    const dirList = []
    fs.readdirSync(dir).forEach(item => {
      //获取当前文件的绝对路径
      const dirPath = path.join(dir, item)
      const stats = fs.statSync(dirPath);
      if (stats.isDirectory()) {
        dirList.push(item)
      }
    });
    return dirList;
  } else {
    return false
  }
};