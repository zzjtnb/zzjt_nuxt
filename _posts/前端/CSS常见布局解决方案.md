---
title:  CSS常见布局解决方案
img: 
categories: 前端
tags:
  -  CSS
---

<div class="article-con">
                                    <h3>
	水平居中布局</h3>
<p>
	首先我们来看看<strong>水平居中</strong></p>
<h4>
	1.margin + 定宽</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.child</span> {
    <span>width</span>: <span>100px</span>;
    <span>margin</span>: <span>0</span> auto;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<p>
	相必是个前端都见过，这定宽的水平居中，我们还可以用下面这种来实现不定宽的</p>
<h4>
	2. table + margin</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.child</span> {
    <span>display</span>: table;
    <span>margin</span>: <span>0</span> auto;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<p>
	<code>display: table</code> 在表现上类似 <code>block</code> 元素，但是宽度为内容宽。</p>
<ul class="subtitle">
	<li>
		<p>
			无需设置父元素样式 （支持 IE 8 及其以上版本）<em>兼容 IE 8 一下版本需要调整为 <code>&lt;table&gt;</code> </em></p>
	</li>
</ul>
<h4>
	3.inline-block + text-align</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.child</span> {
    <span>display</span>: inline-block;
  }
  <span>.parent</span> {
    <span>text-align</span>: center;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			兼容性佳（甚至可以兼容 IE 6 和 IE 7）</p>
	</li>
</ul>
<h4>
	4. absolute + margin-left</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
<span>.parent</span> {
    <span>position</span>: relative;
  }
  <span>.child</span> {
    <span>position</span>: absolute;
    <span>left</span>: <span>50%</span>;
    <span>width</span>: <span>100px</span>;
    <span>margin-left</span>: -<span>50px</span>;  <span>/* width/2 */</span>
  }
  </span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			宽度固定</p>
	</li>
</ul>
<ul class="subtitle">
	<li>
		<p>
			相比于使用<code>transform</code> ，有兼容性更好</p>
	</li>
</ul>
<h4>
	5. absolute + transform</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>position</span>: relative;
  }
  <span>.child</span> {
    <span>position</span>: absolute;
    <span>left</span>: <span>50%</span>;
    <span>transform</span>: <span>translateX</span>(-50%);
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			绝对定位脱离文档流，不会对后续元素的布局造成影响。</p>
	</li>
</ul>
<ul class="subtitle">
	<li>
		<p>
			<code>transform</code> 为 CSS3 属性，有兼容性问题</p>
	</li>
</ul>
<h4>
	6. flex + justify-content</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: flex;
    <span>justify-content</span>: center;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			只需设置父节点属性，无需设置子元素</p>
	</li>
</ul>
<ul class="subtitle">
	<li>
		<p>
			<code>flex</code>有兼容性问题</p>
	</li>
</ul>
<h3>
	垂直居中</h3>
<h4>
	1.table-cell + vertical-align</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: table-cell;
    <span>vertical-align</span>: middle;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			兼容性好<em>(IE 8以下版本需要调整页面结构至 <code>table</code>)</em></p>
	</li>
</ul>
<h4>
	2.absolute + transform</h4>
<p>
	强大的absolute对于这种小问题当然也是很简单的</p>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>position</span>: relative;
  }
  <span>.child</span> {
    <span>position</span>: absolute;
    <span>top</span>: <span>50%</span>;
    <span>transform</span>: <span>translateY</span>(-50%);
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			绝对定位脱离文档流，不会对后续元素的布局造成影响。但如果绝对定位元素是唯一的元素则父元素也会失去高度。</p>
	</li>
</ul>
<ul class="subtitle">
	<li>
		<p>
			<code>transform</code> 为 CSS3 属性，有兼容性问题</p>
	</li>
</ul>
<p>
	同水平居中，这也可以用<code>margin-top</code>实现，原理水平居中</p>
<h4>
	3.flex + align-items</h4>
<p>
	如果说<code>absolute</code>强大，那<code>flex</code>只是笑笑，因为，他才是最强的。。。<em>但它有兼容问题</em></p>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: flex;
    <span>align-items</span>: center;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<h3>
	水平垂直居中</h3>
<h4>
	1. absolute + transform</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>position</span>: relative;
  }
  <span>.child</span> {
    <span>position</span>: absolute;
    <span>left</span>: <span>50%</span>;
    <span>top</span>: <span>50%</span>;
    <span>transform</span>: <span>translate</span>(-50%, -50%);
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			绝对定位脱离文档流，不会对后续元素的布局造成影响。</p>
	</li>
	<li>
		<p>
			<code>transform</code> 为 CSS3 属性，有兼容性问题</p>
	</li>
</ul>
<h4>
	2. inline-block + text-align + table-cell + vertical-align</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>text-align</span>: center;
    <span>display</span>: table-cell;
    <span>vertical-align</span>: middle;
  }
  <span>.child</span> {
    <span>display</span>: inline-block;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			兼容性好</p>
	</li>
</ul>
<h4>
	3. flex + justify-content + align-items</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"child"</span>&gt;</span>Demo<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: flex;
    <span>justify-content</span>: center; <span>/* 水平居中 */</span>
    <span>align-items</span>: center; <span>/*垂直居中*/</span>
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			只需设置父节点属性，无需设置子元素</p>
	</li>
</ul>
<ul class="subtitle">
	<li>
		<p>
			蛋疼的兼容性问题</p>
	</li>
</ul>
<p>
	##一列定宽，一列自适应</p>
<h4>
	1.float + margin</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"left"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>left<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"right"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.left</span> {
    <span>float</span>: left;
    <span>width</span>: <span>100px</span>;
  }
  <span>.right</span> {
    <span>margin-left</span>: <span>100px</span>
    <span>/*间距可再加入 margin-left */</span>
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<p>
	<em>IE 6 中会有3像素的 BUG，解决方法可以在 <code>.left</code> 加入 <code>margin-left:-3px</code></em> 当然也有解决这个小bug的方案如下：</p>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"left"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>left<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"right-fix"</span>&gt;</span>
    <span>&lt;<span>div</span> <span>class</span>=<span>"right"</span>&gt;</span>
      <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
      <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.left</span> {
    <span>float</span>: left;
    <span>width</span>: <span>100px</span>;
  }
  <span>.right-fix</span> {
    <span>float</span>: right;
    <span>width</span>: <span>100%</span>;
    <span>margin-left</span>: -<span>100px</span>;
  }
  <span>.right</span> {
    <span>margin-left</span>: <span>100px</span>
    <span>/*间距可再加入 margin-left */</span>
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<p>
	此方法不会存在 IE 6 中3像素的 BUG，但 <code>.left</code> 不可选择， 需要设置 <code>.left {position: relative}</code> 来提高层级。 注意此方法增加了不必要的 HTML 文本结构。</p>
<p>
	<strong>傲娇的程序员应该放弃太低版本的浏览器</strong></p>
<h4>
	2.float + overflow</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"left"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>left<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"right"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.left</span> {
    <span>float</span>: left;
    <span>width</span>: <span>100px</span>;
  }
  <span>.right</span> {
    <span>overflow</span>: hidden;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<p>
	设置 <code>overflow: hidden</code> 会触发 BFC 模式（Block Formatting Context）块级格式上下文。<strong>BFC</strong>是什么呢。用通俗的来讲就是，随便你在BFC 里面干啥，外面都不会受到影响 。此方法样式简单但不支持 IE 6</p>
<h4>
	3 .table</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"left"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>left<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"right"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: table;
    <span>width</span>: <span>100%</span>;
    <span>table-layout</span>: fixed;
  }
  <span>.left</span> {
    <span>display</span>: table-cell;
    <span>width</span>: <span>100px</span>;
  }
  <span>.right</span> {
    <span>display</span>: table-cell;
    <span>/*宽度为剩余宽度*/</span>
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<p>
	<code>table</code> 的显示特性为每列的单元格宽度和一定等与表格宽度。 <code>table-layout: fixed</code> 可加速渲染，也是设定布局优先。<code>table-cell</code> 中不可以设置 <code>margin</code> 但是可以通过 <code>padding</code> 来设置间距</p>
<h4>
	4. flex</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"left"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>left<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"right"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: flex;
  }
  <span>.left</span> {
    <span>width</span>: <span>100px</span>;
    <span>margin-left</span>: <span>20px</span>;
  }
  <span>.right</span> {
    <span>flex</span>: <span>1</span>;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			低版本浏览器兼容问题</p>
	</li>
	<li>
		<p>
			性能问题，只适合小范围布局</p>
	</li>
</ul>
<p>
	我们在学会一列定宽，一列自适应的布局后也可以方便的实现 <strong>多列定宽，一列自适应</strong> <strong>多列不定宽加一列自适应</strong> 这里我们不一一讲解，大家自行尝试，也可以巩固前面学习的</p>
<h3>
	等分布局</h3>
<h4>
	1. float</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>1<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>2<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>3<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>4<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>
<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>margin-left</span>: -<span>20px</span>;
  }
  <span>.column</span> {
    <span>float</span>: left;
    <span>width</span>: <span>25%</span>;
    <span>padding-left</span>: <span>20px</span>;
    <span>box-sizing</span>: border-box;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			此方法可以完美兼容 IE8 以上版本</p>
	</li>
</ul>
<h4>
	2. flex</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>1<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>2<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>3<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>4<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>


<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: flex;
  }
  <span>.column</span> {
    <span>flex</span>: <span>1</span>;
  }
  <span>.column</span>+<span>.column</span> { <span>/* 相邻兄弟选择器 */</span>
    <span>margin-left</span>: <span>20px</span>;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<ul class="subtitle">
	<li>
		<p>
			强大简单，有兼容问题</p>
	</li>
</ul>
<h4>
	3. table</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>'parent-fix'</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
    <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
      <span>&lt;<span>p</span>&gt;</span>1<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;/<span>div</span>&gt;</span>
    <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
      <span>&lt;<span>p</span>&gt;</span>2<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;/<span>div</span>&gt;</span>
    <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
      <span>&lt;<span>p</span>&gt;</span>3<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;/<span>div</span>&gt;</span>
    <span>&lt;<span>div</span> <span>class</span>=<span>"column"</span>&gt;</span>
      <span>&lt;<span>p</span>&gt;</span>4<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent-fix</span> {
    <span>margin-left</span>: -<span>20px</span>;
  }
  <span>.parent</span> {
    <span>display</span>: table;
    <span>width</span>: <span>100%</span>;
    <span>/*可以布局优先，也可以单元格宽度平分在没有设置的情况下*/</span>
    <span>table-layout</span>: fixed;
  }
  <span>.column</span> {
    <span>display</span>: table-cell;
    <span>padding-left</span>: <span>20px</span>;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<h3>
	等高布局</h3>
<h4>
	1.table</h4>
<p>
	<code>table</code> 的特性为每列等宽，每行等高可以用于解决此需求</p>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"left"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>left<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"right"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: table;
    <span>width</span>: <span>100%</span>;
    <span>table-layout</span>: fixed;
  }
  <span>.left</span> {
    <span>display</span>: table-cell;
    <span>width</span>: <span>100px</span>;
  }
  <span>.right</span> {
    <span>display</span>: table-cell
    <span>/*宽度为剩余宽度*/</span>
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<h4>
	2.flex</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"left"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>left<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"right"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>display</span>: flex;
  }
  <span>.left</span> {
    <span>width</span>: <span>100px</span>;
    <span>margin-left</span>: <span>20px</span>;
  }
  <span>.right</span> {
    <span>flex</span>: <span>1</span>;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<p>
	注意这里实际上使用了 <code>align-items: stretch</code>，flex 默认的 <code>align-items</code> 的值为 <code>stretch</code></p>
<h4>
	3. float</h4>
<pre><code><span>&lt;<span>div</span> <span>class</span>=<span>"parent"</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"left"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>left<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
  <span>&lt;<span>div</span> <span>class</span>=<span>"right"</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
    <span>&lt;<span>p</span>&gt;</span>right<span>&lt;/<span>p</span>&gt;</span>
  <span>&lt;/<span>div</span>&gt;</span>
<span>&lt;/<span>div</span>&gt;</span>

<span>&lt;<span>style</span>&gt;</span><span>
  <span>.parent</span> {
    <span>overflow</span>: hidden;
  }
  <span>.left</span>,
  <span>.right</span> {
    <span>padding-bottom</span>: <span>9999px</span>;
    <span>margin-bottom</span>: -<span>9999px</span>;
  }
  <span>.left</span> {
    <span>float</span>: left;
    <span>width</span>: <span>100px</span>;
    <span>margin-right</span>: <span>20px</span>;
  }
  <span>.right</span> {
    <span>overflow</span>: hidden;
  }
</span><span>&lt;/<span>style</span>&gt;</span>
</code></pre>
<p>
	此方法为伪等高（只有背景显示高度相等），左右真实的高度其实不相等。 <strong>兼容性较好</strong>。</p>
<p>
	到此，我们了解常见的布局解决方案，这些只是参考，一样的布局实现方式多种多样。主要就使用<code>position</code>、<code>flex</code> 、<code>table</code><em>（从很久很久以前起，我们就抛弃了table布局页面，但display: table;是异常强大）</em>、<code>float</code>等属性<em>目前<code>flex</code>兼容性较差</em> <strong>傲娇的程序员应该放弃太低版本的浏览器</strong></p>
