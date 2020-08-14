---
title: TypeScript 遍历Array的方法
img: 
categories: 前端
tags:
  -  TypeScript
---

for, forEach, every

<div id="content_views" class="markdown_views">
  <!-- flowchart 箭头图标 勿删 -->
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
</svg>
<p>Typescript的官方文档 <a href="https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html" rel="nofollow" target="_blank">Iterators and Geneators</a></p>

<p>一、for..of 方法 <br> 这是最常用的方法，遍历的值是数组中的value值
</p>



<pre class="prettyprint" name="code"><code class="hljs coffeescript has-numbering" onclick="mdcp.signin(event)"><span class="hljs-reserved">let</span> someArray = [<span class="hljs-number">1</span>, <span class="hljs-string">"string"</span>,
<span class="hljs-literal">false</span>];

<span class="hljs-keyword">for</span> (<span class="hljs-reserved">let</span> entry <span class="hljs-keyword">of</span>someArray)
{
<span class="hljs-built_in">console</span>.log(entry); <span class="hljs-regexp">//</span> <span class="hljs-number">1</span>,
<span class="hljs-string">"string"</span>, <span class="hljs-literal">false</span> }

</code>

</pre>

<p>二、for..in 方法 <br> 这个方法要注意和for..of的区别，for..in遍历的值是数组的索引
</p>



<pre class="prettyprint" name="code"><code class="hljs coffeescript has-numbering" onclick="mdcp.signin(event)"><span class="hljs-reserved">let</span> list = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>,
<span class="hljs-number">6</span>];

<span class="hljs-keyword">for</span> (<span class="hljs-reserved">let</span> i <span class="hljs-keyword">in</span> list)
{
<span class="hljs-built_in">console</span>.log(i); <span class="hljs-regexp">//</span> <span class="hljs-string">"0"</span>,
<span class="hljs-string">"1"</span>, <span class="hljs-string">"2"</span>, }

<span class="hljs-keyword">for</span> (<span class="hljs-reserved">let</span> i <span class="hljs-keyword">of</span> list)
{
<span class="hljs-built_in">console</span>.log(i); <span class="hljs-regexp">//</span> <span class="hljs-string">"4"</span>,
<span class="hljs-string">"5"</span>, <span class="hljs-string">"6"</span> }

</code>
</pre>

<p>三、for循环 <br> for循环是标准的C风格语法
</p>



<pre class="prettyprint" name="code"><code class="hljs coffeescript has-numbering" onclick="mdcp.signin(event)"><span class="hljs-reserved">var</span> numbers = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>,
<span class="hljs-number">3</span>];
<span class="hljs-keyword">for</span> (<span class="hljs-reserved">var</span> _i = <span class="hljs-number">0</span>; _i
&lt; numbers.length; _i++) {
<span class="hljs-reserved">var</span> num = numbers[_i];
<span class="hljs-built_in">console</span>.log(num); <span class="hljs-regexp">//</span> <span class="hljs-string">"1"</span>,
<span class="hljs-string">"2"</span>, <span class="hljs-string">"3"</span> }

</code>

</pre>

<p>四、forEach</p>

<p>forEach其实是JavaScript的循环语法，TypeScript作为JavaScript的语法超集，当然默认也是支持的。</p>



