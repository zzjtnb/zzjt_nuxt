---
title:  原生JavaScript复制任意节点文字
img: 
categories: 前端
tags:
  - JavaScript
---

  1.html部分
```html
<div id="copyText">点击下面的按钮我会被复制</div>
<button class="btn">点击我复制上面的文字</button>
```
2.JavaScript部分
```JavaScript
// 复制的文字
const target2 = document.querySelector('#copyText')
//点击按钮
const btn2 = document.querySelector('.btn')
btn2.addEventListener('click', () => {
  const range = document.createRange()
  const selection = document.getSelection()
  range.selectNodeContents(target2)
  selection.removeAllRanges()
  selection.addRange(range)
  document.execCommand('copy')
  // 清除选中状态
  selection.removeAllRanges()
},
  false
)
```