---
title:  关于element-ui项目的分页返回默认显示第一页的问题解决
img: 
categories: 前端
tags:
  -  element-ui

---

# 关于vue+element-ui项目的分页，返回默认显示第一页的问题解决
## 示例代码
```html
<template>
  <div style="text-align: center">
    <el-pagination @current-change="list" background layout="prev, pager, next" :current-page.sync="query.page" :page-size="query.pageSize" :total="query.pageNumber*query.pageSize" v-if="query.pageNumber*query.pageSize!=0">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: {
        page: 1,
        pageSize: 5,
        pageNumber: 1
      },
    }
  },
  created () {
    this.query.page = this.getContextData("page") || 1
  },
  methods: {
    list () {
      this.setContextData("page", this.query.page)
    },
    //给sessionStorage存值
    setContextData: function (key, value) {
      if (typeof value == "string") {
        sessionStorage.setItem(key, value);
      } else {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    },
    // 从sessionStorage取值
    getContextData: function (key) {
      const str = sessionStorage.getItem(key);
      if (typeof str == "string") {
        try {
          return JSON.parse(str);
        } catch (e) {
          return str;
        }
      }
      return;
    }
  },
}
</script>
```
## 参考
问题描述
当前页面如下
![](https://i.imgur.com/hl7BaH0.png)
然后点击页码跳到第3页，然后在第三页点击页面链接跳转到新的页面
![](https://i.imgur.com/JfyoKEl.png)
然后在新页面点击返回按钮，返回到当前页，结果页面分页显示第一页，对应页面内容也是第一页
![](https://i.imgur.com/yDHbiFv.png)
期望效果
从新页面返回的时候，页码和页面内容仍旧保持在跳转离开前的样子。

解决办法
利用localStorage或者sessionStorage将跳转页面前的currentPage存储起来，然后，再次返回当前页的时候，在created生命周期里，获取到存储的currentPage，再进行加载
代码解释 我这里用的是sessionStorage，关于sessionStorage的使用，我这边先做下解释，以免后面看不懂。之前开发的时候我是先在全局定义了两个sessionStorage的方法，用于存取值
```JavaScript
//给sessionStorage存值
setContextData: function(key, value) { 
    if(typeof value == "string"){
        sessionStorage.setItem(key, value);
    }else{
        sessionStorage.setItem(key, JSON.stringify(value));
    }
},
// 从sessionStorage取值
getContextData: function(key){
    const str = sessionStorage.getItem(key);
    if( typeof str == "string" ){
        try{
            return JSON.parse(str);
        }catch(e) {
            return str;
        }
    }
    return;
}
```

分页代码
![](https://i.imgur.com/z2EtMoF.png)
然后将currentPage在每次点击页码的时候存到sessionStorage里
![](https://i.imgur.com/e0SqjGC.png)
这里解释下，qryTableData()是我定义的请求接口交易，刷新页面内容的方法。

然后在当前页的created生命周期里从sessionStorage里面取currentPage。![](https://i.imgur.com/2OaEWze.png)

这样，我们再返回当前页的时候，页面内容将会是跳转离开前的样子。

但是至此工作仅仅完成一半，因为我们发现这个bug并没有完全解决
![](https://i.imgur.com/vs0gft3.png)
问题造成原因
我们返回当前页面取得总条数totalNum的之前，element-ui的分页组件已经在页面加载完毕，当时的totalNum绑定的是data里面初始化的数据0，所以当总条数为0的时候，分页组件的页码默认为1。并且当totalNum在created生命周期里取得数据后，分页组件也不会刷新。所以这就导致， 页面内容正确，但是页码高亮依旧是第一页

解决办法
我们需要在created之后刷新这个分页组件或者让分页组件的html后于created之后加载到页面。
再次刷新这个分页组件是不现实的，我们选择在created之后加载分页组件。具体办法就是使用v-if。在totalNum不为data里面给的初始值0的时候，才让这段html加载到页面。
![](https://i.imgur.com/tZNxMuI.png)
然后再次测试，发现完美解决问题。
![](https://i.imgur.com/9MxuQED.png)
后续：
这里为什么用的是v-if而不是v-show。这就是每个vue初学者需要明白的事情了，就是v-if和v-show的区别。嘿嘿😁

特别感谢@Deguang大神，在他的指导下，才踩出了这个element-ui的坑🙂