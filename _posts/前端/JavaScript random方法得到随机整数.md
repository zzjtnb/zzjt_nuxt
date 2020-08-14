---
title:  JavaScript复习总结
img: 
categories: 前端
tags:
  -  JavaScript
---

`Math.random()`可以随机0~1之间任意的数
<div id="cnblogs_post_body" class="blogpost-body"><p><strong><span style="font-family: 宋体; font-size: 10pt;">&nbsp;</span></strong></p>
<p><strong><span style="font-family: 宋体; font-size: 10pt;">一、得到1-3的随机整数</span></strong></p>
<p><strong><span style="font-family: 宋体; font-size: 10pt;">代码：</span></strong></p>
<p><span style="font-family: 宋体; font-size: 10pt;"><img src="https://i.loli.net/2019/05/24/5ce7b3783d27e94438.png"/></span></p>
<div><span style="font-family: 宋体; font-size: 10pt;"><strong>总结：</strong>Math.random()方法得到随机小数 *3将会得到小于3的数字，Ceil方法始终向上舍入。</span></div>
<div>&nbsp;</div>
<div><strong><span style="font-family: 宋体; font-size: 10pt;">二、得到0-3的随机整数</span></strong></div>
<div><strong><span style="font-family: 宋体; font-size: 10pt;">代码：</span></strong></div>
<div><span style="font-family: 宋体; font-size: 10pt;"><img src="https://i.loli.net/2019/05/24/5ce7b33cd855383925.png"/></span></div>
<div><span style="font-family: 宋体; font-size: 10pt;"><strong>总结：</strong>Math.random()方法得到随机小数 *4将会得到小于4的数字，floor方法始终向下舍入。</span></div>
<div><span style="font-family: 宋体; font-size: 10pt;">&nbsp;</span></div>
<div><span style="font-family: 宋体; font-size: 10pt;">&nbsp;</span></div>
<div><strong><span style="font-family: 宋体; font-size: 10pt;"><span style="line-height: 19px;">附：</span></span></strong><span style="font-family: 宋体; font-size: 10pt;"><span style="line-height: 19px;">舍入数字三个方法</span></span></div>
<div><span style="font-family: 宋体; font-size: 10pt;"><span style="line-height: 19px;"><img src="https://i.loli.net/2019/05/24/5ce7b2fb5d57f33770.png"/>
<br></span></span></div>
</div>何其后没有紧接指定字符串 n 的字符串。