<pre class="prettyprint" name="code"><code class="hljs php has-numbering" onclick="mdcp.signin(event)">let <span class="hljs-keyword">list</span> = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>,
<span class="hljs-number">6</span>];
<span class="hljs-keyword">list</span>.<span class="hljs-keyword">forEach</span>((val, idx, <span class="hljs-keyword">array</span>)
=&gt; {
<span class="hljs-comment">// val: 当前值</span>
<span class="hljs-comment">// idx：当前index</span>
<span class="hljs-comment">// array: Array</span> });

</code>

</pre>

<p>五、every和some <br> every和some也都是JavaScript的循环语法，TypeScript作为JavaScript的语法超集，当然默认也是支持的。因为forEach在iteration中是无法返回的，所以可以使用every和some来取代forEach。
</p>



<pre class="prettyprint" name="code"><code class="hljs php has-numbering" onclick="mdcp.signin(event)">let <span class="hljs-keyword">list</span> = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>,
<span class="hljs-number">6</span>];
<span class="hljs-keyword">list</span>.every((val, idx, <span class="hljs-keyword">array</span>) =&gt; {
<span class="hljs-comment">// val: 当前值</span>
<span class="hljs-comment">// idx：当前index</span>
<span class="hljs-comment">// array: Array</span>
<span class="hljs-keyword">return</span> <span class="hljs-keyword">true</span>; <span class="hljs-comment">// Continues</span>
<span class="hljs-comment">// Return false will quit the iteration</span> });

</code>

</pre>
</div>

<div class="htmledit_views" id="content_views">
                <h3><a name="t0"></a>方法1:for循环</h3>

<p>for循环其实是标准的C风格语法。</p>

<pre>let someArray = [1, "string", false];
​
for (var i = 0; i &lt; someArray.length; i ++) {
​
&nbsp; console.log(someArray[i]); // 1, "string", false
​
}</pre>

<h3><a name="t1"></a>方法2:for…of</h3>

<p>这个貌似是最常用的方法，angular 2中HTML语法绑定也是要的这种语法。</p>

<pre>let someArray = [1, "string", false];
​
for (let entry of someArray) {
​
&nbsp; console.log(entry); // 1, "string", false
​
}</pre>

<p>for…in 和 for…of 的区别 :</p>

<pre>let list = [4, 5, 6];
​
for (let i in list) {
&nbsp; console.log(i); // "0", "1", "2",
}
​
for (let i of list) {
&nbsp; console.log(i); // "4", "5", "6"
}</pre>

<h3><a name="t2"></a>方法3:forEach</h3>

<p>forEach其实是JavaScript的循环语法，TypeScript作为JavaScript的语法超集，当然默认也是支持的。</p>

<pre>let list = [4, 5, 6];
list.forEach((val, idx, array) =&gt; {
&nbsp; // val: 当前值
&nbsp; // idx：当前index
&nbsp; // array: Array
});</pre>

<h3><a name="t3"></a>方法4: map()</h3>

<pre>//将所有的数组元素转换为大写：
​
var strings = ["hello", "Array", "WORLD"];
function makeUpperCase(v)
{
&nbsp; return v.toUpperCase();
}
var uppers = strings.map(makeUpperCase);
// uppers is now ["HELLO", "ARRAY", "WORLD"]
// strings is unchanged
//结果：["hello", "Array", "WORLD"].map(makeUpperCase) ： HELLO, ARRAY, WORLD&nbsp;</pre>

<h3><a name="t4"></a>方法5: every()</h3>

<p>对数组中的每个元素都执行一次指定的函数（callback），直到此函数返回&nbsp;false，如果发现这个元素，every 将返回&nbsp;false，如果回调函数对每个元素执行后都返回 true ，every 将返回&nbsp;true。它只对数组中的非空元素执行指定的函数，没有赋值或者已经删除的元素将被忽略</p>

<pre>let list = [4, 5, 6];
​
list.every((val, idx, array) =&gt; {
&nbsp; // val: 当前值
&nbsp; // idx：当前index
&nbsp; // array: Array
&nbsp; return true; // Continues
&nbsp; // Return false will quit the iteration
});</pre>

<pre>//测试是否所有数组元素都大于等于10：
​
function isBigEnough(element, index, array) {
&nbsp; return (element &gt;= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
//结果：
//[12, 5, 8, 130, 44].every(isBigEnough) 返回 ： false&nbsp;
//[12, 54, 18, 130, 44].every(isBigEnough) 返回 ： true&nbsp;</pre>

<h3><a name="t5"></a>方法6: some()</h3>

<p>对数组中的每个元素都执行一次指定的函数（callback），直到此函数返回 true，如果发现这个元素，some 将返回 true，如果回调函数对每个元素执行后都返回 false ，some 将返回 false。它只对数组中的非空元素执行指定的函数，没有赋值或者已经删除的元素将被忽略。</p>

<pre>//检查是否有数组元素大于等于10：
​
function isBigEnough(element, index, array) {
&nbsp; return (element &gt;= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
// passed is false
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed is true
//结果：
//[2, 5, 8, 1, 4].some(isBigEnough) ： false&nbsp;
//[12, 5, 8, 1, 4].some(isBigEnough) ： true&nbsp;
​</pre>

<h3><a name="t6"></a>方法7: filter()</h3>

<p>语法：</p>

<p>参数说明：</p>

<p>callback： 要对每个数组元素执行的回调函数。thisObject ： 在执行回调函数时定义的this对象。</p>

<pre>//过滤掉小于 10 的数组元素：
​
//代码：
function isBigEnough(element, index, array) {
&nbsp; return (element &gt;= 10);
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// 12, 130, 44
//结果：[12, 5, 8, 130, 44].filter(isBigEnough) ： 12, 130, 44&nbsp;</pre>

<p>功能说明：</p>

<p><strong>对数组中的每个元素都执行一次指定的函数（callback），并且创建一个新的数组，该数组元素是所有回调函数执行时返回值为 true 的原数组元素。它只对数组中的非空元素执行指定的函数，没有赋值或者已经删除的元素将被忽略，同时，新创建的数组也不会包含这些元素。</strong></p>

<p>回调函数可以有三个参数：当前元素，当前元素的索引和当前的数组对象。</p>

<p>如参数 <strong>thisObject</strong> 被传递进来，它将被当做回调函数（callback）内部的 this 对象，如果没有传递或者为null，那么将会使用全局对象。</p>

<p>filter 不会改变原有数组，记住：只有在回调函数执行前传入的数组元素才有效，在回调函数开始执行后才添加的元素将被<strong>忽略</strong>，而在回调函数开始执行到最后一个元素这一期间，数组元素被删除或者被更改的，将以回调函数访问到该元素的时间为准，被删除的元素将被忽略。</p>

<h3><a name="t7"></a>方法8: Concat()</h3>

<p>该方法用于连接或者是合并2个或多个数组,并且返回一个新的数组,它并不改变已经存在的数组,而是返回一个包含所有数组值的数组.语法如下:</p>

<pre>array.concat(value1,value2,valu3,....................valuen)</pre>

<p>array: 所有的其他数组要进行合并的源数组value:要添加到源数组中的其他数组元素.</p>

<p>举例:</p>

<pre>&nbsp; &nbsp; &nbsp; var fstarry: string[] = ['C','Sharp'];
&nbsp; &nbsp; &nbsp; var scndarry: string[] = ['Corner', '.com'];
&nbsp; &nbsp; &nbsp; var result = fstarry.concat(scndarry);
&nbsp; &nbsp; &nbsp; console.log(result); // ['C','Sharp','Corner', 'com']</pre>

<h3><a name="t8"></a>方法9: Join()方法</h3>

<p>该方法用于连接一个数组的元素到一个字符串,并且返回该字符串.join方法接收一个分隔符作为参数,指定特定的像空格\逗号或加号等其他的字符来分隔数组中的元素,如果没有指定任何参数,这个方法将转换数组中的所有元素为字符串,并且连接并通过逗号分隔字符串数组元素.</p>

<pre>array.join(separator)</pre>

<p>示例如下所示:</p>

<pre>&nbsp; &nbsp; &nbsp; btnArrayJoinClick(sender: Core.Classes.TComponent){
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var fstarry: string[] = ['C','Sharp','Corner', '.com'];&nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var result = fstarry.join();
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var result1 = fstarry.join('+');
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var result2 = fstarry.join('*');
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.edit1.text="Join Method \n 第1个join示例 -&gt; " + result + "\n" + "第2个使用+号的示例 (+) -&gt; " + result1 + "\n" +
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "第3个使用*号的示例(*) -&gt; " + result2 +"\n";
&nbsp; &nbsp; &nbsp; }</pre>

<p>结果如下所示:</p>

<pre>Join Method &nbsp; &nbsp; &nbsp; 第1个join示例 -&gt; &nbsp; &nbsp; C,Sharp,Corner,.com
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 第2个使用+号的示例 (+) -&gt; &nbsp; C+Sharp+Corner+.com
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 第3个使用*号的示例(*) -&gt; &nbsp; C*Sharp*Corner*.com</pre>

<h3><a name="t9"></a>方法10:Push() 方法</h3>

<p>Push方法向数组的最后位置中插入一个或多个元素,返回新的数组的长度,push方法视数组为一个堆栈结构,语法如下所示:</p>

<pre>array.push(element1,element 2,.........)</pre>

<p>示例如下所示:</p>

<pre>&nbsp; &nbsp; &nbsp; btnpushdemoClick(sender: Core.Classes.TComponent){
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var fstarry: string[] = ['C','Sharp','Corner'];&nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var elemnt ="wis_one"
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fstarry.push(elemnt);
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.edit1.text= "Push Method \n 插入了数组元素值之后, Array is -&gt; " + fstarry + "\n"; &nbsp; &nbsp; &nbsp;&nbsp;
&nbsp; &nbsp; &nbsp; }</pre>

<p>输出结果如下所示:</p>

<pre>Push Method 插入了数组元素值之后, Array is -&gt; C,Sharp,Corner,wis_one</pre>

<h3><a name="t10"></a>方法11:pop()方法</h3>

<p>pop方法是Array对象中最流行的方法,该方法移除数组中的最后一个元素,减少数组的长度并且返回被移除的元素,如果数组为空,则pop方法会返回null.</p>

<p>语法如下所示:</p>

<pre>array.pop()</pre>

<p>示例如下所示:</p>

<pre>&nbsp; &nbsp; &nbsp; btnpopDemoClick(sender: Core.Classes.TComponent){
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var arrayName: string[] = ['C','Sharp','Corner','VB','Net','Heaven'];
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var index = arrayName.pop().toString();
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.edit1.text= "Pop Method \n 从数组中移除元素-&gt; " + index;
&nbsp; &nbsp; &nbsp; }</pre>

<p>输出结果如下所示:</p>

<pre>Pop Method 从数组中移除元素-&gt; Heaven</pre>

<h3><a name="t11"></a>方法12: reverse()</h3>

<p>用于反转数组元素的顺序,reverse方法没有参数,返回被反转后的数组,使得最后一个元素变为第1个元素,第1个元素变为最后一个元素.语法如下所示:</p>

<pre>array.reverse()</pre>

<p>示例如下所示:</p>

<pre>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var fstarry: string[] = ['aa','bb','cc'];&nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fstarry.reverse();
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.edit1.text = "Revrese Method \n 反转后的数组: -&gt; " + fstarry + "\n"; &nbsp; &nbsp;&nbsp;</pre>

<p>结果如下所示:</p>

<pre>Revrese Method 反转后的数组: -&gt; cc,bb,aa</pre>

<h3><a name="t12"></a>方法13: shift()</h3>

<p>移除数组中的首个元素,减少数组的长度并且返回被移除的元素,如果数组的键为数字型,那么所有的元素将得到新的键,从0开始依次递增.</p>

<pre>array.shift()</pre>

<p>示例如下所示:</p>

<pre>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var arrayName: string[] = ['C','Sharp','Corner','VB','Net','Heaven'];
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var index = arrayName.shift().toString();
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.edit1.text = "Shift Method \n 移除的元素为 -&gt; " + index;</pre>

<p>结果如下所示:</p>

<pre>Shift Method 移除的元素为 -&gt; C</pre>

<h3><a name="t13"></a>方法14: slice()</h3>

<p>该方法返回指定起始位置的一个新的数组,slice和concat方法让用户可以根据指定的原始数组创建一个新的数组,并不会修改原始的数组,如果只想让原始数组被新数组替代,可以设置旧的数组等于新的数组.语法如下所示:</p>

<pre>array.slice(start,end)</pre>

<p>示例如下所示:</p>

<pre>var fstarry: string[] = ['aa','bb','cc','dd','ee','ff','hh','gg'];&nbsp;
var sliceArry=fstarry.slice(3, 7);
&nbsp; this.edit1.text = "Slice Method \n 新的数组为 -&gt; " + sliceArry + "\n";</pre>

<p>示例运行结果如下:</p>

<pre>Slice Method 新的数组为 -&gt; dd,ee,ff,hh</pre>

<h3><a name="t14"></a>方法15:sort()</h3>

<p>排序数组,如果没有指定参数,那么将会按照字母数字顺序进行排序,语法如下:</p>

<pre>array.sort(comparison_function)</pre>

<p>示例如下所示:</p>

<pre>           var arrayName: string[] = ['C','Sharp','Corner','VB','Net','Heaven'];
           var sortArry = arrayName.sort();
           this.edit1.text= "Sort Method \n 排序后的结果为-&gt; " + sortArry+"\n";
</pre>

<p>运行效果如下所示:</p>

<pre>Sort Method  排序后的结果为-&gt; C,Corner,Heaven,Net,Sharp,VB
</pre>

<h3><a name="t15"></a>方法16: IndexOf()</h3>

<p>用来在数组中搜索指定的元素值,并且返回所发现的第1个结果值的下标,语法如下所示:</p>

<pre>array.indexOf(searchvalue,start)
</pre>

<p>searchvalue是指定要搜索的值,start指定要搜索的起始索引位置,如果没有指定,那么表示从0开始进行搜索.如果找到则返回找到的索引值,如果没有找到,则返回-1.</p>

<pre>&nbsp; &nbsp; &nbsp; var arrayName: string[] = ['C','Sharp','Corner','Dot','Net','Heaven'];
&nbsp; &nbsp; &nbsp; var index = arrayName.indexOf('Dot');
&nbsp; &nbsp; &nbsp; //放回index的值为：3</pre>

<h3><a name="t16"></a>方法17: LastIndexOf()</h3>

<p>与IndexOf相反,它返回的是最后一次批配的字符串的索引位置,如下语法所示:</p>

<pre>array.lastIndexOf(searchvalue,start)
</pre>

<p>如下示例所示:</p>

<pre>&nbsp; &nbsp; &nbsp; button1Click(sender: Core.Classes.TComponent){
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var arrayName: string[] = ['aa','bb','cc','dd','ee','hh','cc','aa'];
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; var index = arrayName.lastIndexOf('cc');
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; this.edit1.text="cc的索引位置是:"+index;
&nbsp; &nbsp; &nbsp; }</pre>

<p>输出结果如下:</p>

<pre>cc的索引位置是:6</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>            </div>
