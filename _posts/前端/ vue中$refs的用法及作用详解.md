---
title:  vue中$refs的用法及作用详解
img: 
categories: 前端
tags:
  -  Vue
---

<div class="markdown-body" style="padding-top: 20px;"><div class="content" id="articleContent">
  <div class="ad-wrap">
  </div>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    一般来讲，获取DOM元素，需</font></font><code>document.querySelector（".input1"）</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取这个DOM节点，然后在获取输入1的值。
  </font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    但是用REF绑定之后，我们就不需要在获取DOM节点了，直接在上面的输入上绑定输入1，然后$裁判里面调用就行。
  </font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    然后在JavaScript的里面这样调用：</font></font><code>this.$refs.input1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样就可以减少获取DOM节点的消耗了
  </font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法如下：</font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>
  <pre><code class="hljs javascript">&lt;div id=<span class="hljs-string">"app"</span>&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"input1"</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"add"</span>&gt;</span>添加<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
</code></pre>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS：</font></font></p>
  <pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">new</span> Vue({
<span class="hljs-attr">el</span>: <span class="hljs-string">"#app"</span>,
<span class="hljs-attr">methods</span>:{
<span class="hljs-attr">add</span>:<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
<span class="hljs-keyword">this</span>.$refs.input1.value =<span class="hljs-string">"test"</span>; <span class="hljs-comment">//this.$refs.input1 减少获取dom节点的消耗</span>
}
}
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
  <blockquote>
  </blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面给大家介绍下vue $ refs的基本用法，具体代码如下所示：</font></font></p>
  <pre><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"input1"</span>/&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"add"</span>&gt;</span>添加<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><font></font>
 <font></font>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">new</span> Vue({
  <span class="hljs-attr">el</span>: <span class="hljs-string">"#app"</span>,
  <span class="hljs-attr">methods</span>:{
  <span class="hljs-attr">add</span>:<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">this</span>.$refs.input1.value =<span class="hljs-string">"22"</span>; <span class="hljs-comment">//this.$refs.input1 减少获取dom节点的消耗</span>
    }
  }
})
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><p></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    一般来讲，获取DOM元素，需</font></font><code>document.querySelector（".input1"）</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取这个DOM节点，然后在获取输入1的值。
  </font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    但是用REF绑定之后，我们就不需要在获取DOM节点了，直接在上面的输入上绑定输入1，然后$裁判里面调用就行。
  </font></font></p>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    然后在javascript里面这样调用：这个。$ refs.input1这样就可以减少获取dom节点的消耗了
  </font></font></p>
  <div class="ad-wrap" style="margin-top: 12px;"></div>
</div>
</div>