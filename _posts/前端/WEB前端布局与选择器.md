---
title:  WEB前端布局与选择器
img: 
categories: 前端
tags:
  -  css

---
<html lang="cn">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://raw.githubusercontent.com/zzjtnb/Front-end-Learning-Library/master/html/style.css" type="text/css">
    </head>
    <body style="margin:0">
        <div>
            <div id="banner">
                <img src="https://github.com/zzjtnb/Front-end-Learning-Library/blob/master/html/images/3.jpg?raw=true" alt="">
            </div>
            <div id="navigation">
                <ul>
                    <li>
                        <a href="">首页</a>
                    </li>
                    <li>
                        <a href="">产品介绍</a>
                    </li>
                    <li>
                        <a href="">关于我们</a>
                    </li>
                    <li>
                        <a href="" style="border:none">联系我们</a>
                    </li>
                </ul>
            </div>
            <div id="bottom">
                版权所有:&nbsp;争逐集团
            </div>
        </div>
        <hr>
        <br>
        <div style="text-align: center">
            <div>
                <p>
                    <b>容器标签:</b> <span>容器级的标签可以简单的理解为能嵌套其它所有标签的标签。 常见容器级的标签: div h ul ol dl li dt dd span...。</span>
                </p>
                <p>
                    <b>div容器的特点</b> <span>一个空div,默认宽度100%,高度为0,当给这个容器里面添加东西的时候,容器的高度才会被内容所撑开</span>
                </p>
                <p>
                    <strong>body:</strong>标签在默认的情况下距离浏览器四周有空隙,可使用margin:0去除
                </p>
            </div><b>DIV容器居中</b>
            <div>
                <b>水平居中</b>
                <ul>
                    <li>
                        <span>text-align:center:</span>让内部元素水平居中
                    </li>
                    <li style="list-style: none">
                        <br>
                    </li>
                    <li>
                        <span>margin:aotu:</span>让元素本身水平居中(注意,使用这种方式时查看容器的宽度)
                    </li>
                </ul>
                <div style="width:50%;margin:auto;color:red">
                    旅舍残春宿雨晴，恍然心地忆咸京。<br>
                    树头蜂抱花须落，池面鱼吹柳絮行。<br>
                    禅伏诗魔归净域，酒冲愁阵出奇兵。<br>
                    两梁免被尘埃污，拂拭朝簪待眼明。<br>
                </div>
            </div><br>
            <div>
                <b>垂直居中</b> <b>文字在容器中垂直居中</b>
                <p>
                    行高--line-height
                </p>
                <p>
                    在浏览器中,字体的默认大小是16像素(16px),行高是21像素,把行高设置成容器的高度,文字就可以垂直居中
                </p>
            </div>
        </div>
        <hr>
        <div>
            <strong>CSS选择器</strong> <b>ID选择器</b>
            <p>
                <span>id表示身份,在页面中元素的ID不允许重复,因此ID选择器只能选择单个元素</span> 例如:
            </p>
            <pre>
            <code>
          #Test{
            color:red
          }
            </code>
        
</pre><b>标签选择器</b>
            <p>
                <span>根据HTML标签名称,选择对应的所有标签</span> 例如:
            </p>
            <pre>
            <code>
              div{
                color:red
              }
            </code>
        
</pre><b>类(别)选择器</b>
            <p>
                <span>选择拥有的多个元素</span> 例如:
            </p>
            <pre>
            <code>
              .banner{
                color:red
              }
            </code>
        
</pre><b>通用选择器</b>
            <p>
                <span>针对页面所有的标签都生效</span> 例如:
            </p>
            <pre>
            <code>
              *{
                font-size:18px
              }
            </code>
        
