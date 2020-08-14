---
title: Vue中使用Moment.js格式化日期
img: 
categories: Vue
tags:
  - Vue
  - Moment
  - 日期格式化
---

[Moment.js中文官网](http://momentjs.cn/)
# 一、安装

	npm install moment --save   # npm

# 二、实时时间显示代码：
```html
<template>
  <div>北京时间： <span>{{ time }}</span></div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'banner',
  data() {
    return {
      time: null,
    }
  },

  methods: {
    CurrentDateTime() {
      return moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  
  mounted() {
    let vm = this
    setInterval(function() {
      vm.time = vm.getCurrentDateTime()
    }, 1000)
  }
}
</script>

<style scoped>
</style>

```