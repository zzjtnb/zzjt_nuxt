---
title:  绘制表格-table
img: 
categories: 前端
tags:
  - html
---
<link rel="stylesheet" href="http://levy.work/css/style.css">
<article id="post-table-with-fixed-column" class="article article-type-post" itemscope="" itemprop="blogPost">
  <div class="article-inner">
    <header class="article-header">
      <a itemprop="name" class="article-title" href="/2016-12-30-table-with-fixed-column/">绘制表格</a>
    </header>
    <div class="article-entry" itemprop="articleBody">
      <p>之前做页面都没有画表格的经历, 最近工作中有接触到, 刚好补了一下这方面的知识</p>
      <a id="more"></a>
      <h2 id="结构"><a href="#结构" class="headerlink" title="结构"></a>结构</h2>
      <p>一个较完整的表格结构如下</p>
      <figure class="highlight html">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="tag">&lt;<span class="name">table</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">caption</span>&gt;</span>title<span class="tag">&lt;/<span class="name">caption</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">thead</span>&gt;</span></div><div class="line">    <span class="tag">&lt;<span class="name">tr</span>&gt;</span></div><div class="line">      <span class="tag">&lt;<span class="name">th</span>&gt;</span>head<span class="tag">&lt;/<span class="name">th</span>&gt;</span></div><div class="line">    <span class="tag">&lt;/<span class="name">tr</span>&gt;</span></div><div class="line">  <span class="tag">&lt;/<span class="name">thead</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">tbody</span>&gt;</span></div><div class="line">    <span class="tag">&lt;<span class="name">tr</span>&gt;</span></div><div class="line">      <span class="tag">&lt;<span class="name">td</span>&gt;</span>data<span class="tag">&lt;/<span class="name">td</span>&gt;</span></div><div class="line">    <span class="tag">&lt;/<span class="name">tr</span>&gt;</span></div><div class="line">  <span class="tag">&lt;/<span class="name">tbody</span>&gt;</span></div><div class="line"><span class="tag">&lt;/<span class="name">table</span>&gt;</span></div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p><code>caption</code>是表格的标题</p>
      <p><code>thead</code>里放的是表格的头, 一个头对应一个<code>th</code></p>
      <p><code>tbody</code>里放的是表格的数据, 一条数据对应一个<code>td</code></p>
      <p><code>th</code>与<code>td</code>都应该在<code>tr</code>内, 一个<code>tr</code>就是一行</p>
      <h2 id="样式"><a href="#样式" class="headerlink" title="样式"></a>样式</h2>
      <ul>
        <li>边框</li>
      </ul>
      <p>需要同时设置th/td的边框, 同时还要设置table的边框折叠</p>
      <figure class="highlight css">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="selector-tag">table</span> {</div><div class="line">  <span class="attribute">border-collapse</span>: collapse; <span class="comment">/*默认为separate 分开*/</span></div><div class="line">}</div><div class="line"></div><div class="line"><span class="selector-tag">th</span>, <span class="selector-tag">td</span> {</div><div class="line">  <span class="attribute">border</span>: <span class="number">1px</span> solid blue;</div><div class="line">}</div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p>table的html属性也有<code>border</code></p>
      <figure class="highlight html">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="tag">&lt;<span class="name">table</span> <span class="attr">border</span>=<span class="string">"1"</span>&gt;</span><span class="tag">&lt;/<span class="name">table</span>&gt;</span></div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p><code>border</code>属性同时设置了td/th的边框宽度, 但缺点是不能设置边框颜色及边框线条样式, 所以还是使用css来设置边框更好</p>
      <p><code>border-spacing</code> 属性可以设置单元格的边框之间的间距, 但需要<code>border-collapse</code>属性为<code>separate</code>时才生效.
        一般较少使用</p>
      <ul>
        <li>文字</li>
      </ul>
      <p>文字水平居中使用 <code>text-align: center;</code></p>
      <p>文字垂直居中使用 <code>vertical-align: middle;</code> Chrome下默认是垂直居中的</p>
      <p>如果限制了单元格的宽度, 此时需要文字换行, 可以使用 <code>word-break: break-all;</code></p>
      <p>如果感觉文字太靠近边框, 可以对td/th设置内衬 <code>padding: 2px 5px;</code></p>
      <p>如果改变标题的位置, 需要对table设置 <code>caption-side: top;</code> 或 <code>caption-side: bottom;</code>
        Chrome下的默认值是<code>top</code></p>
      <ul>
        <li>跨行与跨列<br>跨行需要用到属性<code>rowspan</code>, 跨列需要用到属性<code>colspan</code>, 下面是简单的示例</li>
      </ul>
      <p></p>
      <div class="cp_embed_wrapper"><iframe name="cp_embed_1"
          src="https://codepen.io/levy9527/embed/vgEoKR?height=265&amp;theme-id=0&amp;slug-hash=vgEoKR&amp;default-tab=html%2Cresult&amp;user=levy9527&amp;embed-version=2&amp;pen-title=table-with-cross-row-col&amp;name=cp_embed_1"
          scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true"
          allowpaymentrequest="true" title="table-with-cross-row-col" class="cp_embed_iframe "
          style="width: 100%; overflow:hidden; display:block;" id="cp_embed_vgEoKR"></iframe></div>
      <p></p>
      <script src="//hm.baidu.com/hm.js?7595a86aeed3cfd93d5621d3ec858dce"></script>
      <script async="" src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      <ul>
        <li>布局算法</li>
      </ul>
      <figure class="highlight css">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="selector-tag">table</span> {</div><div class="line">  <span class="attribute">table-layout</span>: fixed; <span class="comment">/*默认值为automatic*/</span></div><div class="line">}</div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p>二者有以下区别:</p>
      <ol>
        <li>automatic时, 每一列的宽度是自动计算的, 由该列中最宽的内容决定; fixed时, 每一列的宽度可以用width单独设置</li>
        <li>前者需要需要接受所有内容后, 才能确定表格布局, 耗时较多; 后者在接受到第一行表格内容时, 即可确定表格布局, 耗时较少</li>
      </ol>
      <h2 id="实践"><a href="#实践" class="headerlink" title="实践"></a>实践</h2>
      <ul>
        <li>多列表格</li>
      </ul>
      <p>表格有很多列时, 则宽度会很大, 如果table的父元素是body, 则水平滚动表格时body也会一起动, 尤其是手机端, 体验非常不好</p>
      <p>解决方案是, 给table添加套一个父元素, 则可以只滚动表格, 不滚动页面的其他内容</p>
      <figure class="highlight html">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">class</span>=<span class="string">"table-container"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">table</span>&gt;</span></div><div class="line">  <span class="tag">&lt;/<span class="name">table</span>&gt;</span></div><div class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <figure class="highlight css">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="selector-class">.table-container</span> {</div><div class="line">  <span class="attribute">width</span>: <span class="number">100%</span>;</div><div class="line">  <span class="attribute">overflow</span>: scroll;</div><div class="line">}</div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <ul>
        <li>固定列</li>
      </ul>
      <p>表格的前几列在水平滚动时固定, 我的思路是这样的:</p>
      <ul>
        <li>把原本一个表格拆分成两个, 一个是拥有固定列的(以下称为固定表格fixedTable), 一个是正常的表格, 可以横向滚动(下面称为滚动表格scrollTable)</li>
        <li>固定列其实可以看成表格固定于视窗, 则前一个表格的<code>position</code>应设置为<code>fixed</code></li>
        <li>因为固定表格不在文档流中, 则正常表格应设置<code>position</code>为<code>relative</code>, 使它可以产生偏移, 使得两个表格拼接看起来像是一个表格</li>
      </ul>
      <p>具体看代码</p>
      <p></p>
      <div class="cp_embed_wrapper"><iframe name="cp_embed_2"
          src="https://codepen.io/levy9527/embed/YpmWBg?height=265&amp;theme-id=0&amp;slug-hash=YpmWBg&amp;default-tab=html%2Cresult&amp;user=levy9527&amp;embed-version=2&amp;pen-title=YpmWBg&amp;name=cp_embed_2"
          scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true"
          allowpaymentrequest="true" title="YpmWBg" class="cp_embed_iframe "
          style="width: 100%; overflow:hidden; display:block;" id="cp_embed_YpmWBg"></iframe></div>
      <p></p>
      <script async="" src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
      <p>如果固定列是动态的, 则需要元素生成后取得固定表格的宽度, 再设置滚动表格的偏移, 示例代码如下:</p>
      <figure class="highlight js">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="comment">// 滚动table设置水平偏移</span></div><div class="line"><span class="keyword">let</span> width = fixedTable.clientWidth</div><div class="line"><span class="keyword">let</span> left = width - <span class="number">1</span> <span class="comment">// 以免border重叠</span></div><div class="line">scrollTable.style.left = left+<span class="string">'px'</span> <span class="comment">// 一定要记得加上'px'</span></div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p>如果单元格的内容也是动态的, 且单元格限制了宽度, 则文字过多时, 会产生换行, 则滚动表格的表头的高度也会变化, 需要调整固定表格的表头高度</p>
      <figure class="highlight js">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="comment">// 调整固定table的thead高度</span></div><div class="line"><span class="keyword">let</span> height = scrollTable.firstChild.clientHeight <span class="comment">// 取得thead的高度</span></div><div class="line"><span class="keyword">let</span> ths = fixedTable.getElementsByTagName(<span class="string">'th'</span>)</div><div class="line"></div><div class="line"><span class="keyword">for</span>(<span class="keyword">let</span> i = <span class="number">0</span>, len = ths.length; i &lt; len; i++) {</div><div class="line">  ths[i].style.height = height + <span class="string">'px'</span></div><div class="line">}</div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      这种实现方案的好处是, 主要依赖html与css, 几乎不需要js, 实现方式较简单.但缺点在于, 如果固定的列太多, 超出屏幕宽度时(在移动端很容易出现这种情况), 则整个屏幕会被固定表格遮住, 会只见固定列, 不见滚动列了
      <p>实践表明, 这种方案并不完善, 因为以下两种情况:</p>
      <ul>
        <li>表格行过多<br>表格有很多行时, 表格的高度超过视窗, 则需要垂直滚动才能看到下面的内容. 但因固定表格<code>position</code>为<code>fixed</code>, 无论怎么滚动,
          固定表格下面的行都是看不见的, 因此还需要监听body的滚动事件, 动态修改固定表格的垂直偏移</li>
      </ul>
      <figure class="highlight js">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="keyword">let</span> top = scrollTable.offsetTop</div><div class="line"></div><div class="line"><span class="built_in">document</span>.body.onscroll = <span class="function"><span class="keyword">function</span> (<span class="params">e</span>) </span>{</div><div class="line">  <span class="keyword">let</span> y = <span class="built_in">window</span>.scrollY</div><div class="line">  fixedTable.style.top = top - y + <span class="string">'px'</span></div><div class="line">}</div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <ul>
        <li>移动端横屏显示<br>移动端还有横屏显示的需求, 则监听到手机横屏时, 需要重新调整固定表格的偏移. 至于事件, 最简单的是onresize</li>
      </ul>
      <figure class="highlight js">
        <table>
          <tbody>
            <tr>
              <td class="code">
                <pre><div class="line"><span class="keyword">let</span> top = scrollTable.offsetTop</div><div class="line"><span class="keyword">let</span> y = <span class="built_in">window</span>.scrollY</div><div class="line">fixedTable.style.top = top - y + <span class="string">'px'</span></div></pre>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
      <p>因为每一次滚动都设置一下元素的偏移, 则每一次都会触发reflow, 极其影响性能, 滚动时可明显看出固定表格在上下”漂移”</p>
      <p>另外, 在写了css的基础上, 还要写这么多的js代码来应对几种情况, 因此我觉得此方案并非最佳方案, 尤其不推荐在移动端使用</p>
    </div>
  </div>
</article>