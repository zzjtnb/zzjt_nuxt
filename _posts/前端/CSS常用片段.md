---
title: CSS常用片段
img: 
categories: 前端
tags:
  -  css
---
# CSS 字体渐变
```css
background-image:-webkit-linear-gradient(bottom,red,#fd8403,yellow); 
-webkit-background-clip:text; 
-webkit-text-fill-color:transparent; 
```

# css 超出文本换行
```css
text-align: justify;
text-justify: newspaper;
word-break: break-all;
```

# css calc函数用法
```css
calc(100% - 10px)
```
# Css 去除 img 标签底部空白区域
```css
// 将 img 标签变为块级元素来解决这个问题
img {
    display: block;
}
```
# Css 字符间距
```css
// 每个字符相隔 15px
letter-spacing: 15px;
```
# CSS 渐变实现 半边背景颜色
```css
background: linear-gradient(#5788ff 50%, #fff 50%);
```
