---
title: css的伪类选择器
img: 
categories: 前端
tags:
  - CSS
  - 伪类
---

<div id="preview-contents" class="note-content">
<p><strong>CSS 中常用伪类</strong>：CSS伪类是用来添加一些选择器的特殊效果。</p>
<h3 id="语法">语法</h3>
<pre class="prettyprint hljs-dark"><code class="hljs css"><span class="hljs-comment">/*标签和伪类*/</span><br><span class="hljs-tag">tagName</span><span class="hljs-pseudo">:pseudo-class</span><span class="hljs-rules">{<span class="hljs-rule"><span class="hljs-attribute">property</span>:<span class="hljs-value">value</span></span>;}</span><br><span class="hljs-comment">/*CSS类名和伪类*/</span><br><span class="hljs-class">.className</span><span class="hljs-pseudo">:pseudo-class</span><span class="hljs-rules">{<span class="hljs-rule"><span class="hljs-attribute">property</span>:<span class="hljs-value">value</span></span>;}</span><br></code></pre>
<blockquote>
<p>在CSS定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的； <br>
在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的； <br>
伪类的名称不区分大小写</p>
</blockquote>
<p>下面介绍一下常用的伪类有哪些？</p>
<ul>
    <li><strong>first-child</strong> ：first-child 伪类来选择元素的第一个子元素；</li>
</ul>
<pre class="prettyprint hljs-dark"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">html</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-title">head</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-title">style</span>&gt;</span><span class="css"><br>            <span class="hljs-tag">p</span><span class="hljs-pseudo">:first-child</span><span class="hljs-rules">{<br>                <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value">blue</span></span>;<br>            }</span> <br>        </span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span><br><br>    <span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>一个段落<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>一个段落<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span><br></code></pre>
<ul>
    <li><strong>lang</strong> ：使你有能力为不同的语言定义特殊的规则；</li>
