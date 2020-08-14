---
title:  vue在html中出现{{}}原因及解决办法
img: 
categories: 前端
tags:
  - Vue
---
<div id="cnblogs_post_body" class="blogpost-body"><p>在刚开始接触vue的时候，我们都是直接用&lt;script&gt;引入vue.js使用。没有借助vue-cli脚手架来构建项目。</p>
<p>对于一个初学者来说，跟着文档慢慢搬砖，使用vue进行数据绑定。</p>
<p>记得在最开始使用vue写公司项目的时候，在页面初始化化是，THML会闪现出{{}}，当时测试问我有没有解决办法，我理直气壮的说这是vue的特性，没有办法解决这个问！想想当时也是傻，其实官方文档又给出解决办法，只是当时学习的时候，走马观花，没有仔细的阅读文档和demo例子。</p>
<p>后面同事说有解决办法，可以用v-text，v-html&nbsp; 来绑定事件，确实可以，我也这么做了，但是就没有去想想为什么。再后来在面试过程中，被问到了这个问题，因为自己确实遇到过，而且还解决了，就很自信的说出来解决办法。以为自己很屌的样子，所以面试的结果可想而知。</p>
<p>其实作为一个程序猿，作为一个合格的程序猿，要学会思考问题，多想想为什么，不要以为知道怎么解决问题就ok，还要知道为什么才行，这样才能真正的提升自己。</p>
<p>进入正题，简单说说自己对html中出现{{}}的原因及解决办法：</p>
<p<img src="https://i.loli.net/2019/07/05/5d1ed6eac8d2e68516.png"/></p>
<p>这样写的话，就会出现{{}}一闪的情况；</p>
<p>原因：html的加载顺序；</p>
<div>　　解析html结构 -&gt; 加载外部脚本和样式表文件 -&gt; 解析并执行脚本代码 -&gt; 构造html dom模型 -&gt; 加载图片等外部文件 -&gt; 页面加载完毕。</div>
<div>　　所以，当html加载的时候，就会把{{}} 当成文本加载出来，当vue初始化完成后，才会把{{}}解析成vue的语法。</div>
<div>　　如果把引入vue.js的script放到head里面，那页面不会出现{{}}，因为在body之前就把vue引入进来了，vue加载完成了。</div>
<div>解决办法：</div>
<div>
<div>1、使用 v-cloak指令 &lt;div v-cloak&gt;{{msg}}&lt;/div&gt;</div>
<div>　　这个指令保持在元素上知道关联实例结束编译 https://cn.vuejs.org/v2/api/#v-cloak；</div>
<div>
<div>2、使用 v-html指令 &lt;div v-html='msg'&gt;&lt;/div&gt;</div>
<div>3、使用 v-text指令 &lt;div v-text='msg'&gt;&lt;/div&gt;</div>
<div>4、使用template标签将需要渲染的 html 包起来</div>
<div>　　HTML &lt;template&gt; 元素 是一种用于保存客户端内容的机制，该内容在页面加载时不被渲染，但可以在运行时使用JavaScript进行实例化。</div>
</div>
</div></div>