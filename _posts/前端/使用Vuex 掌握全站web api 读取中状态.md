---
title:  使用Vuex 掌握全站web api 读取中状态
img: 
categories: 前端
tags:
  -  Vue
  - Vuex
---
<style>
.markdown-body .highlight pre, .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #323233;
    border-radius: 3px;
}
</style>
<div class="article__content">
                    <div class="article__desc">
                        <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文将介绍 Vuex 的使用方式( 模组化Store )，并且利用 Vuex 掌握全站读取中的web api 数量状态，自动依据该状态来自动呈现loading 互动效果。</font></font></p>
                    </div>
                    <h2>前言</h2>

<hr>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站中多少都会有全域共用的状态需要保存，若在状态改变时无需有立即画面响应变化的情况下，多数会使用cookie / session / local storage 来存放，但有些情境需要在状态改变时主动响应来产生画面互动效果，此时可以透过Vuex 来管理这些响应式的状态资料。</font><font style="vertical-align: inherit;">本文透过实务范例来说明如何使用Vuex 来管理「读取中Web API 数量」状态，并透过这个状态来产生一些画面效果应用。</font><font style="vertical-align: inherit;">以下介绍。</font></font></p>

<p><code>vuex: 3.0.1</code></p>

<p>&nbsp;</p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义Module 档案</font></font></h2>

<hr>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用vuex之前必须先定义出各module档案，可以依照存放的状态类型做分类，让我们将「状态」及「状态操作逻辑」都封装于此。</font><font style="vertical-align: inherit;">以下以</font></font><code>app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模组说明module中须放置的项目有哪些。</font></font></p>

<p><img src="https://az787680.vo.msecnd.net/user/chris/63f9aac6-744f-4c97-898c-044731cb1e85/1535964998_32912.png" style="width: 250px; height: 195px;"></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3><span style="color:#800000;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">州</font></font></span></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义全域「状态名称」及「初始值」，于此定义 loadingCounter 作为全站读取中API 的计数器。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">const</span> state = {
  <span class="hljs-attr">loadingCounter</span>: <span class="hljs-number">0</span>
}</code></pre>

<div class="note note--important"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">于组件中取得状态方式的两种方式如下：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
1.在自定义的computed属性中回传this.$store.state.app.loadingCounter </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
2.使用...mapState('app', ['loadingCounter '] )直接加到computed属性中</font></font></div>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3><span style="color:#800000;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">突变</font></font></span></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许直接更改Vuex 的store 中状态的唯一方法，透过提交(commit) 特定mutation 来修改状态资料，非常类似事件的概念，需要定义事件类型(type) 和回调函数(handler)，而回调函数就是执行状态更改的地方。</font></font></p>

<p>&nbsp;</p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件类型</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以考虑于独立的</font></font><code>/store/mutationTypes.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp;档案中定义mutation type常数，这样可以使linter之类的工具发挥作用，并且让共同开发的伙伴对整个app包含的mutation一目了然；我们于此定义两个mutation type作为对计数器进行增减数量的事件型态。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">/* store/mutationTypes.js */</span><font></font>
<font></font>
<span class="hljs-comment">// 使用常量替代 Mutation 事件類型</span>
<span class="hljs-comment">// 命名規則: [module]_[mutation name]</span><font></font>
<font></font>
<span class="hljs-comment">/* app */</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> APP_INCREASE_LOADING_COUNTER = <span class="hljs-string">'APP_INCREASE_LOADING_COUNTER'</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> APP_DECREASE_LOADING_COUNTER = <span class="hljs-string">'APP_DECREASE_LOADING_COUNTER'</span>
</code></pre>

