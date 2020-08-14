---
title: Vue中对数值进行保留小数点后两位的处理（两种情况）
img: 
categories: 前端
tags:
  - Vue
---

<div class="htmledit_views">
                <p><span style="color:#9cdcfe;">Html部分：</span></p>

<h3>&nbsp;</h3>

<p><span style="color:#808080;">&lt;</span><span style="color:#569cd6;">div</span> <span style="color:#9cdcfe;">class</span>=<span style="color:#ce9178;">"text primary-text"</span><span style="color:#808080;">&gt;</span></p>

<p><span style="color:#808080;">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">span</span><span style="color:#808080;">&gt;</span>合计：<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">span</span><span style="color:#808080;">&gt;</span></p>

<p><span style="color:#808080;">&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span><span style="color:#569cd6;">span</span> <span style="color:#9cdcfe;">class</span>=<span style="color:#ce9178;">"money"</span><span style="color:#808080;">&gt;</span>￥{{<span style="color:#9cdcfe;">totalMoney</span> | <span style="color:#9cdcfe;">numFilter</span>}}<span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">span</span><span style="color:#808080;">&gt;</span></p>

<p><span style="color:#808080;">&lt;/</span><span style="color:#569cd6;">div</span><span style="color:#808080;">&gt;</span></p>

<p>&nbsp;</p>

<p><span style="color:#9cdcfe;"><span style="color:#9cdcfe;">Js部分：</span></span></p>

<p>&nbsp;</p>

<p><span style="color:#608b4e;">// 保留小数点后两位的过滤器，尾数四舍五入</span></p>

<p><span style="color:#9cdcfe;">filters</span>: {</p>

<p><span style="color:#dcdcaa;">&nbsp; numFilter</span>(<span style="color:#9cdcfe;">value</span>) {</p>

<p><span style="color:#608b4e;">&nbsp; // 截取当前数据到小数点后两位</span></p>

<p><span style="color:#569cd6;">&nbsp; &nbsp; let</span> <span style="color:#9cdcfe;">realVal</span> = <span style="color:#4ec9b0;">Number</span>(<span style="color:#9cdcfe;">value</span>).<span style="color:#dcdcaa;">toFixed</span>(<span style="color:#b5cea8;">2</span>)</p>

<p><span style="color:#608b4e;">&nbsp; &nbsp; // num.toFixed(2)获取的是字符串</span></p>

<p><span style="color:#c586c0;">&nbsp; &nbsp; return</span> <span style="color:#4ec9b0;">Number</span>(<span style="color:#9cdcfe;">realVal</span>)</p>

<p>&nbsp; }</p>

<p>}</p>

<p>&nbsp;</p>

<p><span style="color:#608b4e;">// 保留小数点后两位的过滤器，尾数不四舍五入</span></p>

<p><span style="color:#9cdcfe;">filters</span>: {</p>

<p><span style="color:#dcdcaa;">&nbsp; numFilter</span>(<span style="color:#9cdcfe;">value</span>) {</p>

<p><span style="color:#608b4e;">&nbsp; // 截取当前数据到小数点后三位</span></p>

<p><span style="color:#569cd6;">&nbsp; &nbsp; let</span> <span style="color:#9cdcfe;">transformVal</span> = <span style="color:#4ec9b0;">Number</span>(<span style="color:#9cdcfe;">value</span>).<span style="color:#dcdcaa;">toFixed</span>(<span style="color:#b5cea8;">3</span>)</p>

<p><span style="color:#569cd6;">&nbsp; &nbsp; let</span> <span style="color:#9cdcfe;">realVal</span> = <span style="color:#9cdcfe;">transformVal</span>.<span style="color:#dcdcaa;">substring</span>(<span style="color:#b5cea8;">0</span>, <span style="color:#9cdcfe;">transformVal</span>.<span style="color:#9cdcfe;">length</span> - <span style="color:#b5cea8;">1</span>)</p>

<p><span style="color:#608b4e;">&nbsp; &nbsp; // num.toFixed(3)获取的是字符串</span></p>

<p><span style="color:#c586c0;">&nbsp; &nbsp; return</span> <span style="color:#4ec9b0;">Number</span>(<span style="color:#9cdcfe;">realVal</span>)</p>

<p>&nbsp; }</p>

<p>}</p>

<p>&nbsp;<span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color:#9cdcfe;">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>            </div>