---
title:  VsCode中使用Emmet神器快速编写HTML代码
img: 
categories: IDE
tags:
  -  VsCode
---



<div id="article_content"><div id="content">
<p style="white-space: normal;">Emmet的前身是大名鼎鼎的Zen coding。它使用仿CSS选择器的语法来生成代码，大大提高了HTML/CSS代码编写的速度，而且作为一款插件能够支持大部分的代码编辑器，VSCoder内置了Emmet插件。</p>
<p style="white-space: normal; text-align: center;">请看下面演示：<br style="box-sizing: border-box;"><br style="box-sizing: border-box;"><img src="http://www.weitusi.com/upload/default/20181206/94a63945abace17af370ff50f07cf9c5.gif" title="1.gif" alt="1.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/94a63945abace17af370ff50f07cf9c5.gif" data-bd-imgshare-binded="1" style="display: inline;">&nbsp;&nbsp;<br style="box-sizing: border-box;">编码演示</p>
<p><br style="box-sizing: border-box;"></p>
<h2 style="white-space: normal;">一、快速编写HTML代码</h2>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><strong>1.&nbsp; 初始化&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">HTML文档需要包含一些固定的标签，比如&lt;html&gt;、&lt;head&gt;、&lt;body&gt;等，现在你只需要1秒钟就可以输入这些标签。比如输入“!”或“html:5”，然后按Tab键：&nbsp;<br></p>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/c56f2ba2d1f238f23837b910f4f3f854.gif" title="2.gif" alt="2.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/c56f2ba2d1f238f23837b910f4f3f854.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">html:5 或!：用于HTML5文档类型 html:xt：用于XHTML过渡文档类型 html:4s：用于HTML4严格文档类型</p>
<p style="white-space: normal;"><strong>2.&nbsp; 轻松添加类、id、文本和属性&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">连续输入元素名称和ID，Emmet会自动为你补全，比如输入p#foo：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;"><br></p>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/d9280b67e89e9e74cf8e1a61588b05ef.gif" title="3.gif" alt="3.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/d9280b67e89e9e74cf8e1a61588b05ef.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">连续输入类和id，比如p.bar#foo，会自动生成：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Html代码&nbsp;&nbsp;</p>
<pre class="brush:html;toolbar:false">&lt;p&nbsp;class="bar"&nbsp;id="foo"&gt;&lt;/p&gt;</pre>
<p style="white-space: normal;"><br style="box-sizing: border-box;">下面来看看如何定义HTML元素的内容和属性。你可以通过输入h1{foo}和a[href=#]，就可以自动生成如下代码：<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Html代码&nbsp;&nbsp;</p>
<pre class="brush:html;toolbar:false">&lt;h1&gt;foo&lt;/h1&gt;
&lt;a&nbsp;href="#"&gt;&lt;/a&gt;</pre>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/587b97f31155ead8cb58a617780b8015.gif" title="4.gif" alt="4.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/587b97f31155ead8cb58a617780b8015.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><br style="box-sizing: border-box;"><strong>3.&nbsp; 嵌套&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">现在你只需要1行代码就可以实现标签的嵌套。&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">&gt;：子元素符号，表示嵌套的元素 +：同级标签符号 ^：可以使该符号前的标签提升一行</p>
<p style="white-space: normal;">效果如下图所示：&nbsp;<br style="box-sizing: border-box;"></p>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/beda79cf50362b56e5c07e15021800db.gif" title="5.gif" alt="5.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/beda79cf50362b56e5c07e15021800db.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><strong>4.&nbsp; 分组&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">你可以通过嵌套和括号来快速生成一些代码块，比如输入(.foo&gt;h1)+(.bar&gt;h2)，会自动生成如下代码：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Html代码&nbsp;&nbsp;</p>
<pre class="brush:html;toolbar:false">&lt;div&nbsp;class="foo"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&lt;/h1&gt;&nbsp;&nbsp;&nbsp;
&lt;/div&gt;
&lt;div&nbsp;class="bar"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;&lt;/h2&gt;
&lt;/div&gt;</pre>
<p style="white-space: normal; text-align: center;">&nbsp;&nbsp;<img src="http://www.weitusi.com/upload/default/20181206/4b4c46b7995ada2b7f2f0d3bc18bca7d.gif" title="6.gif" alt="6.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/4b4c46b7995ada2b7f2f0d3bc18bca7d.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><br style="box-sizing: border-box;"><strong>5.&nbsp; 隐式标签&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">声明一个带类的标签，只需输入div.item，就会生成<span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(86, 156, 214);">div</span> <span style="color: rgb(156, 220, 254);">class</span>=<span style="color: rgb(206, 145, 120);">"item"</span><span style="color: rgb(128, 128, 128);">&gt;&lt;/</span><span style="color: rgb(86, 156, 214);">div</span><span style="color: rgb(128, 128, 128);">&gt;</span>。&nbsp;</p>
<p style="white-space: normal;"><br style="box-sizing: border-box;">在过去版本中，可以省略掉div，即输入.item即可生成<span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(86, 156, 214);">div</span> <span style="color: rgb(156, 220, 254);">class</span>=<span style="color: rgb(206, 145, 120);">"item"</span><span style="color: rgb(128, 128, 128);">&gt;&lt;/</span><span style="color: rgb(86, 156, 214);">div</span><span style="color: rgb(128, 128, 128);">&gt;</span>。&nbsp;</p>
<p style="white-space: normal;"><br></p>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/3e9f6ea25b399a21c6bc7100a7e83e11.gif" title="7.gif" alt="7.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/3e9f6ea25b399a21c6bc7100a7e83e11.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br style="box-sizing: border-box;">下面是所有的隐式标签名称：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">li：用于ul和ol中 tr：用于table、tbody、thead和tfoot中 td：用于tr中 option：用于select和optgroup中</p>
<p style="white-space: normal;"><strong>6.&nbsp; 定义多个元素&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">要定义多个元素，可以使用*符号。比如，ul&gt;li*3可以生成如下代码：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Html代码</p>
<pre class="brush:html;toolbar:false">&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
<p style="white-space: normal;">&nbsp;&nbsp;<br></p>
<p style="white-space: normal;"><br></p>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/3a14ab6c72ee0f2aaf351e9dfab374f6.gif" title="8.gif" alt="8.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/3a14ab6c72ee0f2aaf351e9dfab374f6.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><br style="box-sizing: border-box;"><strong>7.&nbsp; 定义多个带属性的元素&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">如果输入 ul&gt;li.item$*3，将会生成如下代码：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Html代码</p>
<pre class="brush:html;toolbar:false">&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item1"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item2"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item3"&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/64817b334ed9392cd3301865073a9f79.gif" title="15.gif" alt="15.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/64817b334ed9392cd3301865073a9f79.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p><br style="box-sizing: border-box;"></p>
<h2 style="white-space: normal;">二、CSS缩写&nbsp;</h2>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><strong>1.&nbsp; 值&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">比如要定义元素的宽度，只需输入w100，即可生成&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码</p>
<pre class="brush:css;toolbar:false">width:&nbsp;100px;</pre>
<p style="white-space: normal; text-align: center;">&nbsp;&nbsp;<img src="http://www.weitusi.com/upload/default/20181206/492e0bb3adfb6798f62f00303fb60777.gif" title="9.gif" alt="9.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/492e0bb3adfb6798f62f00303fb60777.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br></p>
<p style="white-space: normal;">除了px，也可以生成其他单位，比如输入h10p+m5e，结果如下：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码</p>
<pre class="brush:css;toolbar:false">height:&nbsp;10%;
margin:&nbsp;5em;</pre>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">单位别名列表：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">p 表示% e 表示 em x 表示 ex</p>
<p style="white-space: normal;"><strong>2.&nbsp; 附加属性&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">可能你之前已经了解了一些缩写，比如 @f，可以生成：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码&nbsp;</p>
<pre class="brush:css;toolbar:false">@font-face&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-family:;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src:url();
&nbsp;&nbsp;&nbsp;}</pre>
<p style="white-space: normal;"><br style="box-sizing: border-box;">一些其他的属性，比如background-image、border-radius、font、@font-face,text-outline、text-shadow等额外的选项，可以通过“+”符号来生成，比如输入@f+，将生成：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码&nbsp;</p>
<pre class="brush:css;toolbar:false">@font-face&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;font-family:&nbsp;'FontName';
&nbsp;&nbsp;&nbsp;&nbsp;src:&nbsp;url('FileName.eot');
&nbsp;&nbsp;&nbsp;&nbsp;src:&nbsp;url('FileName.eot?#iefix')&nbsp;format('embedded-opentype'),
&nbsp;&nbsp;&nbsp;&nbsp;url('FileName.woff')&nbsp;format('woff'),
&nbsp;&nbsp;&nbsp;&nbsp;url('FileName.ttf')&nbsp;format('truetype'),
&nbsp;&nbsp;&nbsp;&nbsp;url('FileName.svg#FontName')&nbsp;format('svg');
&nbsp;&nbsp;&nbsp;&nbsp;ont-style:&nbsp;normal;
&nbsp;&nbsp;&nbsp;&nbsp;font-weight:&nbsp;normal;
}</pre>
<p style="white-space: normal;">&nbsp;<br></p>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/3224789bbd898b45ffa40b605a05146c.gif" title="10.gif" alt="10.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/3224789bbd898b45ffa40b605a05146c.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><strong>3.&nbsp; 模糊匹配&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">如果有些缩写你拿不准，Emmet会根据你的输入内容匹配最接近的语法，比如输入ov:h、ov-h、ovh和oh，生成的代码是相同的：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码</p>
<pre class="brush:html;toolbar:false">&nbsp;&nbsp;overflow:&nbsp;hidden;</pre>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/de5517ac374532e8eccc2bcb56725075.gif" title="11.gif" alt="11.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/de5517ac374532e8eccc2bcb56725075.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><strong>4.&nbsp; 供应商前缀&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">如果输入非W3C标准的CSS属性，Emmet会自动加上供应商前缀，比如输入trs，则会生成：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码</p>
<pre class="brush:html;toolbar:false">-webkit-transform:&nbsp;;
-moz-transform:&nbsp;;
-ms-transform:&nbsp;;
-o-transform:&nbsp;;
transform:&nbsp;;</pre>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/4147bb02930f01301e15ce8911b03cf3.gif" title="12.gif" alt="12.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/4147bb02930f01301e15ce8911b03cf3.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p style="white-space: normal;"><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">你也可以在任意属性前加上“-”符号，也可以为该属性加上前缀。比如输入-super-foo：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码</p>
<pre class="brush:html;toolbar:false">&nbsp;&nbsp;-webkit-super-foo:&nbsp;;
&nbsp;&nbsp;-moz-super-foo:&nbsp;;
&nbsp;&nbsp;-ms-super-foo:&nbsp;;
&nbsp;&nbsp;-o-super-foo:&nbsp;;
&nbsp;&nbsp;super-foo:&nbsp;;</pre>
<p style="white-space: normal;"><br style="box-sizing: border-box;">如果不希望加上所有前缀，可以使用缩写来指定，比如-wm-trf表示只加上-webkit和-moz前缀：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码</p>
<pre class="brush:html;toolbar:false">&nbsp;&nbsp;&nbsp;&nbsp;-webkit-transform:&nbsp;;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;-moz-transform:&nbsp;;
&nbsp;&nbsp;&nbsp;&nbsp;transform:&nbsp;;</pre>
<p style="white-space: normal;"><br style="box-sizing: border-box;">前缀缩写如下：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">w 表示 -webkit- m 表示 -moz- s 表示 -ms- o 表示 -o-</p>
<p style="white-space: normal;"><strong>5.&nbsp; 渐变&nbsp;</strong><br style="box-sizing: border-box;"><br style="box-sizing: border-box;">输入lg(left, #fff 50%, #000)，会生成如下代码：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Css代码</p>
<pre class="brush:css;toolbar:false">background-image:&nbsp;-webkit-gradient(linear,&nbsp;0&nbsp;0,&nbsp;100%&nbsp;0,&nbsp;color-stop(0.5,&nbsp;#fff),&nbsp;to(#000));
background-image:&nbsp;-webkit-linear-gradient(left,&nbsp;#fff&nbsp;50%,&nbsp;#000);
background-image:&nbsp;-moz-linear-gradient(left,&nbsp;#fff&nbsp;50%,&nbsp;#000);
background-image:&nbsp;-o-linear-gradient(left,&nbsp;#fff&nbsp;50%,&nbsp;#000);
background-image:&nbsp;linear-gradient(left,&nbsp;#fff&nbsp;50%,&nbsp;#000);</pre>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/c00dd04c18a0e3b003c0c454fd277102.gif" title="13.gif" alt="13.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/c00dd04c18a0e3b003c0c454fd277102.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p><br style="box-sizing: border-box;"><br style="box-sizing: border-box;"></p>
<h2 style="white-space: normal;">三、附加功能&nbsp;</h2>
<p style="white-space: normal;">生成Lorem ipsum文本&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">Lorem ipsum指一篇常用于排版设计领域的拉丁文文章，主要目的是测试文章或文字在不同字型、版型下看起来的效果。通过Emmet，你只需输入lorem 或 lipsum即可生成这些文字。还可以指定文字的个数，比如lorem10，将生成：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">引用 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero delectus.</p>
<p style="white-space: normal; text-align: center;"><img src="http://www.weitusi.com/upload/default/20181206/89babf9bb0c1a77dac9162e7536f70ae.gif" title="14.gif" alt="14.gif" class="lazyload" data-original="http://www.weitusi.com/upload/default/20181206/89babf9bb0c1a77dac9162e7536f70ae.gif" data-bd-imgshare-binded="1" style="display: inline;"></p>
<p><br style="box-sizing: border-box;"><br style="box-sizing: border-box;"></p>
<h2 style="white-space: normal;">四、定制</h2>
<p style="white-space: normal;"><br style="box-sizing: border-box;">你还可以定制Emmet插件：&nbsp;<br style="box-sizing: border-box;"><br style="box-sizing: border-box;">添加新缩写或更新现有缩写，可修改snippets.json文件 更改Emmet过滤器和操作的行为，可修改preferences.json文件 定义如何生成HTML或XML代码，可修改syntaxProfiles.json文件</p>
<p><br style="box-sizing: border-box;"></p>
<h2 style="white-space: normal;">五、基本语法&nbsp;</h2>
<p style="white-space: normal;">&nbsp;</p>
<p style="white-space: normal;">语法及标签缩写方法如下：</p>
<p style="white-space: normal;">后代：&gt;</p>
<p style="white-space: normal;">缩写：nav&gt;ul&gt;li</p>
<pre class="brush:html;toolbar:false">&lt;nav&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
&lt;/nav&gt;</pre>
<p style="white-space: normal;">兄弟：+</p>
<p style="white-space: normal;">缩写：div+p+bq</p>
<pre>&lt;div&gt;&lt;/div&gt;
&lt;p&gt;&lt;/p&gt;
&lt;blockquote&gt;&lt;/blockquote&gt;</pre>
<p style="white-space: normal;">上级：^</p>
<p style="white-space: normal;">缩写：div+div&gt;p&gt;span+em^bq</p>
<pre>&lt;div&gt;&lt;/div&gt;
&lt;div&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;span&gt;&lt;/span&gt;&lt;em&gt;&lt;/em&gt;&lt;/p&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;blockquote&gt;&lt;/blockquote&gt;
&lt;/div&gt;</pre>
<p style="white-space: normal;">缩写：div+div&gt;p&gt;span+em^^bq</p>
<pre>&lt;div&gt;&lt;/div&gt;
&lt;div&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;span&gt;&lt;/span&gt;&lt;em&gt;&lt;/em&gt;&lt;/p&gt;&nbsp;
&lt;/div&gt;
&lt;blockquote&gt;&lt;/blockquote&gt;</pre>
<p style="white-space: normal;">分组：()</p>
<p style="white-space: normal;">缩写：div&gt;(header&gt;ul&gt;li*2&gt;a)+footer&gt;p</p>
<pre>&lt;div&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;header&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a&nbsp;href=""&gt;&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;a&nbsp;href=""&gt;&lt;/a&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/header&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;footer&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;/p&gt;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/footer&gt;
&lt;/div&gt;</pre>
<p style="white-space: normal;">缩写：(div&gt;dl&gt;(dt+dd)*3)+footer&gt;p</p>
<pre>&lt;div&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;dl&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dt&gt;&lt;/dt&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dd&gt;&lt;/dd&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dt&gt;&lt;/dt&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dd&gt;&lt;/dd&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dt&gt;&lt;/dt&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dd&gt;&lt;/dd&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/dl&gt;
&lt;/div&gt;
&lt;footer&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;/p&gt;
&lt;/footer&gt;</pre>
<p style="white-space: normal;">乘法：*</p>
<p style="white-space: normal;">缩写：ul&gt;li*5</p>
<pre>&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
<p style="white-space: normal;">自增符号：$</p>
<p style="white-space: normal;">缩写：ul&gt;li.item$*5</p>
<pre>&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item1"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item2"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item3"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item4"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item5"&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
<p style="white-space: normal;">缩写：h$[title=item$]{Header $}*3</p>
<pre>&lt;h1&nbsp;title="item1"&gt;Header&nbsp;1&lt;/h1&gt;
&lt;h2&nbsp;title="item2"&gt;Header&nbsp;2&lt;/h2&gt;
&lt;h3&nbsp;title="item3"&gt;Header&nbsp;3&lt;/h3&gt;</pre>
<p style="white-space: normal;">缩写：ul&gt;li.item$$$*5</p>
<pre>&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item001"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item002"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item003"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item004"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item005"&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
<p style="white-space: normal;">缩写：ul&gt;li.item$@-*5</p>
<pre>&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item5"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item4"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item3"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item2"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item1"&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
<p style="white-space: normal;">缩写：ul&gt;li.item$@3*5</p>
<pre>&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item3"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item4"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item5"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item6"&gt;&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="item7"&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
<p style="white-space: normal;">ID和类属性</p>
<p style="white-space: normal;">缩写：#header</p>
<pre>&lt;div&nbsp;id="header"&gt;&lt;/div&gt;</pre>
<p style="white-space: normal;">缩写：.title</p>
<pre>&lt;div&nbsp;class="title"&gt;&lt;/div&gt;</pre>
<p style="white-space: normal;">缩写：form#search.wide</p>
<pre>&lt;form&nbsp;action=""&nbsp;id="search"&nbsp;class="wide"&gt;&lt;/form&gt;</pre>
<p style="white-space: normal;">缩写：p.class1.class2.class3</p>
<pre>&lt;p&nbsp;class="class1&nbsp;class2&nbsp;class3"&gt;&lt;/p&gt;</pre>
<p style="white-space: normal;">自定义属性</p>
<p style="white-space: normal;">缩写：p[title="Hello world"]</p>
<pre>&lt;p&nbsp;title="Hello&nbsp;world"&gt;&lt;/p&gt;</pre>
<p style="white-space: normal;">缩写：td[rowspan=2 colspan=3 title]</p>
<pre>&lt;td&nbsp;rowspan="2"&nbsp;colspan="3"&nbsp;title=""&gt;&lt;/td&gt;</pre>
<p style="white-space: normal;">缩写：[a='value1' b="value2"]</p>
<pre>&lt;div&nbsp;a="value1"&nbsp;b="value2"&gt;&lt;/div&gt;</pre>
<p style="white-space: normal;">文本：{}</p>
<p style="white-space: normal;">缩写：a{Click me}</p>
<pre>&lt;a&nbsp;href=""&gt;Click&nbsp;me&lt;/a&gt;</pre>
<p style="white-space: normal;">缩写：p&gt;{Click }+a{here}+{ to continue}</p>
<pre>&lt;p&gt;
Click
&nbsp;&nbsp;&nbsp;&nbsp;&lt;a&nbsp;href=""&gt;here&lt;/a&gt;
to&nbsp;continue
&lt;/p&gt;</pre>
<p style="white-space: normal;">隐式标签</p>
<p style="white-space: normal;">缩写：.class</p>
<pre>&lt;div&nbsp;class="class"&gt;&lt;/div&gt;</pre>
<p style="white-space: normal;">缩写：em&gt;.class</p>
<pre>&lt;em&gt;&lt;span&nbsp;class="class"&gt;&lt;/span&gt;&lt;/em&gt;</pre>
<p style="white-space: normal;">缩写：ul&gt;.class</p>
<pre>&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class="class"&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>
<p style="white-space: normal;">缩写：table&gt;.row&gt;.col</p>
<pre>&lt;table&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&nbsp;class="row"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&nbsp;class="col"&gt;&lt;/td&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
&lt;/table&gt;</pre>
<p style="white-space: normal;">HTML</p>
<p style="white-space: normal;">所有未知的缩写都会转换成标签，例如，foo → &lt;foo&gt;&lt;/foo&gt;</p>
<p style="white-space: normal;">缩写：!</p>
<pre>&lt;!DOCTYPE&nbsp;html&gt;
&lt;html&nbsp;lang="en"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta&nbsp;charset="UTF-8"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta&nbsp;name="viewport"&nbsp;content="width=device-width,&nbsp;initial-scale=1.0"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta&nbsp;http-equiv="X-UA-Compatible"&nbsp;content="ie=edge"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Document&lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/head&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
&lt;/html&gt;</pre>
<p style="white-space: normal;">缩写：a</p>
<pre>&lt;a&nbsp;href=""&gt;&lt;/a&gt;</pre>
<p style="white-space: normal;">缩写：a:link</p>
<pre>&lt;a&nbsp;href="http://"&gt;&lt;/a&gt;</pre>
<p style="white-space: normal;">缩写：a:mail</p>
<pre>&lt;a&nbsp;href="mailto:"&gt;&lt;/a&gt;</pre>
<p style="white-space: normal;">缩写：abbr</p>
<pre>&lt;abbr&nbsp;title=""&gt;&lt;/abbr&gt;</pre>
<p style="white-space: normal;">缩写：acronym</p>
<pre>&lt;acronym&nbsp;title=""&gt;&lt;/acronym&gt;</pre>
<p style="white-space: normal;">缩写：base</p>
<pre>&lt;base&nbsp;href=""&gt;</pre>
<p style="white-space: normal;"><br></p>
                    </div>
                    <div class="page hidden-xs"></div>
                    <div class="page visible-xs"></div>
                    <div id="download">
                                            </div>
                </div>