</pre><b>CSS样式优先级</b>
            <p>
                <span>行内样式优先级&gt;ID选择器&gt;类选择器&gt;标签选择器&gt;通用选择器</span><br>
                <b>当样式发生冲突时,谁的权重值搞,谁就生效.</b>
            </p>
            <pre>
        01.通用选择器 
            <b style="color: red">*</b>                          权重值=<b style="color: red">0</b>
        02.标签(元素)选择器 
            <b style="color: red">div、span...</b>        权重值=<b style="color: red">1</b>
        03.类(别)选择器 
            <b style="color: red">.act、.nav...</b>           权重值=<b style="color: red">10</b>
        04.ID选择器 
            <b style="color: red">#btn、#box...</b>               权重值=<b style="color: red">100</b>
        05.行内样式                             权重值=
            <b style="color: red">1000</b>
        
</pre><strong>总结:选择器选择的范围越小越精确优先级就越高</strong>
        </div>
        <div>
            CSS小知识点
            <p>
                元素宽高的百分比,是相对于父元素而言的.<br>
                若父元素高度为0,则子元素高度及时设置100%,大小也是0.<br>
                HTML元素大小是相对于浏览器窗口而言的
            </p>
            <p>
                设置背景图片的时候,图片默认是以平铺的方式来展现的
            </p>
        </div>
        <hr>
        <div style="text-align: center;">
            <b>元素浮动布局</b>
            <p>
                元素浮动的特点: 容器内的元素,不管他的大小如何都是独占一行. 在正常情况下,他们的排列都是从上到下. 浮动元素会脱离网页文档,与其他元素发生重叠. 但是,不会与文字内容发生重叠. <span>浮动元素不占据空间,所以无法撑开父元素</span> <span>浮动元素在排列时,只参考前一个元素位置即可</span>
            </p>
            <p>
                <b>浮动元素的重叠问题</b><br>
            </p>
            <pre>
1.浮动元素不会覆盖文字内容
2.浮动元素不会覆盖图片内容(因为图片本身也属于文本,图片可以看做是一个特殊的文字)
3.浮动元素不会覆盖表单元素(输入框、单选按钮、复选框、按钮、下拉选择框等)
        
</pre>使用场景: 1.文字环绕效果 2.元素的横向排版
            <p>
                文字环绕效果
            </p>
            <div style="display: table;margin: auto;">
                <div class="green"></div>
                <div class="red">
                    文字环绕效果文字环绕效果文字环绕效果文字环绕效果文字环绕效果文字环绕效果文字环绕效果文字环绕效果文字环
                </div>
            </div>
            <p>
                横向排版
            </p>
            <div style="margin: auto;display: table;">
                <div class="a"></div>
                <div class="b"></div>
                <div class="c"></div>
            </div>
            <hr>
            <div style="text-align: center;">
                <b>清除浮动影响</b>
                <p>
                    flot外加一个div设置高度
                </p>
                <div style="height:200px;">
                    <div class="a1"></div>
                    <div class="b1"></div>
                    <div class="c1"></div>
                </div>
                <div class="hh"></div>
                <hr>
                <p>
                    flot外加一个div设置css样式overflow: auto
                </p>
                <div style="overflow: auto">
                    <div class="a1"></div>
                    <div class="b1"></div>
                    <div class="c1"></div>
                </div>
                <div class="hh"></div>
                <hr>
                <p>
                    flot外加一个div设置css样式clear:both
                </p>
                <div style="clear: both;">
                    <div class="a1"></div>
                    <div class="b1"></div>
                    <div class="c1"></div>
                </div>
                <div class="hh"></div>
                <hr>
                <p>
                    聊天界面效果
                </p>
                <div class="chat">
                    <ul>
                        <li style="float:left">左浮动
                        </li>
                        <li style="float:right">右浮动
                        </li>
                        <li style="float:left">左浮动
                        </li>
                        <li style="float:right">右浮动
                        </li>
                        <li style="float:left">左浮动
                        </li>
                        <li style="float:right">右浮动
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
别感谢@Deguang大神，在他的指导下，才踩出了这个element-ui的坑🙂