</ul>
<pre class="prettyprint hljs-dark"><code class="hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">html</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-title">head</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-title">style</span>&gt;</span><span class="css"><br>            <span class="hljs-tag">q</span><span class="hljs-pseudo">:lang(no)</span> <span class="hljs-rules">{<span class="hljs-rule"><span class="hljs-attribute">quotes</span>:<span class="hljs-value"> <span class="hljs-string">"~"</span> <span class="hljs-string">"~"</span></span></span>;}</span><br>            <span class="hljs-comment">/*lang 类为属性值为 no 的q元素定义引号的类型*/</span><br>        </span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-title">head</span>&gt;</span><br><br>    <span class="hljs-tag">&lt;<span class="hljs-title">body</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-title">p</span>&gt;</span>Some text <span class="hljs-tag">&lt;<span class="hljs-title">q</span> <span class="hljs-attribute">lang</span>=<span class="hljs-value">"no"</span>&gt;</span>to be or not to be<span class="hljs-tag">&lt;/<span class="hljs-title">q</span>&gt;</span> Some text.<span class="hljs-tag">&lt;/<span class="hljs-title">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-title">body</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-title">html</span>&gt;</span><br></code></pre>
<p>浏览器支持的单位有：</p>
<table border="1">
    <thead>
        <tr>
            <th align="left">选择器</th>
            <th align="right">演示</th>
            <th align="center">描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left">:checked</td>
            <td align="right">input:checked</td>
            <td align="center">选择所有选中的表单元素</td>
        </tr>
        <tr>
            <td align="left">:disabled</td>
            <td align="right">input:disabled</td>
            <td align="center">选择所有禁用的表单元素</td>
        </tr>
        <tr>
            <td align="left">:empty</td>
            <td align="right">p:empty</td>
            <td align="center">选择所有没有子元素的p元素</td>
        </tr>
        <tr>
            <td align="left">:enabled</td>
            <td align="right">input:enabled</td>
            <td align="center">选择所有启用的表单元素</td>
        </tr>
        <tr>
            <td align="left">:first-of-type</td>
            <td align="right">p:first-of-type</td>
            <td align="center">选择每个父元素是p元素的第一个p子元素</td>
        </tr>
        <tr>
            <td align="left">:in-range</td>
            <td align="right">input:in-range</td>
            <td align="center">选择元素指定范围内的值</td>
        </tr>
        <tr>
            <td align="left">:last-child</td>
            <td align="right">p:last-child</td>
            <td align="center">选择所有p元素的最后一个子元素</td>
        </tr>
        <tr>
            <td align="left">:last-of-type</td>
            <td align="right">p:last-of-type</td>
            <td align="center">选择每个p元素是其母元素的最后一个p元素</td>
        </tr>
        <tr>
            <td align="left">:not(selector)</td>
            <td align="right">:not(p)</td>
            <td align="center">选择所有p以外的元素</td>
        </tr>
        <tr>
            <td align="left">:nth-child(n)</td>
            <td align="right">p:nth-child(2)</td>
            <td align="center">选择所有p元素的第二个子元素</td>
        </tr>
        <tr>
            <td align="left">:nth-last-child(n)</td>
            <td align="right">p:nth-last-child(2)</td>
            <td align="center">选择所有p元素倒数的第二个子元素</td>
        </tr>
        <tr>
            <td align="left">:nth-last-of-type(n)</td>
            <td align="right">p:nth-last-of-type(2)</td>
            <td align="center">选择所有p元素倒数的第二个为p的子元素</td>
        </tr>
        <tr>
            <td align="left">:nth-of-type(n)</td>
            <td align="right">p:nth-of-type(2)</td>
            <td align="center">选择所有p元素第二个为p的子元素</td>
        </tr>
        <tr>
            <td align="left">:only-of-type</td>
            <td align="right">p:only-of-type</td>
            <td align="center">选择所有仅有一个子元素为p的元素</td>
        </tr>
        <tr>
            <td align="left">:only-child</td>
            <td align="right">p:only-child</td>
            <td align="center">选择所有仅有一个子元素的p元素</td>
        </tr>
        <tr>
            <td align="left">:optional</td>
            <td align="right">input:optional</td>
            <td align="center">选择没有”required”的元素属性</td>
        </tr>
        <tr>
            <td align="left">:out-of-range</td>
            <td align="right">input:out-of-range</td>
            <td align="center">选择指定范围以外的值的元素属性</td>
        </tr>
        <tr>
            <td align="left">:read-only</td>
            <td align="right">input:read-only</td>
            <td align="center">选择只读属性的元素属性</td>
        </tr>
        <tr>
            <td align="left">:read-write</td>
            <td align="right">input:read-write</td>
            <td align="center">选择没有只读属性的元素属性</td>
        </tr>
        <tr>
            <td align="left">:required</td>
            <td align="right">input:required</td>
            <td align="center">选择有”required”属性指定的元素属性</td>
        </tr>
        <tr>
            <td align="left">:root</td>
            <td align="right">root</td>
            <td align="center">选择文档的根元素</td>
        </tr>
        <tr>
            <td align="left">:target</td>
            <td align="right">news:targe</td>
            <td align="center">择当前活动#news元素(点击URL包含锚的名字)</td>
        </tr>
        <tr>
            <td align="left">:valid</td>
            <td align="right">input:valid</td>
            <td align="center">选择所有有效值的属性</td>
        </tr>
        <tr>
            <td align="left">:link</td>
            <td align="right">a:link</td>
            <td align="center">选择所有未访问链接</td>
        </tr>
        <tr>
            <td align="left">:visited</td>
            <td align="right">a:visited</td>
            <td align="center">选择所有访问过的链接</td>
        </tr>
        <tr>
            <td align="left">:active</td>
            <td align="right">a:active</td>
            <td align="center">选择正在活动链接</td>
        </tr>
        <tr>
            <td align="left">:hover</td>
            <td align="right">a:hover</td>
            <td align="center">把鼠标放在链接上的状态</td>
        </tr>
        <tr>
            <td align="left">:focus</td>
            <td align="right">input:focus</td>
            <td align="center">选择元素输入后具有焦点</td>
        </tr>
        <tr>
            <td align="left">:first-letter</td>
            <td align="right">p:first-letter</td>
            <td align="center">选择每个 元素的第一个字母</td>
        </tr>
        <tr>
            <td align="left">:first-line</td>
            <td align="right">p:first-line</td>
            <td align="center">选择每个 元素的第一行</td>
        </tr>
        <tr>
            <td align="left">:first-child</td>
            <td align="right">p:first-child</td>
            <td align="center">选择器匹配属于任意元素的第一个子元素的 &lt;]p&gt; 元素</td>
        </tr>
        <tr>
            <td align="left">:before</td>
            <td align="right">p:before</td>
            <td align="center">在每个元素之前插入内容</td>
        </tr>
        <tr>
            <td align="left">:after</td>
            <td align="right">p:after</td>
            <td align="center">在每个元素之后插入内容</td>
        </tr>
        <tr>
            <td align="left">:lang(language)</td>
            <td align="right">p:lang(it)</td>
            <td align="center">为元素的lang属性选择一个开始值</td>
        </tr>
    </tbody>
</table>
</div>