<p>&nbsp;</p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调函数</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES2015风格的计算属性命名功能来使用上述mutation type常数作为函数名，可在函式中取得</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">及commit时传入的&nbsp; </font></font><code>payload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料，以下分别实作对state.loadingCounter计数器状态之增减行为。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> types <span class="hljs-keyword">from</span> <span class="hljs-string">'../mutationTypes'</span><font></font>
<font></font>
<span class="hljs-keyword">const</span> mutations = {<font></font>
  [types.APP_INCREASE_LOADING_COUNTER] (state) {<font></font>
    state.loadingCounter += <span class="hljs-number">1</span><font></font>
  },<font></font>
  [types.APP_DECREASE_LOADING_COUNTER] (state) {<font></font>
    state.loadingCounter -= <span class="hljs-number">1</span><font></font>
  }<font></font>
}</code></pre>

<div class="note note--danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mutation 必须是同步方法，如果需要非同步操作请至Action 中进行。</font></font></div>

<div class="note note--danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需遵守Vue 的响应规则，因此在物件上添加新属性时，必须使用Vue.set(obj, 'newProp', 123) 或state.obj = { ...state.obj, newProp: 123 } 方式进行，否则画面上绑定的状态是无法同步响应变化。</font></font></div>

<p>&nbsp;</p>

<p><strong><span style="background-color:#FFF0F5;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">于组件中commit 提交 Mutation 的两种方式如下：</font></font></span></strong></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> types <span class="hljs-keyword">from</span> <span class="hljs-string">'../../store/mutationTypes'</span><font></font>
<font></font>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'component'</span><font></font>
  methods: {<font></font>
    <span class="hljs-attr">increaseCounter</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
      <span class="hljs-comment">// 直接 commit 提交 mutation</span>
      <span class="hljs-comment">// 如果 mutation 中有 payload 可以直接傳入 commit 第二個參數中</span>
      <span class="hljs-keyword">this</span>.$store.commit(<span class="hljs-string">`app/<span class="hljs-subst">${types.APP_INCREASE_LOADING_COUNTER}</span>`</span>)<font></font>
    }<font></font>
  }<font></font>
}</code></pre>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> { mapMutations } <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span>
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> types <span class="hljs-keyword">from</span> <span class="hljs-string">'../../store/mutationTypes'</span><font></font>
<font></font>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'component'</span><font></font>
  methods: {<font></font>
    <span class="hljs-comment">// 使用 mapMutations 將 mutation 加入 methods 中 </span>
    <span class="hljs-comment">// 可直接呼叫 increaseCounter() 方法提交 mutation</span>
    <span class="hljs-comment">// 如果 mutation 中有 payload 可以直接傳入 increaseCounter() 方法中</span>
    ...mapMutations(<span class="hljs-string">'app'</span>, {<span class="hljs-attr">increaseCounter</span>: types.APP_ADD_LOADING_COUNTER})<font></font>
  }<font></font>
}</code></pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3><span style="color:#800000;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作</font></font></span></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可依据动作行为来命名较贴切action 名称，在action 中都是透过提交mutation 来变更状态，而不是直接变更状态，并且可以包含非同步的操作(如分发其他非同步action )。</font><font style="vertical-align: inherit;">在action 中可接受的传入参数依序如下：</font></font></p>

<ul>
	<li>
	<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">context : 与store 实例具有相同方法和属性 { dispatch, commit, state }</font></font></p>
	</li>
	<li>
	<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">payload : 分发 action 时传入的任意资料可由此获得</font></font></p>
	</li>
</ul>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此定义</font></font><code>increaseLoadingCounter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp; 及</font></font><code>decreaseLoadingCounter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp; 两个action来提交mutation去变更计数器状态，在比较复杂的应用会有更多状态的改变及非同步行为逻辑混杂其中。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">let</span> enableLoadingMaskTime = <span class="hljs-built_in">Date</span>.now()
<span class="hljs-keyword">const</span> actions = {<font></font>
  increaseLoadingCounter ({ dispatch, commit, state }) {<font></font>
    commit(types.APP_INCREASE_LOADING_COUNTER)<font></font>
  },<font></font>
  decreaseLoadingCounter ({ dispatch, commit, state }) {<font></font>
    commit(types.APP_DECREASE_LOADING_COUNTER)<font></font>
  }<font></font>
}</code></pre>

