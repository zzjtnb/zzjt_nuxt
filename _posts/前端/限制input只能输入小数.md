---
title: 限制input只能输入小数
img: 
categories: 前端
tags:
  - JavaScript
  - input
---

```html
<!DOCTYPE html>
<html lang="zh-Hans-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script>
    function readtext() {
      var reg = new RegExp("^[0-9]+(.[0-9]{1})?$ ");
      var obj = document.getElementById("username");
      if (!reg.test(obj.value)) {
        alert("请输入小数点!");
        return false;
      }
      if (!/^[0-9]*$/.test(obj.value)) {
        alert("请输入小数点!");
        return false;
      }
      return true;
    }
  </script>
</head>

<body>
  <!-- HTML结构 -->
  <form id="test-register" action="#" target="_blank" onsubmit="return readtext()">
    <p id="test-error" style="color:red"></p>
    <p>
      用户名:
      <input type="text" id="username" name="username">
    </p>
    <p>
      <button type="submit">提交</button>
      <button type="reset">重置</button>
    </p>
  </form>
</body>

</html>
```