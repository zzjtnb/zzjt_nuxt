---
title: PureMVC框架介绍
img: 
categories: PureMVC
tags:
  -  PureMVC
---
<article class="baidu_pl">
		<div id="article_content" class="article_content clearfix csdn-tracking-statistics" data-pid="blog" data-mod="popu_307" data-dsm="post">
								<link rel="stylesheet" href="https://csdnimg.cn/release/phoenix/template/css/ck_htmledit_views-f57960eb32.css">
								            <link rel="stylesheet" href="https://csdnimg.cn/release/phoenix/template/css/ck_htmledit_views-f57960eb32.css">
						<div class="htmledit_views" id="content_views">
                
<br>
PureMVC是基于MVC模式（模型、视图和控制器）建立的一个轻量级应用框架。<br><br><br>
在PureMVC实现的经典MVC设计模式中，模型、视图和控制这三部分由三个单例模式类管理，分别是Model、View和Controller。三者合称为核心层或核心角色。<br><br><br>
PureMVC中还有另外一个单例模式类——Facade。<span style="color:#ff0000;"><strong>Facade提供了与核心层通信的唯一接口，以简化开发复杂度。</strong></span><br><br><br>
Model 与 Proxy<br>
Model保存对Proxy对象的引用。Proxy负责操作数据模型，与远程服务通信存取数据。这样保证了Model层的可移植性。<br><br><br>
View 与 Mediator<br>
View保存对Mediator对象的引用。由Mediator对象来操作具体的视图组件（View Component，例如Flex的DataGrid组件），包括：添加事件监听器，发送或接收Notification，直接改变视图组件的状态。这样做实现了把视图和控制它的逻辑分离开来。<br><br><br>
Controller 与 Command<br>
Controller保存所有Command的映射。Command类是无状态的，只在需要时才被创建。Command可以获取Proxy对象并与之交互，发送Notification，执行其他的Command。经常用于复杂的或系统范围的操作，如应用程序的“启动”和“关闭”。应用程序的业务逻辑应该在这里实现。<br><br><br>
Facade 与 Core<br>
Facade类负责初始化核心层（Model，View和Controller），并能访问它们的Public方法。<br>
这样，在实际的应用中，只需继承Facade类创建一个具体的Facade类就可以实现整个MVC模式，并不需要在代码中导入编写Model，View和Controller类。Proxy、Mediator和Command就可以通过创建的Facade类来相互访问通信。<br><br><br>
Observer 与 Notification<br>
PureMVC的通信是使用观察者模式以一种松耦合的方式来实现的。<br><br><br>
Notification可以被用来触发Command的执行<br>
Facade保存了Command与Notification之间的映射。当Notification（通知）被发出时，对应的Command（命令）就会自动地由Controller执行。Command实现复杂的交互，降低View和Model之间的耦合性。<br><br><br>
Mediator发送、声明、接收Notification<br>
当用View注册Mediator时，Mediator的listNotifications方法会被调用，以数组形式返回该Mediator对象所关心的所有Notification。之后，当系统其它角色发出同名的Notification（通知）时，关心这个通知的Mediator都会调用handleNotification方法并将Notification以参数传递到方法。<br><br><br>
Proxy发送，但不接收Notification<br>
在很多场合下Proxy需要发送Notification（通知），比如：Proxy从远程服务接收到数据时，发送Notification告诉系统；或当Proxy的数据被更新时，发送Notification告诉系统。<br>
如果让Proxy也侦听Notification（通知）会导致它和View（视图）层、Controller（控制）层的耦合度太高。View和Controller必须监听Proxy发送的Notification，因为它们的职责是通过可视化的界面使用户能与Proxy持有的数据交互。<br>
不过对View层和Controller层的改变不应该影响到Model层。<br><br><br><p>PureMVC与设计模式之二. Facade模式与Singleton模式<br><a href="http://blog.csdn.net/cpfeed/article/details/7391048" rel="nofollow" target="_blank">http://blog.csdn.net/cpfeed/article/details/7391048</a><br><br><br>
PureMVC源码分析<br><a href="http://www.cnblogs.com/tudas/archive/2012/09/16/learning-in-puremvc.html" rel="nofollow" target="_blank">http://www.cnblogs.com/tudas/archive/2012/09/16/learning-in-puremvc.html</a><br><br><br>
PureMVC源码<br>
puremvc-java-multicore-framework<br><a href="https://codeload.github.com/nphyez/puremvc-java-multicore-framework/zip/1.0.8" rel="nofollow" target="_blank">https://codeload.github.com/nphyez/puremvc-java-multicore-framework/zip/1.0.8</a><br>
puremvc-as3-standard-framework<br><a href="https://github.com/PureMVC/puremvc-as3-standard-framework/" rel="nofollow" target="_blank">https://github.com/PureMVC/puremvc-as3-standard-framework/</a><br><br><br>
PureMVC初探---内部的运转<br><a href="http://www.cnblogs.com/zhengye/articles/2068405.html" rel="nofollow" target="_blank">http://www.cnblogs.com/zhengye/articles/2068405.html</a><br><br><br></p>
PureMVC目前支持两个版本框架：标准和多核。<br><br><br><br>
PureMVC有一个名为Mediator的构造，顾名思义，它就是Mediator模式的实现，充当视图API和程序其余部分的API之间的中介。这是PureMVC实现MVC架构视图部分的关键构造。引入它是为了减少应用和视图之间的依赖，从而降低整个系统的耦合程度。<br><br><br><br>
Mediator 中介模式<br><br>
Facade n. 正面；表面；外观<br><br><br><br>            </div>
                      </div>
	</article>