<p>&nbsp;</p>

<p><strong><span style="background-color:#FFF0F5;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">于组件中dispatch 分发 Action 的两种方式如下：</font></font></span></strong></p>

<pre><code class="language-javascript hljs">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'component'</span><font></font>
  methods: {<font></font>
    <span class="hljs-attr">increaseCounter</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
      <span class="hljs-comment">// 直接 dispatch 分發 action</span>
      <span class="hljs-comment">// 如果 action 中有 payload 可以直接傳入 dispatch 第二個參數中</span>
      <span class="hljs-keyword">this</span>.$store.dispatch(<span class="hljs-string">`app/increaseLoadingCounter `</span>)<font></font>
    }<font></font>
  }<font></font>
}</code></pre>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> { mapActions } <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span><font></font>
<font></font>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'component'</span><font></font>
  methods: {<font></font>
    <span class="hljs-comment">// 使用 mapActions 將 action 直接加入 methods 中 </span>
    <span class="hljs-comment">// 可直接呼叫 increaseCounter() 方法 dispatch 分發 action</span>
    <span class="hljs-comment">// 如果 action 中有 payload 可以直接傳入 increaseCounter() 方法中</span>
    ...mapActions(<span class="hljs-string">'app'</span>, [<span class="hljs-string">'increaseCounter'</span>])<font></font>
<font></font>
    <span class="hljs-comment">// 或是有衝突時可以指定特定方法名稱 addOne 來 dispatch 分發 action</span>
    ...mapActions(<span class="hljs-string">'app'</span>, { <span class="hljs-attr">addOne</span>: <span class="hljs-string">'increaseCounter'</span> })<font></font>
<font></font>
  }<font></font>
}</code></pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3><span style="color:#800000;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装成module 物件格式</font></font></span></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整module 如下，会以vuex 规定的物件格式export 出去。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> types <span class="hljs-keyword">from</span> <span class="hljs-string">'../mutationTypes'</span><font></font>
<font></font>
<span class="hljs-keyword">const</span> state = {
  <span class="hljs-attr">loadingCounter</span>: <span class="hljs-number">0</span><font></font>
}<font></font>
<font></font>
<span class="hljs-keyword">const</span> actions = {<font></font>
  increaseLoadingCounter ({ dispatch, commit, state }) {<font></font>
    commit(types.APP_ADD_LOADING_COUNTER)<font></font>
  },<font></font>
  decreaseLoadingCounter ({ dispatch, commit, state }) {<font></font>
    commit(types.APP_REMOVE_LOADING_COUNTER)<font></font>
  }<font></font>
}<font></font>
<span class="hljs-keyword">const</span> mutations = {<font></font>
  [types.APP_INCREASE_LOADING_COUNTER] (state) {<font></font>
    state.loadingCounter += <span class="hljs-number">1</span><font></font>
  },<font></font>
  [types.APP_DECREASE_LOADING_COUNTER] (state) {<font></font>
    state.loadingCounter -= <span class="hljs-number">1</span><font></font>
  }<font></font>
}<font></font>
<font></font>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">namespaced</span>: <span class="hljs-literal">true</span>,<font></font>
  state,<font></font>
  actions,<font></font>
  mutations<font></font>
}<font></font>
</code></pre>

<div class="note note--info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过添加&nbsp; </font></font><code>namespaced: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp;的方式使其成为带命名空间的模块；当模块被注册后，它的所有getter、action及mutation都会自动根据模块注册的路径调整命名。</font></font></div>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后透过&nbsp; </font></font><code>modules/index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动态export资料夹下所有module&nbsp;</font></font></p>

<p><img src="https://az787680.vo.msecnd.net/user/chris/63f9aac6-744f-4c97-898c-044731cb1e85/1535965059_31412.png" style="width: 250px; height: 314px;"></p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">/* Dynamic Exporter:
 * Dynamically export all json files (except self) in current folder
 */</span>
