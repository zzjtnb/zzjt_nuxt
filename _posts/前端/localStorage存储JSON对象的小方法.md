---
title:  localStorage存储JSON对象的小方法
img: 
categories: 前端
tags:
  -  JavaScript
  - localStorage
---
<sytle>
.markdown-body .highlight pre, .markdown-body pre{
background-color: #f2f3f5;
}
</style>
<div class="postcontent">
			<div id="cnblogs_post_body" class="blogpost-body"><p>利用localStorage可以简单的存储一些JSON对象，可以方便简易应用的数据存储。</p>
<p>　　简单介绍下localStorage，localStorage是html5提供的一种本地存储的方法，可以把数据存储在本地浏览器，下次打开后仍然可以获取到存储的数据，如果在存储的数据 量小的时候可以起到代替数据库的功能，比cookies更有优越性。</p>
<div class="cnblogs_code">
<pre> localStorage.setItem("key","value");<span style="color: #008000;">//</span><span style="color: #008000;">存储变量名为key，值为value的变量</span>
 
 localStorage.key = "value"<span style="color: #008000;">//</span><span style="color: #008000;">存储变量名为key，值为value的变量</span>
 
 localStorage.getItem("key");<span style="color: #008000;">//</span><span style="color: #008000;">获取存储的变量key的值</span>
 
 localStorage.key;<span style="color: #008000;">//</span><span style="color: #008000;">获取存储的变量key的值</span>
 
 localStorage.removeItem("key")<span style="color: #008000;">//</span><span style="color: #008000;">删除变量名为key的存储变量</span></pre>
</div>
<p>以上即为localStorage调用的方法。下面介绍存储JSON对象的方法。</p>
<div class="cnblogs_code">
<pre> <span style="color: #0000ff;">var</span> students = 
 <span style="color: #000000;">{
</span> liyang:{name:"liyang",age:17<span style="color: #000000;">},
</span> 
 lilei:{name:"lilei",age:18<span style="color: #000000;">}
</span> 
 }<span style="color: #008000;">//</span><span style="color: #008000;">要存储的JSON对象</span>
 
 
 students = JSON.stringify(students);<span style="color: #008000;">//</span><span style="color: #008000;">将JSON对象转化成字符串</span>
 
 localStorage.setItem("students",students);<span style="color: #008000;">//</span><span style="color: #008000;">用localStorage保存转化好的的字符串</span></pre>
</div>
<p>上面即可保存JSON对象，接下来我们在要使用的时候再将存储好的students变量取回</p>
<div class="cnblogs_code">
<pre> <span style="color: #0000ff;">var</span> students = localStorage.getItem("students");<span style="color: #008000;">//</span><span style="color: #008000;">取回students变量</span>
 
 students = JSON.parse(students);<span style="color: #008000;">//</span><span style="color: #008000;">把字符串转换成JSON对象</span></pre>
</div>
<p>以上即可得到存储的students的JSON对象了</p></div></div>