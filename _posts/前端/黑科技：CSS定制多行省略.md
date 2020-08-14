---
title:  黑科技：CSS定制多行省略
img: 
categories: 前端
tags:
  -  css
---

<div class="article-box">
  <div class="article-title">
      <h3>黑科技：CSS定制多行省略</h3>
      
  </div>
  <div class="article-con">
      <h4>
什么是多行省略？</h4>
<div style="text-align: center;">
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/513be5587de0805a4305a31b3891c53e.jpg"></div>
<p>
当字数多到一定程度就显示省略号点点点。最初只是简单的点点点，之后花样越来越多，点点点加下箭头，点点点加更多，点点点加更多加箭头...。多行省略就是大段文字后面的花式点点点。</p>
<h4>
同行这么做：</h4>
<div style="text-align: center;">
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/62473f78a1f2e2bb3cd54c0c451395a8.jpg"></div>
<ol>
<li>
Google Plus用透明到白色的渐变遮罩，渐变遮罩在文字超出的时候才显示，但无法挤出文字，且背景只能纯色，不理想。</li>
<li>
豌豆荚则更简单粗暴换行显示，换行显示则文字未超出时依然显示 ...xxx，更不理想！</li>
</ol>
<h4>
我这样做：</h4>
<div style="text-align: center;">
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/8c67f1b64c52f5933b7efa3043f1fb67.jpg"></div>
<p>
在QQ浏览器的页面用了一个原创的mod-more UI组件，实现了定制的多行省略，还是纯CSS的，领先同行一大截，赞！赞！赞！只可惜，mod-more组件的高度是固定的。对mod-more进一步进化，完美自适应高度，而且代码简化易用。</p>
<h4>
怎么做到的？</h4>
<div style="text-align: center;">
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/fd128bfeb069fd7a0a16f8f4449ec76e.gif"></div>
<p>
定制多行省略 = 按需显示...更多 + 文字溢出截断，按需显示...更多是用浮动特性实现，文字溢出阶段可以用前置浮动和line-clamp实现，QQ浏览器现有方案就是前置浮动，但缺点是高度固定，使用line-clamp则自适应高度，完美！限于篇幅，这里只提line-clamp的实现方案，QQ浏览器将在下阶段升级至该方案。</p>
<h4>
原理详解！</h4>
<h4>
按需显示...更多</h4>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/bf6875d8db0abb458ba37db2014ca528.gif">
<pre><code><span class="hljs-meta" style="color: rgb(153, 153, 153); font-weight: 700;">&lt;!doctype html&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">html</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">@-<span class="hljs-keyword" style="font-weight: 700;">webkit</span>-<span class="hljs-keyword" style="font-weight: 700;">keyframes</span> width-change {0%,100%{<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">320px</span>} 50%{<span class="hljs-attribute" style="color: navy;">width</span>:<span class="hljs-number" style="color: teal;">260px</span>}}<span class="hljs-comment" style="color: rgb(153, 153, 136);">/*测试*/</span></span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"font-size:12px;line-height: 18px;-webkit-animation: width-change 8s ease infinite;background: rgb(230, 230, 230);"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float:right;margin-left: -50px;width:100%;position:relative;background: hsla(229, 100%, 75%, 0.5);"</span>&gt;</span>腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float:right;position:relative;width:50px;height: 108px;color:transparent;background: hsla(334, 100%, 75%, 0.5);"</span>&gt;</span>placeholder<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float:right;width:50px;height:18px;position: relative;background: hsla(27, 100%, 75%, 0.5);"</span>&gt;</span>...更多<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>
利用右浮动原理——右浮动元素从右到左依次排列，不够空间则换行。蓝色块、粉色块、橙色块依次右浮动，蓝色块高度小于6行文字时，橙色块在右边，蓝色块高度大于6行文字时，左下角刚好够橙色块排列的空间，于是橙色块就到左边了</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/d4a460f53fe97c563392d4049600aeaa.gif">
<pre><code><span class="hljs-meta" style="color: rgb(153, 153, 153); font-weight: 700;">&lt;!doctype html&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">html</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">@-<span class="hljs-keyword" style="font-weight: 700;">webkit</span>-<span class="hljs-keyword" style="font-weight: 700;">keyframes</span> width-change {0%,100%{<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">320px</span>} 50%{<span class="hljs-attribute" style="color: navy;">width</span>:<span class="hljs-number" style="color: teal;">260px</span>}}<span class="hljs-comment" style="color: rgb(153, 153, 136);">/*测试*/</span></span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"font-size:12px;line-height: 18px;-webkit-animation: width-change 8s ease infinite;background: rgb(230, 230, 230);"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float:right;margin-left: -50px;width:100%;position:relative;background: hsla(229, 100%, 75%, 0.5);"</span>&gt;</span>腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float:right;position:relative;width:50px;height: 108px;color:transparent;background: hsla(334, 100%, 75%, 0.5);"</span>&gt;</span>placeholder<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float:right;width:50px;height:18px;position: relative;background: hsla(27, 100%, 75%, 0.5);left: 100%;-webkit-transform: translate(-100%,-100%);"</span>&gt;</span>...更多<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>
进一步将橙色块偏移到正确位置就大功告成了！细心的同学会发现，将橙色块加上渐变底就是Google Plus在用的方案。</p>
<h4>
文字溢出截断</h4>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/7615c027dd1c014acf78041c83af8f14.gif">
<pre><code><span class="hljs-meta" style="color: rgb(153, 153, 153); font-weight: 700;">&lt;!DOCTYPE html&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">html</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">@-<span class="hljs-keyword" style="font-weight: 700;">webkit</span>-<span class="hljs-keyword" style="font-weight: 700;">keyframes</span> width-change {0%,100%{<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">320px</span>} 50%{<span class="hljs-attribute" style="color: navy;">width</span>:<span class="hljs-number" style="color: teal;">260px</span>}}<span class="hljs-comment" style="color: rgb(153, 153, 136);">/*测试*/</span></span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"font-size: 12px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 6;color: red;line-height: 18px;position: relative;-webkit-animation: width-change 8s ease infinite;background: rgb(230, 230, 230);"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"color:#000;display: inline;vertical-align: top;background: rgb(204, 204, 204);"</span>&gt;</span>腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/b1ec82b5e9ddc7f79a7c41371ddd8aad.gif">
<pre><code><span class="hljs-meta" style="color: rgb(153, 153, 153); font-weight: 700;">&lt;!DOCTYPE html&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">html</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">@-<span class="hljs-keyword" style="font-weight: 700;">webkit</span>-<span class="hljs-keyword" style="font-weight: 700;">keyframes</span> width-change {0%,100%{<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">320px</span>} 50%{<span class="hljs-attribute" style="color: navy;">width</span>:<span class="hljs-number" style="color: teal;">260px</span>}}<span class="hljs-comment" style="color: rgb(153, 153, 136);">/*测试*/</span></span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"font-size: 36px;letter-spacing: 28px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 6;color: red;line-height: 18px;position: relative;-webkit-animation: width-change 8s ease infinite;background: rgb(230, 230, 230);"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"color:#000;display: inline;font-size: 12px;vertical-align: top;letter-spacing: 0;background: rgb(204, 204, 204);"</span>&gt;</span>腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>
设置外容器的<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">font-size</code>、<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">letter-spacing</code>、<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">color</code>，并在子容器里恢复就可以单独设置省略号。这里外容器设置font-size的值等于2倍行高（余下要撑开的宽度可用<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">letter-spacing</code>补足，也可仅用<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">font-size</code>撑开全部的宽度），<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">color</code>为<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">transparent</code>就可以让line-clamp既挤出文字又不截断容器高度，外容器高度达到7行而不是默认表现的6行，从而达到需要的溢出截断效果</p>
<div style="text-align: center;">
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/6f6f5f911f0cfc8c51c10c42dfb8cf6f.jpg"></div>
<h4>
合体！定制多行省略</h4>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/34f32361c794cab431d37f9852364577.gif">
<pre><code><span class="hljs-meta" style="color: rgb(153, 153, 153); font-weight: 700;">&lt;!DOCTYPE html&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">html</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">@-<span class="hljs-keyword" style="font-weight: 700;">webkit</span>-<span class="hljs-keyword" style="font-weight: 700;">keyframes</span> width-change {0%,100%{<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">320px</span>} 50%{<span class="hljs-attribute" style="color: navy;">width</span>:<span class="hljs-number" style="color: teal;">260px</span>}}<span class="hljs-comment" style="color: rgb(153, 153, 136);">/*测试*/</span></span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"position: relative;line-height:18px;-webkit-animation: width-change 8s ease infinite;max-height: 108px;"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"font-size: 36px;letter-spacing: 28px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 6;color: transparent;line-height: 18px;position: relative;"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"font-size:12px;color: #000;display: inline;vertical-align: top;letter-spacing: 0;"</span>&gt;</span>
腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"position:absolute;top: 0;left: 50%;width: 100%;height: 100%;letter-spacing: 0;color: #000;font-size: 12px;background: rgba(173, 216, 230, 0.5);"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float: right;width: 50%;height: 100%;background: rgba(255, 192, 203, 0.5);"</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float: right;width: 50%;height: 108px;background: hsla(223, 100%, 50%, 0.19);"</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">style</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"float: right;width: 50px;height: 18px;position: relative;background: rgba(255, 165, 0, 0.5);"</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">""</span>&gt;</span>... 更多<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>   
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>
将<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">-webkit-line-clamp</code>实现的文字溢出截断代码为主体，叠加绝对定位同步的按需显示...更多结构。因为绝对定位，这里使用百分比简化代码。最外包一层结构限制最大高度。</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/54a230dc588ec75a3f8d1f0ced6af98d.gif">
<pre><code><span class="hljs-meta" style="color: rgb(153, 153, 153); font-weight: 700;">&lt;!DOCTYPE html&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">html</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-comment" style="color: rgb(153, 153, 136);">/*
* 行高 h
* 最大行数 n
* ...更多容器的宽 w
* 字号 f
*/</span>

@-<span class="hljs-keyword" style="font-weight: 700;">webkit</span>-<span class="hljs-keyword" style="font-weight: 700;">keyframes</span> width-change {0%,100%{<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">320px</span>} 50%{<span class="hljs-attribute" style="color: navy;">width</span>:<span class="hljs-number" style="color: teal;">260px</span>}}
<span class="hljs-selector-class">.ellipsis</span> {
<span class="hljs-attribute" style="color: navy;">position</span>: relative;
<span class="hljs-attribute" style="color: navy;">background</span>: <span class="hljs-built_in" style="color: rgb(0, 134, 179);">rgb</span>(230, 230, 230);
<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">260px</span>;
<span class="hljs-attribute" style="color: navy;">max-height</span>: <span class="hljs-number" style="color: teal;">108px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* h*n */</span>
<span class="hljs-attribute" style="color: navy;">line-height</span>: <span class="hljs-number" style="color: teal;">18px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* h */</span>
<span class="hljs-attribute" style="color: navy;">overflow</span>: hidden;
<span class="hljs-attribute" style="color: navy;">-webkit-animation</span>: width-change <span class="hljs-number" style="color: teal;">8s</span> ease infinite;
}
<span class="hljs-selector-class">.ellipsis-container</span> {
<span class="hljs-attribute" style="color: navy;">position</span>: relative;
<span class="hljs-attribute" style="color: navy;">display</span>: -webkit-box;
<span class="hljs-attribute" style="color: navy;">-webkit-box-orient</span>: vertical;
<span class="hljs-attribute" style="color: navy;">-webkit-line-clamp</span>: <span class="hljs-number" style="color: teal;">6</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* n */</span>
<span class="hljs-attribute" style="color: navy;">font-size</span>: <span class="hljs-number" style="color: teal;">50px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* w */</span>
<span class="hljs-attribute" style="color: navy;">color</span>: transparent;
}
<span class="hljs-selector-class">.ellipsis-content</span> {
<span class="hljs-attribute" style="color: navy;">color</span>: <span class="hljs-number" style="color: teal;">#000</span>;
<span class="hljs-attribute" style="color: navy;">display</span>: inline;
<span class="hljs-attribute" style="color: navy;">vertical-align</span>: top;
<span class="hljs-attribute" style="color: navy;">font-size</span>: <span class="hljs-number" style="color: teal;">12px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* f */</span>
}
<span class="hljs-selector-class">.ellipsis-ghost</span> {
<span class="hljs-attribute" style="color: navy;">position</span>:absolute;
<span class="hljs-attribute" style="color: navy;">z-index</span>: <span class="hljs-number" style="color: teal;">1</span>;
<span class="hljs-attribute" style="color: navy;">top</span>: <span class="hljs-number" style="color: teal;">0</span>;
<span class="hljs-attribute" style="color: navy;">left</span>: <span class="hljs-number" style="color: teal;">50%</span>;
<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">100%</span>;
<span class="hljs-attribute" style="color: navy;">height</span>: <span class="hljs-number" style="color: teal;">100%</span>;
<span class="hljs-attribute" style="color: navy;">color</span>: <span class="hljs-number" style="color: teal;">#000</span>;
}
<span class="hljs-selector-class">.ellipsis-ghost</span><span class="hljs-selector-pseudo">:before</span> {
<span class="hljs-attribute" style="color: navy;">content</span>: <span class="hljs-string" style="color: rgb(221, 17, 68);">""</span>;
<span class="hljs-attribute" style="color: navy;">display</span>: block;
<span class="hljs-attribute" style="color: navy;">float</span>: right;
<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">50%</span>;
<span class="hljs-attribute" style="color: navy;">height</span>: <span class="hljs-number" style="color: teal;">100%</span>;
}
<span class="hljs-selector-class">.ellipsis-placeholder</span> {
<span class="hljs-attribute" style="color: navy;">content</span>: <span class="hljs-string" style="color: rgb(221, 17, 68);">""</span>;
<span class="hljs-attribute" style="color: navy;">display</span>: block;
<span class="hljs-attribute" style="color: navy;">float</span>: right;
<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">50%</span>;
<span class="hljs-attribute" style="color: navy;">height</span>: <span class="hljs-number" style="color: teal;">108px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* h*n */</span>
}
<span class="hljs-selector-class">.ellipsis-more</span> {
<span class="hljs-attribute" style="color: navy;">position</span>: relative;
<span class="hljs-attribute" style="color: navy;">float</span>: right;
<span class="hljs-attribute" style="color: navy;">font-size</span>: <span class="hljs-number" style="color: teal;">12px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* f */</span>
<span class="hljs-attribute" style="color: navy;">width</span>: <span class="hljs-number" style="color: teal;">50px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* w */</span>
<span class="hljs-attribute" style="color: navy;">height</span>: <span class="hljs-number" style="color: teal;">18px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* h */</span>
<span class="hljs-attribute" style="color: navy;">margin-top</span>: -<span class="hljs-number" style="color: teal;">18px</span>; <span class="hljs-comment" style="color: rgb(153, 153, 136);">/* -h */</span>
}
</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"ellipsis"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"ellipsis-container"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"ellipsis-content"</span>&gt;</span>腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"ellipsis-ghost"</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"ellipsis-placeholder"</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;<span class="hljs-name">div</span> <span class="hljs-attr" style="color: teal;">class</span>=<span class="hljs-string" style="color: rgb(221, 17, 68);">"ellipsis-more"</span>&gt;</span>...更多<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">div</span>&gt;</span>   
<span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag" style="color: navy;">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>
<p>
将橙色块偏移到正确位置，梳理了下代码，最终实现了自适应高度的定制多行省略，只需要<a href="https://link.juejin.im/?target=http%3A%2F%2Fcaniuse.com%2F%23feat%3Dcss-line-clamp" rel="" style="text-decoration: none; cursor: pointer; color: rgb(34, 85, 153); background-color: transparent;" target="_blank">-webkit-line-clamp</a>和float的支持，即是安卓、ios放心大胆用，完美！从此妈妈再也不担心我在省略号后面加东西改东西了！恭喜你击败99%的同行了！</p>
<h4>
为什么这么做？</h4>
<h4>
line-clamp3宗罪</h4>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/dfb3d5850525af954908c4ab7fed1d0a.gif">
<p>
和<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">text-align:justify</code>一起用会使省略号和文字相叠</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/c00dcaf05300abc7476728358a1a24c6.gif">
<p>
超出截断后会截掉部分行高</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/9aa98ffbfece47e60ee85dfe0070da44.gif">
<p>
省略号可能出现在单词中间</p>
<h4>
定制省略当然某问题啦</h4>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/f354c85fb1c148775dfbfeca507c0a13.gif">
<p>
<code style="font-family: Menlo, Monaco, Consolas, 'Courier New', monospace; font-size: 1rem; padding: 0.26rem 0.53em; word-break: break-word; color: rgb(78, 89, 128); border-radius: 2px; background-color: rgb(248, 248, 248);">text-align:justify</code>时如期所示，没问题！</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/9899055eceaab944356c7bea7930756f.gif">
<p>
截断时如期所示，也没问题！</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/049931e8d30e7c3a6c72152effe3df5a.gif">
<p>
省略号在有单词时如期显示，依然没问题！</p>
<h4>
更别说点点点花样增改</h4>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/f130ddec416ce6a617773536236670e9.gif"> 
<p><img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/48e397b5108fa2a6b4f9ff269e3742a0.gif"></p>
<p>
简单增改文字加链接只是小case</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/5e5796aa4d323a26a07557088fe34754.gif">
<p>
用折角还是其他图片表示文本溢出可以增添趣味</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/dbf50844a5dc11d461720d52f0d7d104.gif">
<p>
溢出时显示溢出字数增加了实用用途</p>
<img alt="" src="https://vhost100.imageaccelerate.com/VHOST308CV/HK318946/WEB/img/170416/45d356d698268868c9420c02148a48b3.gif">
<h4>
如此，你怕了吗？</h4>
<blockquote>
<span class="wzcc">原文链接：<a href="http://hai.li/2017/03/08/css-multiline-overflow-ellipsis.html" target="_blank">http://hai.li/2017/03/08/css-multiline-overflow-ellipsis.html</a></span></blockquote>
<style>.markdown-body pre code{white-space: pre-wrap;}</style>