<span class="hljs-keyword">const</span> req = <span class="hljs-built_in">require</span>.context(<span class="hljs-string">'.'</span>, <span class="hljs-literal">false</span>, /\.js$/)<font></font>
<font></font>
req.keys().forEach(<span class="hljs-function">(<span class="hljs-params">key</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> name = key.replace(<span class="hljs-regexp">/^\.\/(.*)\.js/</span>, <span class="hljs-string">'$1'</span>)<font></font>
<font></font>
  <span class="hljs-keyword">if</span> (name !== <span class="hljs-string">'index'</span>) {
    <span class="hljs-built_in">module</span>.exports[name] = req(key).default<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建立store 实体及加入Vue 使用</font></font></h2>

<hr>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将上述各module 放入store 中来产生全站使用的store 实体。</font></font></p>

<p><img src="https://az787680.vo.msecnd.net/user/chris/63f9aac6-744f-4c97-898c-044731cb1e85/1535965092_28359.png" style="width: 250px; height: 195px;"></p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">/* store/index.js */</span><font></font>
<font></font>
<span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">import</span> Vuex <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span>
<span class="hljs-keyword">import</span> modules <span class="hljs-keyword">from</span> <span class="hljs-string">'./modules'</span><font></font>
<font></font>
Vue.use(Vuex)<font></font>
<font></font>
<span class="hljs-keyword">const</span> isDebug = process.env.NODE_ENV !== <span class="hljs-string">'production'</span><font></font>
<font></font>
<span class="hljs-keyword">var</span> store = <span class="hljs-keyword">new</span> Vuex.Store({<font></font>
  modules,<font></font>
  <span class="hljs-attr">strict</span>: isDebug<font></font>
})<font></font>
<font></font>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> store
</code></pre>

<div class="note note--danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式(strict mode) 表示状态变更若不是由mutation 函数执行时，将会抛出错误，以保证所有状态变更都能够被dev tool 追踪回朔；切记仅能在开发测试环境使用，避免效能的损耗。</font></font></div>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着加入store 实体到Vue 中使用就大功告成了。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">/* main.js */</span><font></font>
<font></font>
<span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
<span class="hljs-keyword">import</span> router <span class="hljs-keyword">from</span> <span class="hljs-string">'./router'</span>
<span class="hljs-keyword">import</span> i18n <span class="hljs-keyword">from</span> <span class="hljs-string">'./setup/setupLocale'</span>
<span class="hljs-keyword">import</span> store <span class="hljs-keyword">from</span> <span class="hljs-string">'./store'</span>
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">'./App'</span><font></font>
<font></font>
<span class="hljs-comment">/* eslint-disable no-new */</span>
<span class="hljs-keyword">new</span> Vue({
  <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>,<font></font>
  router,<font></font>
  i18n,<font></font>
  store,<font></font>
  <span class="hljs-attr">components</span>: { App },
  <span class="hljs-attr">template</span>: <span class="hljs-string">'&lt;App/&gt;'</span>
})</code></pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取得读取中 API 数量</font></font></h2>

<hr>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在统计读取中API 数量时，为留一条后路作为后续应用中的例外情境控制，因此定义不进入统计范围的API 清单，相关逻辑会封在 apiService 内集中处理。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">/* services/apiService.js */</span><font></font>
<font></font>
<span class="hljs-comment">// 不需進行 request counting 的 api</span>
<span class="hljs-keyword">const</span> notCountRequest = [
  <span class="hljs-string">'/api/boo'</span>,
  <span class="hljs-string">'/api/qoo'</span><font></font>
]<font></font>
<font></font>
<span class="hljs-comment">// 目前 api 是否需要進行 request counting 處理</span>
<span class="hljs-keyword">const</span> isCountingRequest = <span class="hljs-function"><span class="hljs-params">url</span> =&gt;</span> {
  <span class="hljs-keyword">return</span> notCountRequest.findIndex(<span class="hljs-function"><span class="hljs-params">r</span> =&gt;</span> url.includes(r)) === <span class="hljs-number">-1</span><font></font>
}<font></font>
<font></font>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {<font></font>
  isCountingRequest<font></font>
}<font></font>
</code></pre>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用axios作为http client来呼叫web api的情况下，可以透过request / response的interceptor以AOP方式进行实作，当流进request时分发&nbsp; </font></font><code>increaseLoadingCounter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">action在计数器上+1 ，流出response时就分发&nbsp; </font></font><code>decreaseLoadingCounter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">action在计数器上-1，这样透过计数器就可以得知目前正在读取中的api笔数；另外先前有订定不加入计数的黑名单，因此会使用isCountingRequest判断url是否需作统计。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> axios <span class="hljs-keyword">from</span> <span class="hljs-string">'axios'</span>
<span class="hljs-keyword">import</span> store <span class="hljs-keyword">from</span> <span class="hljs-string">'../store'</span>
<span class="hljs-keyword">import</span> apiService <span class="hljs-keyword">from</span> <span class="hljs-string">'services/apiService'</span><font></font>
<font></font>
<font></font>
<span class="hljs-comment">// 全局設定 Request 攔截器 (interceptor)</span>
axios.interceptors.request.use(<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">config</span>) </span>{<font></font>
<font></font>
  <span class="hljs-keyword">if</span> (apiService.isCountingRequest(config.url)) {
    <span class="hljs-comment">// 分發 increaseLoadingCounter action 在計數器上 +1</span>
    store.dispatch(<span class="hljs-string">'app/increaseLoadingCounter'</span>)<font></font>
  }<font></font>
<font></font>
  <span class="hljs-keyword">return</span> config<font></font>
}, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">error</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.reject(error)<font></font>
})<font></font>
<font></font>
<font></font>
<span class="hljs-comment">// 全局設定 Response 攔截器 (interceptor)</span>
axios.interceptors.response.use(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">response</span>) </span>{<font></font>
<font></font>
  <span class="hljs-keyword">if</span> (apiService.isCountingRequest(response.config.url)) {
    <span class="hljs-comment">// 分發 decreaseLoadingCounter action 在計數器上 -1</span>
    store.dispatch(<span class="hljs-string">'app/decreaseLoadingCounter'</span>)<font></font>
  }<font></font>
<font></font>
  <span class="hljs-keyword">return</span> response<font></font>
}, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">error</span>) </span>{<font></font>
<font></font>
  <span class="hljs-keyword">if</span> (apiService.isCountingRequest(error.config.url)) {
    <span class="hljs-comment">// 分發 decreaseLoadingCounter action 在計數器上 -1</span>
    store.dispatch(<span class="hljs-string">'app/decreaseLoadingCounter'</span>)<font></font>
  }<font></font>
<font></font>
  <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.reject(error)<font></font>
})<font></font>
</code></pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用发想</font></font></h2>

