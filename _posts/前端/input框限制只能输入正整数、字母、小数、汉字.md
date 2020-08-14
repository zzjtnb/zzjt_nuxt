---
title: input框限制只能输入正整数、字母、小数、汉字
img: 
categories: 前端
tags:
  - html
  - input
---

<div id="cnblogs_post_body" class="blogpost-body"><p>&nbsp;</p>
<p>有时需要限制文本框输入内容的类型，本节分享下正则表达式限制文本框只能输入数字、小数点、英文字母、汉字等代码。</p>
<p>例如，输入大于0的正整数</p>
<div class="codetitle">代码如下:</div>
<div id="code51954" class="codebody">&lt;input onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"&gt;</div>
<p> <br>1，文本框只能输入数字代码(小数点也不能输入)</p>
<div class="codetitle">代码如下:</div>
<div id="code43668" class="codebody"><br>&lt;input onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"&gt;</div>
<p>&nbsp;</p>
<p>2，只能输入数字,能输小数点.</p>
<div class="codetitle">代码如下:</div>
<div id="code21642" class="codebody"><br>&lt;input onkeyup="if(isNaN(value))execCommand('undo')" onafterpaste="if(isNaN(value))execCommand('undo')"&gt;<br>&lt;input name=txt1 onchange="if(/\D/.test(this.value)){alert('只能输入数字');this.value='';}"&gt;</div>
<p>&nbsp;</p>
<p>3，数字和小数点方法二</p>
<div class="codetitle">代码如下:</div>
<div id="code61162" class="codebody"><br>&lt;input type=text t_value="" o_value="" onkeypress="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" onkeyup="if(!this.value.match(/^[\+\-]?\d*?\.?\d*?$/))this.value=this.t_value;else this.t_value=this.value;if(this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/))this.o_value=this.value" onblur="if(!this.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))this.value=this.o_value;else{if(this.value.match(/^\.\d+$/))this.value=0+this.value;if(this.value.match(/^\.$/))this.value=0;this.o_value=this.value}"&gt;</div>
<p>&nbsp;</p>
<p>封装成单独的函数：</p>
<div class="codetitle">代码如下:</div>
<div id="code42600" class="codebody">function keyPress(ob) {<br>&nbsp;if (!ob.value.match(/^[\+\-]?\d*?\.?\d*?$/)) ob.value = ob.t_value; else ob.t_value = ob.value; if (ob.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/)) ob.o_value = ob.value;<br>}<br>function keyUp(ob) {<br>&nbsp;if (!ob.value.match(/^[\+\-]?\d*?\.?\d*?$/)) ob.value = ob.t_value; else ob.t_value = ob.value; if (ob.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?)?$/)) ob.o_value = ob.value;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }<br>function onBlur(ob) {<br>if(!ob.value.match(/^(?:[\+\-]?\d+(?:\.\d+)?|\.\d*?)?$/))ob.value=ob.o_value;else{if(ob.value.match(/^\.\d+$/))ob.value=0+ob.value;if(ob.value.match(/^\.$/))ob.value=0;ob.o_value=ob.value};<br>}</div>
<p>只需在调用，传入this对象即可!</p>
<p>&nbsp;</p>
<p>4，只能输入字母和汉字</p>
<div class="codetitle">代码如下:</div>
<div id="code24846" class="codebody"><br>&lt;input onkeyup="value=value.replace(/[\d]/g,'') "onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[\d]/g,''))" maxlength=10 name="Numbers"&gt;</div>
<p>&nbsp;</p>
<p>5，只能输入英文字母和数字,不能输入中文</p>
<p>&nbsp;代码如下:</p>
<div id="code51549" class="codebody">&lt;input onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"&gt;</div>
<p>&nbsp;</p>
<p>6，只能输入数字和英文</p>
<div class="codetitle">代码如下:</div>
<div id="code71439" class="codebody"><br>&lt;input onKeyUp="value=value.replace(/[^\d|chun]/g,'')"&gt;</div>
<p>&nbsp;</p>
<p>7，小数点后只能有最多两位(数字,中文都可输入),不能输入字母和运算符号:<br><br></p>
<div class="codetitle">代码如下:</div>
<div id="code38327" class="codebody"><br>&lt;input onKeyPress="if((event.keyCode&lt;48 || event.keyCode&gt;57) &amp;&amp; event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false"&gt;</div>
<p>&nbsp;</p>
<p>8，小数点后只能有最多两位(数字,字母,中文都可输入),可以输入运算符号:<br><br></p>
<div class="codetitle">代码如下:</div>
<div id="code37664" class="codebody"><br>&lt;input onkeyup="this.value=this.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3')"&gt;</div>
<div class="codebody">&nbsp;</div>
<div class="codebody">9、ENTER键可以让光标移到下一个输入框&nbsp;<br>&lt;input type="text" onkeydown="if(event.keyCode==13)event.keyCode=9" /&gt;&nbsp;</div>
<div class="codebody">&nbsp;</div>
<div class="codebody">10、正则匹配</div>
<div class="codebody">^[1-9]\d*$　 　 //匹配正整数<br>^-[1-9]\d*$ 　 //匹配负整数<br>^-?[1-9]\d*$　　 //匹配整数<br>^[1-9]\d*|0$　 //匹配非负整数（正整数 + 0）<br>^-[1-9]\d*|0$　　 //匹配非正整数（负整数 + 0）<br>^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$　　 //匹配正浮点数<br>^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$　 //匹配负浮点数<br>^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$　 //匹配浮点数<br>^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$　　 //匹配非负浮点数（正浮点数 + 0）<br>^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$　　//匹配非正浮点数（负浮点数 + 0）</div></div>