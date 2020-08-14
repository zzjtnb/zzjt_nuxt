---
title:  实时编辑CSS
img: 
categories: 前端
tags:
  -  CSS
---
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML 5中新增了一个新的全局属性，contenteditable属性。</font></font></p><blockquote>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">contenteditable属性规定是否可编辑元素的内容。</font></font></p>
</blockquote><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以通过设置这个属性，来对之前的一些文本进行编辑。</font></font></p><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像这样。</font></font></p><div class="image-package">
<div class="image-container" style="max-width: 700px; max-height: 309px; background-color: transparent;">

<div class="image-view" data-width="705" data-height="309"><img data-original-src="//upload-images.jianshu.io/upload_images/693359-b4cbbc3407ca1fc6.gif" data-original-width="705" data-original-height="309" data-original-format="image/gif" data-original-filesize="61752" class="" style="cursor: zoom-in;" src="//upload-images.jianshu.io/upload_images/693359-b4cbbc3407ca1fc6.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/705/format/webp"></div>
</div>
<div class="image-caption"></div>
</div><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该属性的取值：</font></font></p><table>
<thead>
<tr>
<th style="text-align:left"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font></font></th>
<th style="text-align:left"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述</font></font></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正</font></font></td>
<td style="text-align:left"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规定可以编辑元素内容。</font></font></td>
</tr>
<tr>
<td style="text-align:left"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假</font></font></td>
<td style="text-align:left"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规定无法编辑元素内容。</font></font></td>
</tr>
<tr>
<td style="text-align:left"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">班级名称</font></font></td>
<td style="text-align:left"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">继承父元素的contenteditable属性。</font></font></td>
</tr>
</tbody>
</table><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样例代码：</font></font></p><pre class="hljs xml"><code class="xml"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>李鹏李先生<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">contenteditable</span>=<span class="hljs-string">"true"</span>&gt;</span>这是一段可编辑的段落。请试着编辑该文本。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那这个属性值和我们今天要说的内容有什么关系呢？</font></font></p><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以利用当前内容可编辑的这个特性，来去实现一个小的效果，例如这样。</font></font></p><div class="image-package">
<div class="image-container" style="max-width: 660px; max-height: 239px; background-color: transparent;">
<div class="image-view" data-width="660" data-height="239"><img data-original-src="//upload-images.jianshu.io/upload_images/693359-b0f0ff8ad10ea30a.gif" data-original-width="660" data-original-height="239" data-original-format="image/gif" data-original-filesize="96828" class="" style="cursor: zoom-in;" src="//upload-images.jianshu.io/upload_images/693359-b0f0ff8ad10ea30a.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/660/format/webp"></div>
</div>
<div class="image-caption"></div>
</div><pre class="hljs xml"><code class="xml"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>MR_LP<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display:block"</span> <span class="hljs-attr">contentEditable</span>&gt;</span><span class="css">
        <span class="hljs-selector-tag">body</span> { <span class="hljs-attribute">color</span>: blue }
    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，要测试出来效果，你自己还是需要会一些CSS的，尴尬脸。</font></font></p>