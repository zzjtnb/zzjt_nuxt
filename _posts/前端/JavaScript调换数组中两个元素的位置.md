---
title:  JavaScript调换数组中两个元素的位置
img: 
categories: 前端
tags:
  -  JavaScript
---
**调函下面arr中5和6的位置**
```JavaScript
var arr = [1,2,3,4,5,6,7,8,9];
arr[5]=[arr[4], arr[4]=arr[5]][0]
console.log(arr )
```