<hr>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至此我们已经可以获得全站读取中API 的数量状态，因此可以拿这个状态来做以下应用：</font></font></p>

<ul>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生loading 时失效的按钮 ( submit 资料后disable 按键 )</font></font></li>
	<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生loading 时遮罩效果( submit 资料后mask 画面 )</font></font></li>
</ul>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用一、产生loading 时失效的按钮</font></font></h2>

<hr>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此应用比较单纯，只是去切换特定元素的disabled属性，所以就只要在</font></font><code>module/app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中建立isLoading的Getter来表示读取中旗标，而isLoading会像计算属性(Computed Property)将返回值根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">const</span> getters = {
  <span class="hljs-attr">isLoading</span>: <span class="hljs-function"><span class="hljs-params">state</span> =&gt;</span> state.loadingCounter &gt; <span class="hljs-number">0</span>
}</code></pre>

<div class="note note--important"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">于组件中取得Getter状态方式的两种方式如下：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
1.在自定义的computed属性中回传this.$store.getters.app.isLoading </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
2.使用...mapGetters ('app', ['isLoading' ])直接加到computed属性中</font></font></div>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp;记得export module 的时候也要将getters 一并输出喔！</font></font></p>

<p><img src="https://az787680.vo.msecnd.net/user/chris/63f9aac6-744f-4c97-898c-044731cb1e85/1535945499_9344.png" style="width: 200px; height: 157px;"></p>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着建立读取中就disable的按钮组件，透过</font></font><code>mapGetters</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取得vuex中isLoading值，将值绑到button的disabled属性上，当按钮按下去呼叫web api时会自动disable这个按钮，等回应后才会重新开启。</font></font></p>

