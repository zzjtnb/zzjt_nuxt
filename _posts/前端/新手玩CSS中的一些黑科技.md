---
title:  新手玩CSS中的一些黑科技
img: 
categories: 前端
tags:
  -  css
---
鼠标移进网页里，不见了.简单的文字模糊效果.实时编辑CSS.CSS中简单运算
<div data-v-2c36b3b4="" itemprop="articleBody" class="entry-content article-content">
    <p>哎哎</p>
    <p><strong>1、鼠标移进网页里，不见了= =</strong></p>
    <pre><code>*{
    cursor: none!important;
}
</code></pre>
    <p><strong>2、简单的文字模糊效果</strong></p>
    <pre><code>*{ 
    color: transparent;
    text-shadow: #111 0 0 5px;
}
</code></pre> <img data-original-src="//upload-images.jianshu.io/upload_images/8373224-d12f9be56515a955.png" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2018/1/4/160c02face26e9db?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="971" data-height="258" src="https://user-gold-cdn.xitu.io/2018/1/4/160c02face26e9db?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"> <i><div></div></i>
    <p><strong>3、多重边框</strong></p>
    <pre><code>.div {
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);
    height: 200px;
    margin: 50px auto;
    width: 400px
}
</code></pre> <img data-original-src="//upload-images.jianshu.io/upload_images/8373224-932a0e6c56793fb3.jpg" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2018/1/4/160c02faceae8faa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="515" data-height="279" src="https://user-gold-cdn.xitu.io/2018/1/4/160c02faceae8faa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"> <i><div></div></i>
    <p><strong>4、实时编辑CSS</strong></p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;body&gt;
        &lt;style style="display:block" contentEditable&gt;
            body { color: blue }
        &lt;/style&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre> <img data-original-src="//upload-images.jianshu.io/upload_images/8373224-f83de0b512cf476b.png" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2018/1/4/160c02facfcf9b72?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="812" data-height="729" src="https://user-gold-cdn.xitu.io/2018/1/4/160c02facfcf9b72?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"> <i><div></div></i>
    <p><strong>5、CSS中简单运算</strong></p>
    <pre><code>.div{
    width: calc(100% - 500px);
}
</code></pre> <img data-original-src="//upload-images.jianshu.io/upload_images/8373224-9ae25821508717e3.jpg" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2018/1/4/160c02facdeffb31?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="720" data-height="139" src="https://user-gold-cdn.xitu.io/2018/1/4/160c02facdeffb31?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"> <i><div></div></i>
    <p><strong>6、border-radius</strong></p>
    <p>因为基本上很多人都是这么用的：</p>
    <pre><code>.div {
     border-radius: 4px;
}
</code></pre> <img data-original-src="//upload-images.jianshu.io/upload_images/8373224-a085d92f7317ddbc.jpg" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2018/1/4/160c02fb0093b278?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="486" data-height="254" src="https://user-gold-cdn.xitu.io/2018/1/4/160c02fb0093b278?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"> <i><div></div></i>
    <p>稍微高端一点的是这样的：</p>
    <pre><code>.div {
    border-radius: 4px 6px 6px 4px;
}
</code></pre> <img data-original-src="//upload-images.jianshu.io/upload_images/8373224-419a76fa47182857.jpg" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2018/1/4/160c02fb0071d1a6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="528" data-height="259" src="https://user-gold-cdn.xitu.io/2018/1/4/160c02fb0071d1a6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"> <i>v</i>
    <p>然而，终极黑科技是这样用的：</p>
    <pre><code>.div {
     border-radius: 5px 5px 3px 2px / 5px 5px 1px 3px;
}
</code></pre> <img data-original-src="//upload-images.jianshu.io/upload_images/8373224-46f96ebc18733d9d.jpg" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2018/1/4/160c02fb027dbf1e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="480" data-height="245" src="https://user-gold-cdn.xitu.io/2018/1/4/160c02fb027dbf1e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"> <i><div></div></i>
    <blockquote>
        <p>border-radius 它可以赋8个值：<br> 斜线前面的影响的是水平方向，斜线后面影响的是垂直方向，<br> 各个数字就分别代表四个不一样的方向。</p>
    </blockquote>
    <p><strong>7、outline-offset</strong></p>
    <p>在input下写CSS的时候对下面的语句会很熟悉：</p>
    <pre><code>input {
    outline : none;
}

input:focus {
    outline : none;
}
</code></pre>
    <p>这就是将input输入框去掉默认的蓝线框的方法。</p>
    <p>CSS中还有一个outline-offset属性，在这个属性中，你可以设置默认线框的距离：</p>
    <pre><code>input {
    outline-offset: 4px ;
}
（web前端学习交流群：328058344 禁止闲聊，非喜勿进！） 

