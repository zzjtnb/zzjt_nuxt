---
title: html 基础入门资料
img: 
categories: 前端
tags:
  - html
---

<div class="RichContent RichContent--unescapable">
  <div class="RichContent-inner">
    <span class="RichText ztext CopyrightRichText-richText" itemprop="text">
      <p>常用的标记与格式：
        <br>&lt;html&gt;
        <br>&lt;head&gt;
        <br>&lt;title&gt; 标题标记 &lt;/title&gt; &lt;!-- 网页标记对 --&gt;
        <br>&lt;/head&gt;</p>
      <br>
      <br>
      <p>* &lt;body&gt;
        <br>&lt;!-- 以下是标题对 --&gt;
        <br>&lt;h1&gt; 标题 1&lt;/h1&gt; &lt;!-- 有六种字号 号越小字越大 --&gt;</p>
      <br>
      <p>&lt;p&gt; 这里表示段落 &lt;/p&gt; &lt;!-- 内容多了之后会自动换行 --&gt;
        <br>&lt;p&gt; 空 格 &lt;/p&gt;
        <br>&lt;p&gt;&lt;font size="+3"&gt; 空格 &amp; nbsp;&amp;nbsp; 123&lt;/p&gt; &lt;!-- 空格 --&gt;
        <br>&lt;p&gt; 在本条代 &lt; br &gt; 码中出现 &lt; br &gt; 了多条强制换行符 &lt;/p&gt; &lt;!-- 回车 --&gt; 标准写法为 &lt; br /&gt;
        <br>&lt;hr /&gt; 横线
        <br>&lt;!--
        <br>这里放第一行注释
        <br>这里放第二行注释 但是你能看到么？！
        <br>--&gt;
        <br>物理字体：
        <br>&lt;b&gt; 这个是粗体 &lt;/b&gt;
        <br>&lt;u&gt; 这个是下划线 &lt;/u&gt;
        <br>&lt;i&gt; 这个是斜体 &lt;/i&gt;
        <br>&lt;s&gt; 这个是删除线 &lt;/s&gt; &lt;strike&gt;</p>
      <p>这个是 &lt;sup&gt; 上标 &lt;/sup&gt;
        <br>这个是 &lt;sub&gt; 下标 &lt;/sub&gt;
        <br>逻辑字体：
        <br>&lt;em&gt; 这个是强调 &lt;/em&gt;
        <br>&lt;strong&gt; 这个是加重 &lt;/strong&gt;
        <br>&lt;small&gt; 这个是小字 &lt;/small&gt;
        <br>&lt;big&gt; 这个是大的 &lt;/big&gt;</p>
      <br>
      <p>字体标记：</p>
      <p>&lt;font size="+3"&gt; html &lt;/font&gt; &lt;!-- 字体大小的调整 1~7 也可以是减号 --&gt;
        <br>&lt;font color="red"&gt; html lalallalala &lt;/font&gt; &lt;!-- 可以是颜色的单词 也可以是 RGB 的颜色值例如 #000000 W#W 标准 --&gt;
        <br>&lt;font color=#cccccc&gt; html lalallalala &lt;/font&gt;
        <br>face="黑体" 字体设置</p>
      <p>* &lt;pre&gt; 格式文本化 在网页设计的过程中可能会向用户展示一部分计算机代码，而展示计算机代码较长时或许会用到这一个指令
        <br>其中 &lt;xmp&gt;…&lt;/xmp &gt; 相似 但是这条语句会进行 html 代码的解释
        <br>&lt;code&gt;…&lt;/code&gt; 代码式的小型固定宽度字体显示的文本
        <br>&lt;kbd&gt;…&lt;/kbd&gt; 代码样式固定宽度字体渲染
        <br>&lt;tt&gt;…&lt;/tt&gt; 代码样式固定宽度字体渲染文本
        <br>&lt;var&gt;…&lt;/var&gt; 代码样式斜体渲染
        <br>&lt;smp&gt;…&lt;/smp&gt; 字体相对要细一点
        <br>文字布局：</p>
      <p>文字一 &lt;p&gt; 文字二 &lt;p &gt; 两行文字之间空出一行的作用 &lt;p /&gt; 是 &lt; p&gt;&lt;/p &gt; 的简写但是由于 &lt; p&gt;&lt;/p &gt; 里面没有内容所以说会出现空格
        <br>&lt;br&gt; 如果存在多个 会出现多个空行</p>
      <br>
      <p>&lt;nobr&gt; 不换行控制
        <br>fjakdjfkjalkdfj
        <br>dsfadfdsagafdsg
        <br>&lt;/nobr&gt;</p>
      <br>
      <p>文字对齐：
        <br>&lt;p align="right"&gt;HTMl 啦啦啦 &lt;/p&gt; left right center 左对齐 右对齐 居中 align 可放在 &lt; p &gt; 与 &lt; div &gt; 里面</p>
      <p>列表：
        <br>&lt;ul&gt; 无序列表 有序为 &lt; ol type="#"&gt;…&lt;ol&gt; 其中 #可以用 a A i I 1 等来表示
        <br>&lt;li&gt; 表项 1&lt;/li&gt;
        <br>&lt;li&gt; 表项 2&lt;/li&gt;
        <br>&lt;li&gt; 表项 3&lt;/li&gt;
        <br>&lt;/ul&gt;</p>
      <p>文字滚动事例：&lt;marquee direction="right"&gt; 做人要厚道 &lt;/marquee&gt; right left down up 可以在 txt 编辑随便找一个浏览器运行
        <br>scrollamount="500" 表示速度
        <br>behavior 可以用来设置滚动属性 alternate 表示来回循环滚动 slide 表示内容滚动一次就停止 loop="3" 表示循环三次
        <br>scrolldelay="10" 设置滚动的时间间隔 走一走停一停
        <br>bgcolor="red" 滚动的背景颜色
        <br>width="250" height="55"
        <br>图片移动： &lt;marquee width="600px" height="200px" bgcolor="#666666"&gt;
        <br>&lt;img scr="html.jpg"&gt; 图片的大小在 marquee 中移动
        <br>&lt;/marquee&gt;</p>
      <br>
      <p>图像：
        <br>&lt;img scr="cn.jpg"&gt; scr 表示的是路径 width="200px" height 表示宽度和高度
        <br>alt="hello world" 表示鼠标指针在图片上的时候显示交互的文字
        <br>align 表示对其方式 top right bottom left middle 顶 右 底（默认） 左 中间 表示图像和文本的关系
        <br>border="10px" 边框大小 也可以选择去除边框
        <br>target="_blank" 目标为空 或者可以设置为_self 等
        <br>
        <a href="&lt;a%20href=">http://www.baidu.com"&gt;</a>
        <br>&lt;a href="mailto:lalall@163.com"&gt; &lt;/a&gt; &lt; 作者的邮箱 &gt;</p>
      <p>锚点
        <br>&lt;a href="#htmlbook"&gt; 点击到锚点处 &lt;/a&gt;
        <br>&lt;a name="htmlbool"&gt; 在这里设置一个锚点。在网页第一页做锚点 &lt;/a&gt; 在同一网页可以加多个锚点 链接可以设置在本网页外 在 URL 地址后加 “#” 后再加锚点名称</p>
      <br>
      <br>
      <p>有时候单击图像的不同位置会出现不同的链接，矩形，圆形，多边形，这些分别用 rect circle poly 实现。 在 &lt;img&gt; 里放的是 usermap，后面接的是地图的名字。
        <br>在声明地图的时候，用 &lt;map&gt;&lt;/map &gt; 包围。map 里面放的是 name 的名称，以便在其他地方调用。在 &lt; map&gt;&lt;/map &gt; 里有区域，由 &lt; area
        &gt; 属性指定用什么形状，后面紧跟 Shape
        <br>Shape 后面接 rect circle poly 之中的一个，coords 里面是像素 href 里面是连接的地址。</p>
      <p> 相对路径： C:\Users\dezha\Desktop\html.jpg 绝对路径
        <a href="https://link.zhihu.com/?target=http%3A//www.baidu.com/html.jpg" class=" wrap external" target="_blank" rel="nofollow noreferrer"
          data-za-detail-view-id="1043">页面不存在_百度搜索</a>
        <br>&lt;map name="Face"&gt;
        <br>&lt;area shape="rect" href="page.html" coords="140,20,280,60"&gt;
        <br>&lt;area shape="poly" href="image.html" coords="100,100,180,80,200,140"&gt;
        <br>&lt;area shape="circle" href="new.html" coords="80,100,60"&gt;
        <br>&lt;/map&gt;</p>
      <br>
      <p>表单：
        <br>&lt;form&gt;…&lt;/form&gt;</p>
      <p>&lt;form action="show.aspx" method="get"&gt; action 表示表单提交后发送的地址 发送方式 method 有 GET 和 POST 两种 基本区别是 POST 传输的值比较大 值可以传给数据库可以是
        URL 后台
        <br>&lt;input type="text"&gt; *text password checkbox 多选 radio 单选 hidden submit reset
        <br>&lt;br&gt;
        <br>&lt;input type="password"&gt;
        <br>&lt;br&gt;
        <br>多选单选框
        <br>&lt;input type="checkbox" name=book&gt;html 知识
        <br>&lt;input type="checkbox" name=book checked&gt;css 知识 checked 表示选中状态
        <br>&lt;input type="checkbox" name=book&gt;html+css 知识
        <br>&lt;br&gt;</p>
      <p>下拉列表
        <br>&lt;select&gt;
        <br>&lt;option&gt; 选项一 &lt;/option&gt;
        <br>&lt;option selected&gt; 选项二 &lt;/option5&gt;
        <br> …………
        <br>&lt;/select&gt;
        <br>&lt;input type="button" value="提交"&gt;</p>
      <p>图片域
        <br>&lt;input type="image" src="图片路径"/&gt; 用来代替提交按钮
        <br>文件域
        <br>&lt;input type="file" /&gt; 点击浏览可以浏览本地文件
        <br>隐藏域： 在页面内看不见 但是可以用来装载需传输的数据
        <br>&lt;input type="hidden" name="name" value="我是隐藏域里的值" /&gt;</p>
      <p>表格： 其中每个格子被称为单元格
        <br>&lt;table&gt; &lt;/table&gt; &lt;tr&gt;&lt;/tr &gt; 表示对一行做标记 &lt;td &gt; 表示对表元标记 &lt;th &gt; 表示表头，可以省略
        <br>&lt;th rowspan=3&gt;&lt;/th &gt; 表格中的跨多行
        <br>&lt;td rowspan=3&gt;&lt;/td &gt; 表格中的 td 跨多行
        <br>&lt;th colspan=3&gt;&lt;/th&gt; 或者下面表示跨多列
        <br>&lt;td colspan=3&gt;&lt;/td&gt;</p>
      <p>&lt;table border="1" width="300"&gt; border 表示边框宽度值 height width 表示高度和宽度
        <br>&lt;th align="#"&gt;&lt;/th &gt; 表示表格中的对齐方式 center left right
        <br>&lt;table align="#"&gt;&lt;table &gt; 表示表格在网页中的对齐 cellspacing 表示的单元格之间的间距 cellpadding 表示单元格的边距</p>
      <br>
      <br>
      <p>&lt;/form&gt;</p>
      <p>文本域
        <br>&lt;textarea name=book rows=6 cols=60&gt; 名称 行 高 在需要输入多行文字或者是需要填写大量文字时用到 没有用到 &lt; input &gt; 标签
        <br> ……
        <br>&lt;/textarea&gt;
        <br>框架： 可用于向浏览器窗口中装载多个 html 网页文件，每个 frame（帧 每个 html 文件占据一个）里的网页都是相互独立的。当网站的每个网页部分是不变的时候比较适合
        <br>通常在一个帧里面导航链接，将需要变化的文件放到另一个帧里面 </p>
      <p>框架型网页：如果一个网页的导航菜单是固定的，在页面中的信息可以上下移动，这就可以认为该页面是一个框架型的网页。其基本语法为 &lt;frameset&gt;&lt;/frameset &gt; 放在 &lt; head &gt;
        标记对后面
        <br> 与之并列。其中又有 frame 标签 &lt;frame&gt;&lt;/frame &gt; 来表示在框架内放入什么文件
        <br>&lt;frameset cols="25%,50%,*"&gt; rows 为水平分割 *b 表示剩下的 frameborder="no" 表示隐藏边框
        <br>
        <a href="https://link.zhihu.com/?target=http%3A//www.biadu.com" class=" external" target="_blank" rel="nofollow noreferrer"
          data-za-detail-view-id="1043">
          <span class="invisible">http://www.</span>
          <span class="visible">biadu.com</span>
          <span class="invisible"></span>
        </a>"scrolling="no"&gt; scrolling 表示滚动条 有 auto yes 和 no 三种属性
        <br>
        <a href="https://link.zhihu.com/?target=http%3A//www.hao123.com" class=" external" target="_blank" rel="nofollow noreferrer"
          data-za-detail-view-id="1043">
          <span class="invisible">http://www.</span>
          <span class="visible">hao123.com</span>
          <span class="invisible"></span>
        </a>"&gt;
        <br>
        <a href="https://link.zhihu.com/?target=http%3A//www.163.com" class=" external" target="_blank" rel="nofollow noreferrer"
          data-za-detail-view-id="1043">
          <span class="invisible">http://www.</span>
          <span class="visible">163.com</span>
          <span class="invisible"></span>
        </a>"&gt; 网页不可更改大小
        <br>&lt;/frameset&gt;
        <br>&lt;noframes&gt; 对不起您的网页不支持框架 &lt;/frames&gt;</p>
      <p>&lt;frameset&gt; 在 &lt; html &gt; 标记对内，不能够与 &lt; body &gt; 并列
        <br>可以用来制作导航框架
        <br>内联框架：存在于 &lt;body&gt;&lt;/body &gt; 之中，也叫做浮动框架 用 &lt; iframe&gt;&lt;/iframe &gt; 或者 &lt; iframe /&gt; 来表示
        <br>
        <a href="https://link.zhihu.com/?target=http%3A//www.sina.com.cn" class=" external" target="_blank" rel="nofollow noreferrer"
          data-za-detail-view-id="1043">
          <span class="invisible">http://www.</span>
          <span class="visible">sina.com.cn</span>
          <span class="invisible"></span>
        </a>" /&gt;</p>
      <p>网页中的多媒体：可以播放 flash mid waw mp3 等格式的多媒体文件
        <br>&lt;embed src=url&gt; url 表示多媒体的路径，可以是绝对路径也可以是相对路径 src 可以插入 midi wav aiff au mp3 格式 自动播放格式 autostart=true|false
        <br>循环播放格式 loop=true|false | 一个数字 hidden=true|false 设置面板的隐藏 height width 设置面板的大小单位为 px
        <br>对齐方式 align=top bottom center baseline left right texttop 控制面板的顶部与当前行中最高的文字顶部对齐 middle 中间与当前行的基准线对齐 absmiddle absbottom
        与当前文本对齐
      </p>
      <br>
      <br>
      <p>&lt;/body&gt;
        <br>&lt;/html&gt;</p>
      <br>
      <p>DIV 层 用来进行网页的布局 可以与 &lt;table&gt; 做替换 可以有多层 最外层的别成为容器
        <br>代码举例：
        <br>&lt;html&gt;
        <br>&lt;head&gt;
        <br>&lt;title&gt;DIV 布局 &lt;/title&gt;
        <br>&lt;style type="text/css"&gt;
        <br>/* 设置层的样式 */
        <br>#header
        <br>{
        <br>background:blue;
        <br>height;100px;
        <br>}
        <br>#content{}
        <br>#right
        <br>{
        <br>width:33%;
        <br>height:250px;
        <br>float:right;
        <br>background:green;
        <br>}
        <br>#left
        <br>{
        <br>width:33%;
        <br>height:250px;
        <br>float:left;
        <br>background:orangr;
        <br>}
        <br>#middle
        <br>{
        <br>width:33%;
        <br>height:250;
        <br>float:left;
        <br>background:yellow;
        <br>}
        <br>#bottom
        <br>{
        <br>height:80px;
        <br>background:grey;
        <br>clear:both;
        <br>}
        <br>&lt;/style&gt;
        <br>&lt;/head&gt;
        <br>&lt;body&gt;
        <br>&lt;div id="header"&gt; 头部 &lt;/div&gt;
        <br>&lt;div id="content"&gt;
        <br>&lt;div id="right"&gt; 网页体右边 &lt;/div&gt;
        <br>&lt;div id="left"&gt; 网页体左边 &lt;/div&gt;
        <br>&lt;div id="middle"&gt; 网页中间 &lt;/div&gt;
        <br>&lt;/div&gt;
        <br>&lt;div id="bottom"&gt; 网页底部 &lt;/div&gt;
        <br>&lt;/body&gt;
        <br>&lt;/html&gt;</p>其中地址部分 scr 有可能写错。参考资料来源于《HTML+CSS 从入门到精通》</span>
  </div>
</div>