<pre><code class="language-html hljs xml"><span class="hljs-comment">&lt;!--HTML--&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"isLoading"</span> @<span class="hljs-attr">click.prevent</span>=<span class="hljs-string">"click"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">slot</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">slot</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><font></font>
<font></font>
<span class="hljs-comment">&lt;!--JavaScript--&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { mapGetters } <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span>
<span class="hljs-keyword">import</span> debounce <span class="hljs-keyword">from</span> <span class="hljs-string">'lodash/debounce'</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'LoadingDisableButton'</span>,
  <span class="hljs-attr">props</span>: {
    <span class="hljs-attr">click</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-built_in">Function</span>,
      <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>
    } 
  },
  <span class="hljs-attr">computed</span>: {
    <span class="hljs-comment">// 使用對象展開運算符將 isLoading getter 加入 computed 對象中</span>
    ...mapGetters(<span class="hljs-string">'app'</span>, [<span class="hljs-string">'isLoading'</span>])
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-attr">click</span>: debounce(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
      <span class="hljs-comment">// 避免連點造成重複觸發</span>
      <span class="hljs-keyword">this</span>.$emit(<span class="hljs-string">'click'</span>)
    }, <span class="hljs-number">1000</span>, { <span class="hljs-string">'leading'</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">'trailing'</span>: <span class="hljs-literal">false</span> })
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

<p>&nbsp;</p>

<p>效果如下</p>

<p><img src="https://az787680.vo.msecnd.net/user/chris/63f9aac6-744f-4c97-898c-044731cb1e85/1536133373_06899.gif" style="width: 300px; height: 338px;"></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用二、产生loading 时遮罩效果</font></font></h2>

<hr>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在等待API 回应的期间，多会利用各种形式来告知处理等待中的状况，有些会使用spinner 在画面的左上角转动，或者是整个遮罩盖上后在画面中间显示读取中的动态样式；以下笔者将利用store 中「读取中API 数量」的状态资料，延伸实作一个自动化启动/ 关闭的loading mask 效果。</font></font></p>

<p>&nbsp;</p>

<h3><span style="color:#800000;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">州</font></font></span></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新增isEnableLoadingMask 状态来控制loading mask 启用与否。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">const</span> state = {
  <span class="hljs-comment">// ... 略 ...</span>
  isEnableLoadingMask: <span class="hljs-literal">false</span>
}</code></pre>

<p>&nbsp;</p>

<h3><span style="color:#800000;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">突变</font></font></span></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新增mutation type 常数 APP_SET_IS_ENABLE_LOADING_MASK ，并以此名称加入新的mutation 去切换 isEnableLoadingMask 状态。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">/* store/mutationTypes.js */</span><font></font>
<font></font>
<span class="hljs-comment">// ... 略 ...</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> APP_SET_IS_ENABLE_LOADING_MASK = <span class="hljs-string">'APP_SET_IS_ENABLE_LOADING_MASK'</span>
</code></pre>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> types <span class="hljs-keyword">from</span> <span class="hljs-string">'../mutationTypes'</span><font></font>
<font></font>
<span class="hljs-keyword">const</span> mutations = {
  <span class="hljs-comment">// ... 略 ...</span><font></font>
  [types.APP_SET_IS_ENABLE_LOADING_MASK] (state, isEnable) {<font></font>
    state.isEnableLoadingMask = isEnable<font></font>
  }<font></font>
}</code></pre>

