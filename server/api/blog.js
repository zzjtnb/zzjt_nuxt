
const express = require('express');
const app = express.Router();
const eachFile = require('../utils/files/eachFileSync');
const sort = require('../utils/files/sort');
const blog = require('../utils/files/blog');
const paging = require('../utils/paging');
//return blog related contents
// const blogPath = "_posts/测试";
const blogPath = "static/_posts";
app.get("/list", (req, res) => {
  // allow cross orign access
  res.header('Access-Control-Allow-Origin', '*');
  // result to be returned
  let json = {};
  json.blogs = [];
  json.sort = sort.sortList(blogPath)
  json.tags = []
  json.pagination = {}
  //获取目录下所有文件
  const files = eachFile.eachDirSync(blogPath)
  if (files) {
    for (let i = 0; i < files.length; i++) {
      json.blogs.push(blog.lists(files[i]));
    }
    //获取标签
    json.blogs.map(function (item) {
      if (typeof (item.attributes.tags) == "object") {
        item.attributes.tags.forEach(element => {
          json.tags.push(element)
        });
      }
    });
    // 标签去重
    json.tags = [...new Set(json.tags)]
    //博客排序
    json.blogs.sort((b, a) => a.date.localeCompare(b.date));
    //分页
    json.pagination.total = json.blogs.length
    json.pagination.num = Math.ceil(json.blogs.length / Number(req.query.per_page))

    if (req.query) {
      const page = Number(req.query.page)
      const per_page = Number(req.query.per_page)
      json.blogs = paging.pagination(page, per_page, json.blogs)
      if (json.blogs.length != 0) {
        res.json(json);
      } else {
        res.json({ msg: "请求的数据不正确" })
      }
    }
  } else {
    // res.status(400).json({ msg: "请求的数据不正确" })
    res.json({ msg: "请求的数据不正确" })
  }

});
app.get("/details", (req, res) => {
  // allow cross orign access
  res.header('Access-Control-Allow-Origin', '*');
  const json = blog.singleBlog(req.query.id, req.query.flag)
  res.json(json);
});
module.exports = app;
