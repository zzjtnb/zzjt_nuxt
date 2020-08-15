const path = require('path');
const express = require('express');
const app = express.Router();
const eachFile = require('../utils/files/eachFileSync');
const sort = require('../utils/files/sort');
const blog = require('../utils/files/blog');
const paging = require('../utils/paging');
const repeatNum = require('../utils/repeatNum');
const timeOrder = require('../utils/timeOrder');
var config = require("../config");
let errMsg = { stats: 404, msg: "请求的数据不正确" }

app.put("/add", (req, res) => {
  let json = blog.addBlog(req.body.data)
  if (json.stats == 200) {
    res.status(200).json(json)
  } else {
    res.status(404).json(json)
  }
});
app.delete("/delete", (req, res) => {
  let json = blog.delete(req.query.id)
  if (json.stats == 200) {
    res.status(200).json(json);
  } else {
    res.status(404).json(errMsg)
  }
});
app.put("/edit", (req, res) => {
  let json = blog.editBlog(req.body.data)
  if (json.stats == 200) {
    res.status(200).json(json)
  } else {
    res.status(404).json(errMsg)
  }
});
app.get("/details", (req, res) => {
  const json = blog.singleBlog(req.query.id, req.query.flag)
  if (json.stats == 200) {
    res.status(200).json(json);
  } else {
    res.status(404).json(json);
  }
});
app.get("/search", (req, res) => {
  if (req.query.searchValue != '') {
    let json = [];
    let files = eachFile.eachDirSync(config.allList)
    if (files) {
      for (let i = 0; i < files.length; i++) {
        json.push(blog.search(files[i]));
      }
      json = json.filter((item) => {
        if (item.attributes.title.toString().match(req.query.searchValue) != null || item.body.toString().match(req.query.searchValue) != null) {
          return item
        }
      })
      json.sort((a, b) => b.date.localeCompare(a.date, 'zh'));
      res.status(200).json(json)
    } else {
      res.status(500).json('服务器开小差了,请稍后再试');
    }
  } else {
    res.status(404).json('请输入查询参数')
  }
});
app.get("/list", (req, res) => {
  let json = {};
  json.blogs = [];
  // json.sort = sort.sortList(config.allList)
  json.sort = {}
  json.tags = []
  json.imgArr = ['China', 'Lotus', 'Sky', 'Nature', 'fighter jet', 'Space', 'Model', 'Tree', 'Star', 'Chinese', 'Sunset', 'Mountain', 'monument', 'Animals', 'growth', 'Sea', 'Background', 'Monument'];
  json.pagination = {}
  let files = eachFile.eachDirSync(config.allList)
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
    //博客分类访问
    if (req.query.path && req.query.path != null) {
      json.blogs = json.blogs.filter((item) => {
        return item.attributes.categories == req.query.path;
      });
    }
    //博客时间排序
    switch (req.query.timeOrder) {
      case 'a':
        json.blogs = timeOrder.oldTime(json.blogs)
        break;
      case 'b':
        json.blogs = timeOrder.newTime(json.blogs)
        break;
      default:
        json.blogs = timeOrder.newTime(json.blogs)
    }
    //分页
    json.pagination.total = json.blogs.length
    json.pagination.num = Math.ceil(json.blogs.length / Number(req.query.per_page))
    if (!isNaN(req.query.page)) {
      const page = Number(req.query.page)
      const per_page = Number(req.query.per_page)
      json.blogs = paging.pagination(page, per_page, json.blogs)
      if (json.blogs.length != 0) {
        res.status(200).json(json);
      } else {
        res.status(404).json(errMsg)
      }
    } else {
      res.status(404).json(errMsg)
    }
  } else {
    res.status(404).json(errMsg)
  }
});
app.get("/sitemap", (req, res) => {
  let json = [];
  let files = eachFile.eachDirSync(config.allList)
  if (files) {
    for (let i = 0; i < files.length; i++) {
      json.push(blog.sitemap(files[i]));
    }
    res.status(200).json(json);
  } else {
    res.status(404).json(errMsg)
  }
});

module.exports = app;