<div class="note note--info"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中isEnable 为payload ，可在commit 提交mutation 时传入。</font></font></div>

<p>&nbsp;</p>

<h3><font color="#800000"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行动</font></font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义loading mask 切换时机的Action 逻辑要点如下：</font></font></p>

<ul>
	<li><code>ACTION 計數器 +1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : dispatch「启动遮罩」Action</font></font></li>
	<li><code>ACTION 計數器 -1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : 当counter 为0 时dispatch「关闭遮罩」Action</font></font></li>
	<li><code>ACTION 啟動遮罩</code> :
	<ul>
		<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纪录启动时间(用以补足遮罩显示最小周期，避免画面闪动)</font></font></li>
		<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">commit 显示遮罩旗标mutation 为true</font></font></li>
	</ul>
	</li>
	<li><code>ACTION 關閉遮罩</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :
	</font></font><ul>
		<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较启动时间，补足遮罩显示最小周期(避免时间太短，画面闪动)</font></font></li>
		<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">commit 显示遮罩旗标mutation 为false</font></font></li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">let</span> enableLoadingMaskTime = <span class="hljs-built_in">Date</span>.now()
<span class="hljs-keyword">const</span> actions = {
  <span class="hljs-comment">// 讀取中 api 數量加 1</span><font></font>
  increaseLoadingCounter ({ dispatch, commit, state }) {<font></font>
    commit(types.APP_INCREASE_LOADING_COUNTER)<font></font>
    <span class="hljs-comment">// 目前仍有 api 在讀取中時，啟動遮罩</span>
    <span class="hljs-keyword">if</span> (state.loadingCounter &gt; <span class="hljs-number">0</span> &amp;&amp; !state.isEnableLoadingMask) { <font></font>
      dispatch(<span class="hljs-string">'enableLoadingMask'</span>)<font></font>
    }<font></font>
  },<font></font>
  <span class="hljs-comment">// 讀取中 api 數量減 1</span><font></font>
  decreaseLoadingCounter ({ dispatch, commit, state }) {<font></font>
    commit(types.APP_DECREASE_LOADING_COUNTER)<font></font>
    <span class="hljs-comment">// 目前沒有 api 在讀取中時，關閉遮罩</span>
    <span class="hljs-keyword">if</span> (state.loadingCounter &lt;= <span class="hljs-number">0</span> &amp;&amp; state.isEnableLoadingMask) {<font></font>
      dispatch(<span class="hljs-string">'disableLoadingMask'</span>)<font></font>
    }<font></font>
  },<font></font>
  <span class="hljs-comment">// 啟動遮罩</span><font></font>
  enableLoadingMask ({ commit, state }) {<font></font>
    enableLoadingMaskTime = <span class="hljs-built_in">Date</span>.now()<font></font>
    commit(types.APP_SET_IS_ENABLE_LOADING_MASK, <span class="hljs-literal">true</span>)<font></font>
  },<font></font>
  <span class="hljs-comment">// 關閉遮罩</span><font></font>
  disableLoadingMask ({ commit, state }) {<font></font>
    <span class="hljs-comment">// 避免切換速度過快而造成畫面閃動，所以定義最小顯示時間</span>
    <span class="hljs-keyword">let</span> minMaskShowPeriod = <span class="hljs-number">300</span> <span class="hljs-comment">/* ms */</span>
    <span class="hljs-keyword">let</span> pastMilliseconds = <span class="hljs-built_in">parseInt</span>(<span class="hljs-built_in">Date</span>.now() - enableLoadingMaskTime)
    <span class="hljs-keyword">let</span> isShorterThanMinMaskShowPeriod = minMaskShowPeriod &gt; pastMilliseconds
    <span class="hljs-keyword">let</span> remainMillisenconds = minMaskShowPeriod - pastMilliseconds<font></font>
<font></font>
    <span class="hljs-comment">// 若低於最小顯示時間，將使用 setTimout 補足顯示時間後關閉</span>
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      <span class="hljs-comment">// 真正要關閉時要確認目前是否還有 Request 執行中(避免延遲過程中又發出 request 被馬上關閉)</span>
      <span class="hljs-keyword">if</span> (state.loadingCounter &lt;= <span class="hljs-number">0</span> &amp;&amp; state.isEnableLoadingMask) {<font></font>
        commit(types.APP_SET_IS_ENABLE_LOADING_MASK, <span class="hljs-literal">false</span>)<font></font>
      }<font></font>
    }, isShorterThanMinMaskShowPeriod ? remainMillisenconds : <span class="hljs-number">0</span>)<font></font>
  }<font></font>
}</code></pre>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于遮罩会是全站机制，因此直接定义在app.vue 根组件中即可。</font></font></p>

