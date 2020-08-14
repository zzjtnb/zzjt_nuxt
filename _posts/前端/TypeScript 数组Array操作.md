---
title: TypeScript 数组Array操作
img: 
categories: 前端
tags:
  -  TypeScript
---

数组是一个很简单的数据结构，但是每次使用TypeScript的数组的时候又总是忘记怎么用了，干脆直接弄成干货，忘了过来看看。
<style>
.markdown-body .highlight pre, .markdown-body pre{
background-color: #323233;
}
</style>
<div id="content_views" class="markdown_views">
						
<p>数组是一个很简单的数据结构，但是每次使用TypeScript的数组的时候又总是忘记怎么用了，干脆直接弄成干货，忘了过来看看。</p>

<p><strong>一、数组的声明</strong></p>



<pre class="prettyprint" name="code"><code class="hljs javascript has-numbering" onclick="mdcp.signin(event)"><span class="hljs-keyword">let</span> array1:<span class="hljs-built_in">Array</span>&lt;number&gt;;
<span class="hljs-keyword">let</span> array2:number[];</code></pre>

<p><strong>二、数组初始化</strong></p>



<pre class="prettyprint" name="code"><code class="hljs javascript has-numbering" onclick="mdcp.signin(event)"><span class="hljs-keyword">let</span> array1:<span class="hljs-built_in">Array</span>&lt;number&gt; = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>&lt;number&gt;();
<span class="hljs-keyword">let</span> array2:number[] = [<span class="hljs-number">1</span>，<span class="hljs-number">2</span>，<span class="hljs-number">3</span>];</code></pre>

<p><strong>三、数组元素赋值、添加、更改</strong></p>



<pre class="prettyprint" name="code"><code class="hljs cpp has-numbering" onclick="mdcp.signin(event)">let <span class="hljs-built_in">array</span>:Array&lt;number&gt; = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>];
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>)      <span class="hljs-comment">// [1, 2, 3, 4]</span>

<span class="hljs-built_in">array</span>[<span class="hljs-number">0</span>] = <span class="hljs-number">20</span>;          <span class="hljs-comment">// 修改</span>
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>)      <span class="hljs-comment">// [20, 2, 3, 4]</span>

<span class="hljs-built_in">array</span>[<span class="hljs-number">4</span>] = <span class="hljs-number">5</span>;           <span class="hljs-comment">// 赋值</span>
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>)      <span class="hljs-comment">// [20, 2, 3, 4, 5]</span>

<span class="hljs-built_in">array</span>.push(<span class="hljs-number">6</span>);          <span class="hljs-comment">// 添加</span>
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>)      <span class="hljs-comment">// [20, 2, 3, 4, 5, 6]</span>

<span class="hljs-built_in">array</span>.unshift(<span class="hljs-number">8</span>, <span class="hljs-number">0</span>);    <span class="hljs-comment">// 在第一个位置依次添加</span>
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>);     <span class="hljs-comment">// [8, 0, 20, 2, 3, 4, 5, 6]</span></code></pre>

<p><strong>四、删除</strong></p>



<pre class="prettyprint" name="code"><code class="hljs cpp has-numbering" onclick="mdcp.signin(event)">let <span class="hljs-built_in">array</span>:Array&lt;number&gt; = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>];
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>)      <span class="hljs-comment">// [1, 2, 3, 4]</span>

let popValue = <span class="hljs-built_in">array</span>.pop();     <span class="hljs-comment">// 弹出</span>
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>)      <span class="hljs-comment">// [1, 2, 3]</span>

<span class="hljs-built_in">array</span>.splice(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>);     <span class="hljs-comment">// 删除元素（index, deleteCount）</span>
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>)      <span class="hljs-comment">// [2, 3]</span>

<span class="hljs-built_in">array</span>.shift();          <span class="hljs-comment">// 删除第一个元素</span>
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>);     <span class="hljs-comment">// [3]</span></code></pre>

<p><strong>五、合并、断开数组 </strong></p>



<pre class="prettyprint" name="code"><code class="hljs java has-numbering" onclick="mdcp.signin(event)"><span class="hljs-javadoc">/**
  * Combines two or more arrays.
  *<span class="hljs-javadoctag"> @param</span> items Additional items to add to the end of array1.
  */</span>
concat(...items: T[][]): T[];
<span class="hljs-javadoc">/**
  * Combines two or more arrays.
  *<span class="hljs-javadoctag"> @param</span> items Additional items to add to the end of array1.
  */</span>
concat(...items: (T | T[])[]): T[];
<span class="hljs-javadoc">/**
 * 该方法返回指定起始位置的一个新的数组
 */</span>
slice(start?: number, end?: number): T[];</code></pre>



