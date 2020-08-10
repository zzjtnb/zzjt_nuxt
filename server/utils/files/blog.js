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
  var stats = fs.statSync(filePath);
  blog.id = base64.encodeURL(filePath)
  blog.imgArr = ['night clouds', 'Wallpapers', 'programmer', 'Nature', 'Travel', 'book', 'water', 'Film', 'Love', 'Mountain', 'Sunset', 'eruption', 'Moon', 'MacBook', '4K Backgrounds', 'page'],
    blog.date = moment(stats.birthtimeMs).format('YYYY-MM-DD');
  return blog;
}
exports.singleBlog = function (filePath, flag) {
  if (!flag) {
    return fm(fs.readFileSync(base64.decode(filePath), "utf8"));
  } else {
    return fs.readFileSync(base64.decode(filePath), "utf8");
  }
}

exports.tags = function (filePath) {
  var tags = [];
  var content = fm(fs.readFileSync(filePath, "utf8"));
  tags = content.attributes.tags;
  return tags;
}
