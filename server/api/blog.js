const path = require('path');
const express = require('express');
const app = express.Router();
const eachFile = require('../utils/files/eachFileSync');
const sort = require('../utils/files/sort');
const blog = require('../utils/files/blog');
const paging = require('../utils/paging');
const repeatNum = require('../utils/repeatNum');
var config = require("../config");
//return blog related contents
app.get("/list", (req, res) => {
  // allow cross orign access
  res.header('Access-Control-Allow-Origin', '*');
  // result to be returned
  let json = {};
  json.blogs = [];
  // json.sort = sort.sortList(config.allList)
  json.sort = {}
  json.tags = []
  json.pagination = {}

  let files = []
  if (!req.query.path) {
    //获取目录下所有文件
    files = eachFile.eachDirSync(config.allList)
  } else {
    //获取当前文件的绝对路径
    const filePath = path.join(config.allList, req.query.path)
    files = eachFile.eachDirSync(filePath)
  }

  if (files) {
    for (let i = 0; i < files.length; i++) {
      json.blogs.push(blog.lists(files[i]));
    }

    let sorts = []
    json.blogs.map(function (item) {
      // 获取分类
      if (item.attributes.categories != undefined) {
        sorts.push(item.attributes.categories)
      }
      //获取标签
      if (typeof (item.attributes.tags) == "object") {
        item.attributes.tags.forEach(tags => {
          json.tags.push(tags)
        });
      }
    });
    //分类统计
    json.sort = repeatNum.getRepeatNum(sorts)
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