<pre class="prettyprint" name="code"><code class="hljs oxygene has-numbering" onclick="mdcp.signin(event)">let <span class="hljs-keyword">array</span>: <span class="hljs-keyword">Array</span>&lt;number&gt; = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
let array2: <span class="hljs-keyword">Array</span>&lt;number&gt; = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>];
let arrayValue = <span class="hljs-number">7</span>;
<span class="hljs-keyword">array</span> = <span class="hljs-keyword">array</span>.<span class="hljs-keyword">concat</span>( array2);
console.log(<span class="hljs-keyword">array</span>)          <span class="hljs-comment">// [1, 2, 3, 4, 5, 6]</span>

<span class="hljs-keyword">array</span> = <span class="hljs-keyword">array</span>.<span class="hljs-keyword">concat</span>(arrayValue);
console.log(<span class="hljs-keyword">array</span>)          <span class="hljs-comment">// [1, 2, 3, 4, 5, 6, 7]</span>

let newArray = <span class="hljs-keyword">array</span>.slice(<span class="hljs-number">2</span>, <span class="hljs-number">4</span>);
console.log(newArray)      <span class="hljs-comment">// [3, 4]</span></code></pre>

<p><strong>六、查找数组元素位置</strong></p>



<pre class="prettyprint" name="code"><code class="hljs java has-numbering" onclick="mdcp.signin(event)"><span class="hljs-javadoc">/**
  * 返回查找到的第一个元素所在位置
  */</span>
indexOf(searchElement: T, fromIndex?: number): number;
<span class="hljs-javadoc">/**
  * 返回反序查找的第一个元素所在位置
  */</span>
lastIndexOf(searchElement: T, fromIndex?: number): number;</code></pre>



<pre class="prettyprint" name="code"><code class="hljs cpp has-numbering" onclick="mdcp.signin(event)">let <span class="hljs-built_in">array</span>: Array&lt;<span class="hljs-built_in">string</span>&gt; = [<span class="hljs-string">"a"</span>,<span class="hljs-string">"b"</span>,<span class="hljs-string">"c"</span>,<span class="hljs-string">"d"</span>,<span class="hljs-string">"c"</span>,<span class="hljs-string">"a"</span>];
let indexC = <span class="hljs-built_in">array</span>.indexOf(<span class="hljs-string">"c"</span>);
console.<span class="hljs-built_in">log</span>(indexC);            <span class="hljs-comment">// 2</span>
let lastA = <span class="hljs-built_in">array</span>.lastIndexOf(<span class="hljs-string">"a"</span>);
console.<span class="hljs-built_in">log</span>(lastA);             <span class="hljs-comment">// 5</span></code></pre>

<p><strong>七、连接数组元素</strong></p>



<pre class="prettyprint" name="code"><code class="hljs java has-numbering" onclick="mdcp.signin(event)"><span class="hljs-javadoc">/**
 * 连接数组
 */</span>
join(separator?: string): string;</code></pre>



<pre class="prettyprint" name="code"><code class="hljs cpp has-numbering" onclick="mdcp.signin(event)">let <span class="hljs-built_in">array</span>: Array&lt;<span class="hljs-built_in">string</span>&gt; = [<span class="hljs-string">"a"</span>,<span class="hljs-string">"b"</span>,<span class="hljs-string">"c"</span>,<span class="hljs-string">"d"</span>,<span class="hljs-string">"c"</span>,<span class="hljs-string">"a"</span>];
let result = <span class="hljs-built_in">array</span>.join();
console.<span class="hljs-built_in">log</span>(result);            <span class="hljs-comment">// a,b,c,d,c,a</span>

result = <span class="hljs-built_in">array</span>.join(<span class="hljs-string">"+"</span>);
console.<span class="hljs-built_in">log</span>(result);            <span class="hljs-comment">// a+b+c+d+c+a</span>

result = <span class="hljs-built_in">array</span>.join(<span class="hljs-string">""</span>);
console.<span class="hljs-built_in">log</span>(result);            <span class="hljs-comment">// abcdca</span></code></pre>

<p><strong>八、排序、反序数组</strong></p>



<pre class="prettyprint" name="code"><code class="hljs cpp has-numbering" onclick="mdcp.signin(event)">let <span class="hljs-built_in">array</span>:Array&lt;number&gt; = [<span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">8</span>, <span class="hljs-number">7</span>, <span class="hljs-number">0</span>, <span class="hljs-number">4</span>];
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>);             <span class="hljs-comment">// [3, 2, 1, 8, 7, 0, 4]</span>

<span class="hljs-built_in">array</span>.sort();
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>);             <span class="hljs-comment">// [0, 1, 2, 3, 4, 7, 8]</span>

<span class="hljs-built_in">array</span>.reverse();
console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">array</span>);             <span class="hljs-comment">// [8, 7, 4, 3, 2, 1, 0]</span></code> </pre>

<p><strong>九、遍历请看这里</strong>  <a href="https://www.zzjtnb.com/#/user/blog/details/3a55ccb0a909ef84dc6bf6b7188afcbc" target="_blank">上一篇</a></p>            </div>