</code></pre>
    <p>调节该属性值的大小你就可以看到outline的距离变化了。</p>
    <p>最后献上一同事实习前的大白demo</p>
    <pre><code>&lt;!doctype html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;title&gt;Baymax&lt;/title&gt;
        &lt;link rel=stylesheet href="demo2.css"/&gt;
    &lt;/head&gt;
    &lt;style&gt;
           body {
                background: #595959;
            }
            #baymax{
             /*设置为 居中*/    
                margin: 0 auto;

                /*高度*/   
                height: 600px;

                /*隐藏溢出*/    
                overflow: hidden;
            }

            #head{
                height: 64px;
                width: 100px;

                /*以百分比定义圆角的形状*/    
                border-radius: 50%;

                /*背景*/    
                background: #fff;
                margin: 0 auto;
                margin-bottom: -20px;

                /*设置下边框的样式*/    
                border-bottom: 5px solid #e0e0e0;

                /*属性设置元素的堆叠顺序；    拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面*/    
                z-index: 100;

                /*生成相对定位的元素*/    
                position: relative;
            }
            #eye,
            #eye2{
                width: 11px;
                height: 13px;
                background: #282828;
                border-radius: 50%;
                position: relative;
                top: 30px;
                left: 27px;

                /*旋转该元素*/    
                transform: rotate(8deg);
            }

            #eye2{
                /*使其旋转对称*/    
                transform: rotate(-8deg);
                left: 69px;    top: 17px;
            }

            #mouth{
                width: 38px;
                height: 1.5px;
                background: #282828;
                position: relative;
                left: 34px;
                top: 10px;
            }
            /*躯干和腹部*/

            #torso,
            #belly{
                margin: 0 auto;
                height: 200px;
                width: 180px;
                background: #fff;
                border-radius: 47%;

                /*设置边框*/    
                border: 5px solid #e0e0e0;
                border-top: none;
                z-index: 1;
            }

            #belly{
                height: 300px;
                width: 245px;
                margin-top: -140px;
                z-index: 5;
            }

            #cover{
                width: 190px;
                background: #fff;
                height: 150px;
                margin: 0 auto;
                position: relative;
                top: -20px;
                border-radius: 50%;
            }
            /*心脏*/

            #heart{  
              width:25px; 
              height:25px; 
              border-radius:50%; 
              position:relative; 

              /*向边框四周添加阴影效果*/
              box-shadow:2px 5px 2px #ccc inset; 

              right:-115px; 
              top:40px; 
              z-index:111; 
              border:1px solid #ccc;
            }
            /*手臂*/
            #left-arm,
            #right-arm{
                height: 270px;
                width: 120px;
                border-radius: 50%;
                background: #fff;
                margin: 0 auto;
                position: relative;
                top: -350px;
                left: -100px;
                transform: rotate(20deg);
                z-index: -1;
            }

            #right-arm{
                transform: rotate(-20deg);
                left: 100px;
                top: -620px;
            }
            /*手指头*/


            #l-bigfinger,
            #r-bigfinger{
                height: 50px;
                width: 20px;
                border-radius: 50%;
                background: #fff;
                position: relative;
                top: 250px;
                left: 50px;
                transform: rotate(-50deg);
            }

            #r-bigfinger{
                left: 50px;
                transform: rotate(50deg);
            }

            #l-smallfinger,
            #r-smallfinger{
                height: 35px;
                width: 15px;
                border-radius: 50%;
                background: #fff;
                position: relative;
                top: 195px;
                left: 66px;
                transform: rotate(-40deg);
            }

            #r-smallfinger{
                background: #fff;
                transform: rotate(40deg);
                top: 195px;
                left: 37px;
            }
            /*大腿*/
            #left-leg,
            #right-leg{
                height: 170px;
                width: 90px;
                border-radius: 40% 30% 10px 45%;
                background: #fff;
                position: relative;
                top: -640px;
                left: -45px;
                transform: rotate(-1deg);
                z-index: -2;
                margin: 0 auto;
            }

            #right-leg{
                background: #fff;
                border-radius:30% 40% 45% 10px;
                margin: 0 auto;
                top: -810px;
                left: 50px;
                transform: rotate(1deg);
            }



    &lt;/style&gt;
&lt;body&gt;

     &lt;div id="baymax"&gt;

        &lt;!-- 定义头部，包括两个眼睛、嘴 --&gt;
        &lt;div id="head"&gt;
            &lt;div id="eye"&gt;&lt;/div&gt;
            &lt;div id="eye2"&gt;&lt;/div&gt;
            &lt;div id="mouth"&gt;&lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- 定义躯干，包括心脏 --&gt;
        &lt;div id="torso"&gt;
            &lt;div id="heart"&gt;&lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- 定义肚子腹部，包括 cover（和躯干的连接处） --&gt;
        &lt;div id="belly"&gt;
            &lt;div id="cover"&gt;&lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- 定义左臂，包括一大一小两个手指 --&gt;
        &lt;div id="left-arm"&gt;
            &lt;div id="l-bigfinger"&gt;&lt;/div&gt;
            &lt;div id="l-smallfinger"&gt;&lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- 定义右臂，同样包括一大一小两个手指 --&gt;
        &lt;div id="right-arm"&gt;
            &lt;div id="r-bigfinger"&gt;&lt;/div&gt;
            &lt;div id="r-smallfinger"&gt;&lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- 定义左腿 --&gt;
        &lt;div id="left-leg"&gt;&lt;/div&gt;

        &lt;!-- 定义右腿 --&gt;
        &lt;div id="right-leg"&gt;&lt;/div&gt;

    &lt;/div&gt;
&lt;/body&gt;
&lt;html&gt; 
</code></pre> <img data-original-src="//upload-images.jianshu.io/upload_images/8373224-2ee33fab939dee18.jpg" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2018/1/4/160c02fb0482127d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="406" data-height="522" src="https://user-gold-cdn.xitu.io/2018/1/4/160c02fb0482127d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"> <i><div></div></i>
    
</div>