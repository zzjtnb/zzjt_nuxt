---
title:  HTML5-语义化
img: 
categories: 前端
tags:
  - HTML5
---

  <p>&nbsp; &nbsp; 距HTML5标准规范制定完成并公开发布已经有好些年了，面试时也少不了要问对HTML5语义化得理解。但是在实际运用时，真正使用HTML5标签来开发的似乎不是很多（ps：查看了几个巨头公司网站推论），可能一部分原因是仍有部分用户使用在使用低版本浏览器。</p>
  <p>&nbsp; &nbsp; 但是就我个人而言，因选取一些标签时会比较纠结，所以仍使用了div。（PS：正是因为这样，才有了这篇文章的，没错，以后要注意语义化了）</p>
  <p>&nbsp; &nbsp; 什么是语义化？就是用合理、正确的标签来展示内容，比如h1~h6定义标题。</p>
  <p>&nbsp; &nbsp; 语义化优点：</p>
  <p><em>   易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
</em>   有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
<em>   方便其他设备解析，如盲人阅读器根据语义渲染网页
</em>   有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。 </p>
  <p>&nbsp; &nbsp; 今天先介绍主体结构标签，如图所示：</p>
  <p><img src="http://www.daqianduan.com/wp-content/uploads/2018/03/html5.png" alt="html5"></p>
  <p><strong>1、&lt;header&gt;</strong></p>
  <p>&nbsp; &nbsp; &lt;header&gt;定义文档或者文档的部分区域的页眉，应作为介绍内容或者导航链接栏的容器。</p>
  <p>&nbsp; &nbsp; 在一个文档中，您可以定义多个&lt;header&gt;元素，但需要注意的是&lt;header&gt;元素不能作为&lt;address&gt;、&lt;footer&gt; 或 &lt;header&gt; 元素的子元素。</p>
  <p><strong>2、&lt;nav&gt;</strong></p>
  <p>&nbsp; &nbsp; &lt;nav&gt;描述一个含有多个超链接的区域，该区域包含跳转到其他页面或页面内部其他部分的链接列表。</p>
  <p>&nbsp; &nbsp; 在一个文档中，可定义多个&lt;nav&gt;元素。</p>
  <p><strong>3、&lt;main&gt;</strong></p>
  <p>&nbsp; &nbsp; &lt;main&gt; 定义文档的主要内容，该内容在文档中应当是独一无二的，不包含任何在文档中重复的内容，比如侧边栏，导航栏链接，版权信息，网站logo，搜索框（除非搜索框作为文档的主要功能）。</p>
  <p>&nbsp; &nbsp; 需要注意的是在一个文档中不能出现多个&lt;main&gt;标签。</p>
  <p><strong>4、&lt;article&gt;</strong></p>
  <p>&nbsp; &nbsp; &lt;article&gt;元素表示文档、页面、应用或网站中的独立结构，是可独立分配的、可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。</p>
  <p>&nbsp; &nbsp; 当&lt;article&gt;元素嵌套使用时，则该元素代表与外层元素有关的文章。例如，代表博客评论的&lt;article&gt;元素可嵌套在代表博客文章的&lt;article&gt;元素中。</p>
  <p><strong>5、&lt;aside&gt;</strong></p>
  <p>&nbsp; &nbsp; &lt;aside&gt; 元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分且可以被单独的拆分出来而不会影响整体。通常表现为侧边栏或嵌入内容。</p>
  <p><strong>6、&lt;footer&gt;</strong></p>
  <p>&nbsp; &nbsp; &lt;footer&gt;定义最近一个章节内容或者根节点元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。</p>
  <p>&nbsp; &nbsp; 使用footer插入联系信息时，应在 footer 元素内使用 &lt;address&gt; 元素。</p>
  <p>&nbsp; &nbsp; 注意不能包含&lt;footer&gt;或者&lt;header&gt;</p>
  <p><strong>7、&lt;section&gt;</strong></p>
  <p>&nbsp; &nbsp; &lt;section&gt;表示文档中的一个区域（或节），比如，内容中的一个专题组。</p>
  <p>&nbsp; &nbsp; 如果元素内容可以分为几个部分的话，应该使用 &lt;article&gt; 而不是 &lt;section&gt;。
 不要把 &lt;section&gt; 元素作为一个普通的容器来使用，特别是当&lt;section&gt;仅仅是为了美化样式或方便脚本使用的时候，应使用&lt;div&gt;。</p>
  <p>&nbsp; &nbsp; 这几个标签，比较容易混淆的是&lt;section&gt;、&lt;article&gt;，所以这里特别说明：</p>
  <p>&nbsp; &nbsp; “Authors are encouraged to use the article element instead of the section element when it would make sense to syndicate the contents of the elemen.”</p>
  <p>&nbsp; &nbsp; 通俗来说就是&lt;article&gt;比&lt;section&gt;更具有独立性、完整性。可通过该段内容脱离了所在的语境，是否完整、独立来判断。</p>
</header>
</div>