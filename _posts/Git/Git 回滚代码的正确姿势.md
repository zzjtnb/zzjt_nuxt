---
title: Git 回滚代码的正确姿势
img: 
categories: Git
tags:
  - Git
---


<h1>
<strong>git revert</strong> 和 <strong>git reset</strong> 的区别</h1>
<p>先看图：</p>
<div class="image-package">
<img src="https://ww3.sinaimg.cn/large/006tNbRwgy1fcr9tu6vdjj30t30ez0y8.jpg" data-original-src="https://ww3.sinaimg.cn/large/006tNbRwgy1fcr9tu6vdjj30t30ez0y8.jpg" style="cursor: zoom-in;"><div class="image-caption"></div>
</div>
<p><strong>sourceTree</strong> 中 <strong>revert</strong> 译为<strong><code>提交回滚</code></strong>，作用为忽略你指定的版本，然后提交一个新的版本。新的版本中已近删除了你所指定的版本。</p>
<p><strong>reset</strong> 为 <strong>重置到这次提交</strong>，将内容重置到指定的版本。<code>git reset</code> 命令后面是需要加2种参数的：<code>–-hard</code> 和 <code>–-soft</code>。这条命令默认情况下是 <code>-–soft</code>。</p>
<p>执行上述命令时，这该条commit号之 后（时间作为参考点）的所有commit的修改都会退回到git缓冲区中。使用<code>git status</code> 命令可以在缓冲区中看到这些修改。而如果加上<code>-–hard</code>参数，则缓冲区中不会存储这些修改，git会直接丢弃这部分内容。可以使用 <code>git push origin HEAD --force</code> 强制将分区内容推送到远程服务器。</p>
<h4>代码回退</h4>
<p>默认参数 <code>-soft</code>,所有commit的修改都会退回到git缓冲区<br>
参数<code>--hard</code>，所有commit的修改直接丢弃</p>
<pre class="hljs ruby"><code class="ruby">$ git reset --hard HEAD^        回退到上个版本
$ git reset --hard commit_id    退到/进到 指定commit_id
</code></pre>
<p>推送到远程</p>
<pre class="hljs ruby"><code class="ruby">$ git push origin HEAD --force
</code></pre>
<h4>可以吃的后悔药-&gt;版本穿梭</h4>
<p>当你回滚之后，又后悔了，想恢复到新的版本怎么办？</p>
<p>用<code>git reflog</code>打印你记录你的每一次操作记录</p>
<pre class="hljs ruby"><code class="ruby">$ git reflog

输出：
c7edbfe HEAD@{<span class="hljs-number">0</span>}: <span class="hljs-symbol">reset:</span> moving to c7edbfefab1bdbef6cb60d2a7bb97aa80f022687
<span class="hljs-number">470</span>e9c2 HEAD@{<span class="hljs-number">1</span>}: <span class="hljs-symbol">reset:</span> moving to <span class="hljs-number">470</span>e9c2
b45959e HEAD@{<span class="hljs-number">2</span>}: <span class="hljs-symbol">revert:</span> Revert <span class="hljs-string">"add img"</span>
<span class="hljs-number">470</span>e9c2 HEAD@{<span class="hljs-number">3</span>}: <span class="hljs-symbol">reset:</span> moving to <span class="hljs-number">470</span>e9c2
<span class="hljs-number">2</span>c26183 HEAD@{<span class="hljs-number">4</span>}: <span class="hljs-symbol">reset:</span> moving to <span class="hljs-number">2</span>c26183
0f67bb7 HEAD@{<span class="hljs-number">5</span>}: <span class="hljs-symbol">revert:</span> Revert <span class="hljs-string">"add img"</span>
</code></pre>
<p>找到你操作的id如：<code>b45959e</code>，就可以回退到这个版本</p>
<pre class="hljs ruby">
<code class="ruby">$ git reset --hard b45959e</code><br><code class="ruby">$ git push origin HEAD --force</code></pre>