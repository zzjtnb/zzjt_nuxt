---
title: Webpack 打包时移除注释
img: 
categories: 前端
tags:
  - Webpack
---

<article><blockquote>
</blockquote>
<h2 id="配置">配置</h2><pre><code class="lang-javascript"><span class="token comment">/**
 * @file webpack.config.js, 只保留了关键部分的配置.
 */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      test<span class="token punctuation">:</span> <span class="token regex">/\.css$/</span><span class="token punctuation">,</span>
      <span class="token comment">// 移除 CSS 内注释</span>
      loader<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token string">'vue-style'</span><span class="token punctuation">,</span> <span class="token string">'css?'</span> <span class="token operator">+</span> <span class="token string">'{"discardComments":{"removeAll":true}}'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      output<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 移除 JavaScript 内注释</span>
        comments<span class="token punctuation">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      minify<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 移除 HTML 内注释</span>
        removeComments<span class="token punctuation">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre><h2 id="参考">参考</h2><p>JavaScript</p>
<ul>
<li><a href="https://github.com/webpack/webpack/issues/324#issuecomment-46957483" target="_blank" rel="noopener noreferrer">https://github.com/webpack/webpack/issues/324#issuecomment-46957483</a></li>
<li><a href="https://github.com/mishoo/UglifyJS2#usage" target="_blank" rel="noopener noreferrer">https://github.com/mishoo/UglifyJS2#usage</a></li>
</ul>
<p>CSS</p>
<ul>
<li><a href="https://www.mgenware.com/blog/?p=2984" target="_blank" rel="noopener noreferrer">https://www.mgenware.com/blog/?p=2984</a></li>
<li><a href="https://github.com/ben-eb/postcss-discard-comments#removeall" target="_blank" rel="noopener noreferrer">https://github.com/ben-eb/postcss-discard-comments#removeall</a></li>
</ul>
<p>HTML</p>
<ul>
<li><a href="https://github.com/ampedandwired/html-webpack-plugin#configuration" target="_blank" rel="noopener noreferrer">https://github.com/ampedandwired/html-webpack-plugin#configuration</a></li>
<li><a href="https://github.com/kangax/html-minifier#options-quick-reference" target="_blank" rel="noopener noreferrer">https://github.com/kangax/html-minifier#options-quick-reference</a></li>
</ul>
</article>