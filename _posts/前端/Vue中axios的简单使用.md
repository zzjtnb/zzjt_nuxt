---
title: Vue中axios的简单使用
img: 
categories: 前端
tags:
  - Axios
  - Vue
---

```js
import axios from 'axios' // axios http请求库

Vue.prototype.$http = axios
/*
 这样一引用你就可以全局使用this.axios方法来调用接口。
在你需要调用接口的地方就可以使用了 使用方法如下：
axiosTest(){
  this.$http.post('http://g.cn').then(
    (successData) => { console.log(successData.data); },

    (fileData) => { console.log(fileData); })
},
 */
 ```