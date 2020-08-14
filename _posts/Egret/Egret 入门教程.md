---
title: Egret 入门教程
img: 
categories: Egret
tags:
  -  Egret
---

一看就会的 Egret 入门教程

<div data-v-c364e4b8="" data-id="5c891969e51d4556df6f6d03" itemprop="articleBody" class="article-content"><h2 class="heading" data-id="heading-0">Egret 是啥</h2>
<p>egret 是一个用来帮你开发 H5 游戏的利器。也许你曾经用原生 js 写过一些小游戏，但是效率极低；也曾用 createjs 写过，但复杂起来也是力不从心，这时我们就需要学会用高级点的工具💪（egret）。它的出现极大释放了你的双手，能帮助你更好更快的开发一款小游戏（谁用谁知道😋）。这里就不与其他游戏引擎作比较了，这东西就好比 react 和 vue，选哪一个没关系，你能熟练使用其中一个就好了。</p>
<p>如何学习呢？其实官网的文档已经写得很详细也很清晰了，还有例子和教程，只是你一时半会看不完，瞟了几眼就会😪😪😪。。。不过没关系，只要你看了本篇教程，从此你就跨入了 egret 世界的大门（吹的不错，其实脚尖都没碰到门槛呢😂）。</p>
<p>所以本篇文章旨在以最快的速度带你了解 egret 并拥有自己的项目，告诉你一些入门必须掌握的东西，其余具体的你可以慢慢去翻文档。。。ok👌，发车了🚗🚗🚗。。</p>
<p>官方文档地址：<a target="_blank" href="">developer.egret.com/cn/docs/pag…</a></p>
<h2 class="heading" data-id="heading-1">环境准备（不要觉得这步有多高大上，其实就是下载而已）</h2>
<p>第一步：万事下载先，我们直接点击下面的链接下载然后安装就行了。<br>
引擎库管理工具 EgretLauncher ：<a target="_blank" href="">www.egret.com/products/en…</a></p>
<p>第二步：打开 EgretLauncher，切换到引擎面板，并点击引擎的最新稳定版进行下载，如下图所示：
</p><figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/16971313a924becc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1280" data-height="572" src="https://user-gold-cdn.xitu.io/2019/3/12/16971313a924becc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure><p></p>
<p>第三步：切换到工具面板，点击安装 Egret Wing 3（编辑器），这个可能需要账号登入，没有的话就去注册一个吧，当然如果你也可以自行安装其他工具，也就点一下的事，但学起来就麻烦了😨。
</p><figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/1697136f7a9510bf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1280" data-height="767" src="https://user-gold-cdn.xitu.io/2019/3/12/1697136f7a9510bf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure><p></p>
<h2 class="heading" data-id="heading-2">快速创建一个项目</h2>
<p>好了，以上就是所需要下载的东西。现在我们将以最快的速度创建一个自己的项目。打开 EgretLauncher，切换到项目面板，点击创建项目，会弹出一个对话框，输入项目名称，选择项目地址，缩放模式选择 fixedWidth（小游戏不支持 showAll 适配模式，推荐使用 fixedWidth），其余保持不变，点击右下角创建即可。这样一个项目就诞生了（就像 vue init 初始化项目一样）。
</p><figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/169713de6c66cb07?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1280" data-height="766" src="https://user-gold-cdn.xitu.io/2019/3/12/169713de6c66cb07?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure>
<figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/1697143c58ca4d60?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1280" data-height="839" src="https://user-gold-cdn.xitu.io/2019/3/12/1697143c58ca4d60?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure><p></p>
<p>然后用 Egret Wing 3（编辑器）打开这个项目，先不管内容写的啥，点击左上角的调试图标按钮（如下图所示，长的像瓢虫🐞的那个）即可运行项目。在弹出的游戏界面中可以看到背景图片被拉长了（因为缩放模式改成了 fixedWidth），不懂没关系这不重要，因为初始的东西一般都是多余的，后面都是被删的命运。</p>
<p></p><figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/1697150e3a92edb9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1280" data-height="715" src="https://user-gold-cdn.xitu.io/2019/3/12/1697150e3a92edb9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure>
<figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/16971537d2110406?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1280" data-height="957" src="https://user-gold-cdn.xitu.io/2019/3/12/16971537d2110406?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure><p></p>
<p>至此，项目就创建完了，教程也结束了（这人欠揍😠😠😠）。<br>
接下来我将对项目里面常用的两个目录进行讲解（其实很多东西都是我们不需要关心的，和 vue 又挺像）。个人感觉写游戏，场景和逻辑最为重要。场景里最重要的就是资源，体现在 resource 文件夹，逻辑则体现在 src 文件夹。下面我们先来小讲一下 resource 目录。</p>
<h2 class="heading" data-id="heading-3">resource 目录</h2>
<p></p><figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/169716cec7272774?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="810" data-height="1256" src="https://user-gold-cdn.xitu.io/2019/3/12/169716cec7272774?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure>
如上图所示，这个文件夹主要用来存放项目中所有用到的资源（就是音视频和图片等），我们只需要把用到的素材拖进来或拷贝到文件夹里即可，其他的无需关心，egret 都帮我们处理好了。如果资源太多，你可以在 resource 目录下多建几个文件夹分个类，这样会比较明了。需要注意的是资源名称应该是唯一的，因为最终我们都是以同样的方式读取资源（也就是同一个 api，<code>RES.getRes('resourceName')</code>，当中的参数就是资源名称）。<p></p>
<p>关于上图中的蓝色部分，就是一些常用组件（比如按钮），好比在 vue 中引入了 element  组件。但有个很大的不同之处就是这是游戏，一般游戏会有自己独特的设计，这些自带的组件不是很必要，往夸张点说要是你的游戏都用它自带的组件来写，那每款游戏的风格就都一样了，又如何去吸引玩家的眼球呢。所以对于这些自带的组件你瞟一眼就行，然后可以删掉也可以不管他，反正它不是必要的。</p>
<p>再然后就是 <code>default.res.json</code> 这个文件，现在你只需知道它是对我们导入的所有资源的一些描述即可，先不用管太多。
</p><figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/16972090b92dd051?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1280" data-height="746" src="https://user-gold-cdn.xitu.io/2019/3/12/16972090b92dd051?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure><p></p>
<h2 class="heading" data-id="heading-4">src 目录</h2>
<p>这个目录就更简单了，我们只需要关注 Main.ts 这个入口文件即可，其余几个文件先不管，至少我写了两三个游戏 demo 后还没动过这几个文件🤷‍♀️🤷‍♂️。</p>
<p></p><figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/1697219245876eb5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1280" data-height="799" src="https://user-gold-cdn.xitu.io/2019/3/12/1697219245876eb5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure>
如上图所示，这个文件里我们只需要看两个主要的操作步骤即可。一个就是资源加载（其实也可以不用管，因为写代码的时候可以不用动它，但要了解一下）。另一个就是真正要看的地方了，也是我们实际写代码的地方。在 <code>createGameScene</code> 这个方法中主要就是在画面中添加一些元素（诸如背景、矩形、图标和文本等）。具体如下图所示，用法个人感觉和 createjs（一个 canvas 库，好比 jQuery 之于 js）挺像的，都是先 new 一个东西，然后设置各种属性，最后添加到容器或者舞台中。大概是这么一个思想。
<figure><img class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/3/12/169722266cedfc5b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="1015" data-height="1280" src="https://user-gold-cdn.xitu.io/2019/3/12/169722266cedfc5b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"><figcaption></figcaption></figure>
当然了，如果游戏逻辑复杂的话，我们可以在 src 目录下新建其他 ts 文件来写，逻辑较少的话直接写在该函数里也是 ok 的。有了 egret 你可以不用去操心资源是如何加载和处理的（这得鼓个掌👏👏👏），我们只要专心写游戏逻辑就行（在 <code>createGameScene</code> 里面写），极大的减轻了开发者的负担，是个不错的体验。<p></p>
<h2 class="heading" data-id="heading-5">最常用的几个 api（必须掌握，其它慢慢掌握）</h2>
<p><strong>关于文本</strong></p>
<pre><code class="hljs js copyable" lang="js"><span class="hljs-keyword">let</span> label:egret.TextField = <span class="hljs-keyword">new</span> egret.TextField(); 
label.text = <span class="hljs-string">"hello world!"</span>; 
</code></pre><p><strong>关于图片</strong></p>
<pre><code class="hljs js copyable" lang="js"><span class="hljs-keyword">let</span> img:egret.Bitmap = <span class="hljs-keyword">new</span> egret.Bitmap();
img.texture = RES.getRes(<span class="hljs-string">"imgName"</span>);
</code></pre><p><strong>关于形状</strong></p>
<pre><code class="hljs js copyable" lang="js"><span class="hljs-comment">// 画个红色矩形框</span>
<span class="hljs-keyword">let</span> shp:egret.Shape = <span class="hljs-keyword">new</span> egret.Shape();
shp.graphics.beginFill( <span class="hljs-number">0xff0000</span>, <span class="hljs-number">1</span>);
shp.graphics.drawRect( <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">100</span>, <span class="hljs-number">200</span> );
shp.graphics.endFill();
</code></pre><p><strong>关于声音</strong></p>
<pre><code class="hljs js copyable" lang="js"><span class="hljs-keyword">let</span> sound:egret.Sound = RES.getRes(<span class="hljs-string">"mp3Name"</span>);
sound.play();
sound.stop();
</code></pre><p><strong>关于事件</strong></p>
<pre><code class="hljs js copyable" lang="js"><span class="hljs-comment">// 触摸事件（相当于点击）</span>
<span class="hljs-keyword">this</span>.addEventListener(egret.TouchEvent.TOUCH_TAP, <span class="hljs-keyword">this</span>.onTouchTap, <span class="hljs-keyword">this</span>);
<span class="hljs-keyword">this</span>.removeEventListener(egret.TouchEvent.TOUCH_TAP, <span class="hljs-keyword">this</span>.onTouchTap, <span class="hljs-keyword">this</span>);
</code></pre><p><strong>关于计时器</strong></p>
<pre><code class="hljs js copyable" lang="js"><span class="hljs-comment">// 参数为时间间隔（ms）和执行次数</span>
<span class="hljs-keyword">let</span> timer:egret.Timer = <span class="hljs-keyword">new</span> egret.Timer(<span class="hljs-number">500</span>, <span class="hljs-number">5</span>); 
<span class="hljs-comment">// 边计时边触发</span>
timer.addEventListener(egret.TimerEvent.TIMER, <span class="hljs-keyword">this</span>.timerFunc, <span class="hljs-keyword">this</span>);
<span class="hljs-comment">// 计时结束触发</span>
timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, <span class="hljs-keyword">this</span>.timerComFunc, <span class="hljs-keyword">this</span>);
<span class="hljs-comment">// 开始计时</span>
timer.start();
<span class="hljs-comment">// 暂停计时</span>
timer.stop();
<span class="hljs-comment">// 重新计时</span>
timer.reset();
</code></pre><p><strong>关于数据存储</strong></p>
<pre><code class="hljs js copyable" lang="js"><span class="hljs-comment">// 存储数据</span>
<span class="hljs-keyword">let</span> key:string = <span class="hljs-string">"score"</span>;
<span class="hljs-keyword">let</span> value:string = <span class="hljs-string">"100"</span>;
egret.localStorage.setItem(key, value);
<span class="hljs-comment">// 读取数据</span>
<span class="hljs-keyword">let</span> score:string = egret.localStorage.getItem(key);
<span class="hljs-comment">// 移除数据</span>
egret.localStorage.removeItem(key);
<span class="hljs-comment">// 清除所有数据</span>
egret.localStorage.clear();
</code></pre><h2 class="heading" data-id="heading-6">小贴士</h2>
<p>1、写代码需要用 ts（规范的 js） 进行开发。<br>
2、egret 游戏默认是 30 帧的。<br>
3、大部分 api 是以 egret 开头的，读取资源的是用 RES。<br>
4、有时候你改了代码不生效或者突然报错，别慌，试试重启大法。<br>
5、长度单位是像素。<br>
6、每个 egret 应有且只有一个舞台（也就是 stage 对象）。舞台是 egret 显示架构中最根本的显示容器。舞台的坐标原点位于左上角。</p>
<h2 class="heading" data-id="heading-7">结语</h2>
<p>以上就是你学习该引擎必须要掌握的几个知识点，如果你有时间，还是建议你把文档粗略过一遍，至少你知道有什么东西存在，后续用到的时候再去找文档看着写，也是可以的。<br>
当然了，光说不练假把式，我唠叨了半天你应该还是不会写，这很正常，我也不会，这篇文章的目的只是让你对 egret 有个初步的印象，后续我会再写几篇小游戏的教程（务必要练习几个小游戏，这是重点），这样一个流程下来，你就能写出属于自己的小游戏了（是不是想想就嘴角上扬了呢😏）。</p>
</div>