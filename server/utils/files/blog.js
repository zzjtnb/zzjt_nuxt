const fs = require('fs')
const path = require('path');
const fm = require('front-matter');
const moment = require('moment')
const base64 = require('js-base64').Base64;
moment.locale('zh-cn'); // zh-
// 所有的选项列表（默认情况下）
// const md = require('markdown-it')('zero');


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
  if (!flag) {
    return fm(fs.readFileSync(base64.decode(filePath), "utf8"));
  } else {
    return fs.readFileSync(base64.decode(filePath), "utf8");
  }
}
exports.delete = async function (filePath) {
  let json = {
    status: 404,
    msg: "删除失败,请求的数据不正确"
  }
  let path = base64.decode(filePath)
  if (fs.existsSync(path)) {
    try {
      fs.unlinkSync(path)
      json.status = 200
      json.msg = "删除成功"
      return json
    } catch (error) {
      return json
    }
  } else {
    return json
  }
}
exports.tags = function (filePath) {
  var tags = [];
  var content = fm(fs.readFileSync(filePath, "utf8"));
  tags = content.attributes.tags;
  return tags;
}
