---
title: input输入框只能输入正整数
img: 
categories: 前端
tags:
  - input
---

```html
<input type="text" value="1"
    onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
    onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\D/g,'')}"
/>	
```