<pre><code class="language-html hljs xml"><span class="hljs-comment">&lt;!--HTML--&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span><font></font>
<font></font>
    <span class="hljs-comment">&lt;!-- 讀取中遮罩 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">loading-mask</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"isEnableLoadingMask"</span> /&gt;</span><font></font>
<font></font>
    <span class="hljs-comment">&lt;!-- ... 略 ... --&gt;</span><font></font>
    <font></font>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span><font></font>
<font></font>
<span class="hljs-comment">&lt;!--JavaScript--&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { mapState } <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span>


<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'App'</span>,
  <span class="hljs-attr">computed</span>: {
    ...mapState(<span class="hljs-string">'app'</span>, [<span class="hljs-string">'isEnableLoadingMask'</span>])
  },
  <span class="hljs-attr">components</span>: {
    LoadingMask
  }
  <span class="hljs-comment">// ... 略 ...</span>
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行效果如下</font></font></p>

<p><img src="https://az787680.vo.msecnd.net/user/chris/63f9aac6-744f-4c97-898c-044731cb1e85/1536131733_47042.gif" style="width: 300px; height: 341px;"></p>

<p>&nbsp;</p>

<h2>&nbsp;</h2>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动启用遮罩</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时候在执行特殊功能时会比较耗时，因此也会有手动启用loading mask 的需求，这时可以建立一个共用的方法，将特定程式码区块包裹起来，在进入时开启遮罩，结束后关闭遮罩；由于使用的机制都是透过计数器来进行，差别只在这是手动加减，因此不会影响原本机制，可以兼容使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将loadingMaskBlock 方法定义在vue global mixin 中，方便所有页面组件使用。</font></font></p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span><font></font>
<font></font>
Vue.mixin({<font></font>
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-comment">// 讀取中遮罩區塊 (透過 counter 加減來調整遮罩)</span>
    loadingMaskBlock: <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">action</span>) </span>{
      <span class="hljs-keyword">try</span> {
        <span class="hljs-keyword">this</span>.$store.dispatch(<span class="hljs-string">'app/increaseLoadingCounter'</span>)
        <span class="hljs-keyword">await</span> action()<font></font>
      } <span class="hljs-keyword">finally</span> {
        <span class="hljs-keyword">this</span>.$store.dispatch(<span class="hljs-string">'app/decreaseLoadingCounter'</span>)<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p>&nbsp;</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此时若有耗时的运算可以使用loadingMaskBlock 包裹，在执行时即可自动产出loading mask 效果。</font></font></p>

<p><img src="https://az787680.vo.msecnd.net/user/chris/63f9aac6-744f-4c97-898c-044731cb1e85/1535963139_67541.png" style="width: 350px; height: 184px;"></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考资讯</font></font></h2>

<hr>
<p><a href="https://vuex.vuejs.org/zh/guide/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuex 官方网站</font></font></a></p>
                    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script><script>hljs.initHighlightingOnLoad();</script>
<hr>

