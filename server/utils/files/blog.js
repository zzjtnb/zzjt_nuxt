const fs = require('fs')
const path = require('path');
const fm = require('front-matter');
const moment = require('moment')
const base64 = require('js-base64').Base64;
moment.locale('zh-cn'); // zh-
// 所有的选项列表（默认情况下）
// const md = require('markdown-it')('zero');
const config = require("../../config");

exports.lists = function (filePath) {
  var blog = {};
  var content = fm(fs.readFileSync(filePath, "utf8"));
  blog.attributes = content.attributes;
  // blog.body = md.render(content.body);
  // blog.body = content.body;
  blog.body = content.body.replace(/[#`\s>\[\]\n]/g, '');
  let stats = fs.statSync(filePath);
  blog.id = base64.encodeURL(filePath)
  // blog.date = moment(stats.birthtimeMs).format('YYYY-MM-DD-HH');
  // blog.date = moment(stats.birthtimeMs).format('llLTS');
  blog.date = moment(stats.birthtimeMs).format('YYYY-MM-DD HH:mm:ss');
  blog.imgArr = ['night clouds', 'Wallpapers', 'programmer', 'Nature', 'Travel', 'book', 'water', 'Film', 'Love', 'Mountain', 'Sunset', 'eruption', 'Moon', 'MacBook', '4K Backgrounds', 'page'];
  return blog;
}
exports.singleBlog = function (filePath, flag) {
  let json = { stats: 404, msg: "请求的数据不存在" }
  let path = base64.decode(filePath)
  if (fs.existsSync(path)) {
    if (!flag) {
      return fm(fs.readFileSync(path, "utf8"));
    } else {
      return fs.readFileSync(path, "utf8");
    }
  } else {
    return json
  }
}
exports.delete = function (filePath) {
  let json = { stats: 400, msg: "删除失败,请求的数据不正确" }
  let path = base64.decode(filePath)
  if (fs.existsSync(path)) {
    fs.unlinkSync(path)
    json.stats = 200
    json.msg = "删除成功"
    return json
  } else {
    return json
  }
}
exports.editBlog = function (data) {
  // http://localhost:3000/blog/edit/X3Bvc3RzXOWQjuerr1w0IGNvcHkubWQ
  let json = { stats: 200, msg: "保存成功" }
  let oldPath = base64.decode(data.id)
  // let commonPath = oldPath.match(/.*\\/g)[0]
  let newPath = oldPath.match(/.*\\/g)[0] + data.file.name + '.md'
  let content = base64.decode(data.file.content)
  if (fs.existsSync(oldPath)) {
    if (oldPath == newPath) {
      fs.writeFileSync(oldPath, content, 'utf8')
      return json
    } else {
      fs.renameSync(oldPath, newPath)
      fs.writeFileSync(newPath, content)
      return json
    }
  } else {
    fs.writeFileSync(oldPath, content)
    return json
  }
}
exports.addBlog = function (data) {
  let json = { stats: 200, msg: "保存成功" }
  let content = base64.decode(data.file.content)
  let name = data.file.name + '.md'
  let categories = fm(content).attributes.categories
  let dirPath = ''
  if (categories) {
    dirPath = path.join(config.allList, categories)
  } else {
    dirPath = config.addDir
  }

  let fullPath = path.join(dirPath, name)
  if (fs.existsSync(dirPath)) {
    const stats = fs.statSync(dirPath);
    if (stats.isFile()) {
      let bak = dirPath + '.bak'
      fs.renameSync(dirPath, bak)
      console.log(bak);
      fs.renameSync(bak, config.backup + categories + '.bak')
      fs.mkdirSync(dirPath)
      fs.writeFileSync(fullPath, content, 'utf8')
      return json
    }
    if (stats.isDirectory()) {
      if (fs.existsSync(fullPath)) {
        json.stats = 404
        json.msg = '保存失败,该路径下存在同名文件'
        return json
      } else {
        fs.writeFileSync(fullPath, content, 'utf8')
        return json
      }
    }
  } else {
    fs.mkdirSync(dirPath)
    fs.writeFileSync(path.join(dirPath, name), content, 'utf8')
    return json
  }
}

exports.tags = function (filePath) {
  var tags = [];
  var content = fm(fs.readFileSync(filePath, "utf8"));
  tags = content.attributes.tags;
  return tags;
}
