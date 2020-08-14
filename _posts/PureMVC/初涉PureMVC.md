---
title: 初涉PureMVC
img: 
categories: PureMVC
tags:
  -  PureMVC
---

<div id="cnblogs_post_body" class="blogpost-body"><p>转自：http://www.iamsevent.com/post/36.html</p>
<p>&nbsp;</p>
<h2>AS3 Coder】任务七：初涉PureMVC——天气预报功能实现</h2>
<div class="post_content">
<p><span style="color: red; font-family: verdana, arial, helvetica, sans-serif; font-size: 14px; text-indent: 24px; word-wrap: break-word; line-height: normal; padding: 0px; margin: 0px;">使用<span class="t_tag" style="word-wrap: break-word; cursor: pointer; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: #ff0000; padding: 0px; margin: 0px;">框架：AS3<br style="color: #35383d; font-family: verdana, arial, helvetica, sans-serif; font-size: 14px; text-indent: 24px; word-wrap: break-word; line-height: normal; padding: 0px; margin: 0px;"><span style="color: red; font-family: verdana, arial, helvetica, sans-serif; font-size: 14px; text-indent: 24px; word-wrap: break-word; line-height: normal; padding: 0px; margin: 0px;">任务描述：了解PureMVC框架使用方式，了解普通AS3使用HTTP请求进行网络交互的方式，理解PureMVC框架设计思想<br style="color: #35383d; font-family: verdana, arial, helvetica, sans-serif; font-size: 14px; text-indent: 24px; word-wrap: break-word; line-height: normal; padding: 0px; margin: 0px;"><span style="color: red; font-family: verdana, arial, helvetica, sans-serif; font-size: 14px; text-indent: 24px; word-wrap: break-word; line-height: normal; padding: 0px; margin: 0px;">难度系数：2</span></span></span></span></p>
<p>本章源码下载：<a href="http://www.iamsevent.com/zb_users/UPLOAD/learnPureMVC1/WeatherTest.rar" target="_blank">http://www.iamsevent.com/zb_users/UPLOAD/learnPureMVC1/WeatherTest.rar</a></p>
<p>最近在讨论群里经常有看见有新手想学习PureMVC，为什么想学呢？因为很多做页游的公司都在AS工程师的招聘启事里写<span style="color: #ff0000;">“熟悉PureMVC”这一条，所以为了找到工作，也不管三七二十一，先准备把PureMVC学起来再说。但是直接一上手就看官方的文档，很难领会其中奥妙，在<a href="http://bbs.9ria.com" target="_blank">天地会</a>上面的<a href="http://wiki.9ria.com/index.php/PureMVC" target="_blank">PureMVC专题</a>找到的学习资料又比较杂，那么在此特推出一篇教程供大家学习一下。</span></p>
<p>先简单阐述一下PureMVC中的几大要点吧：</p>
<p>①PureMVC中存在一个叫做Facade的类，它是PureMVC的核心类，负责管理调度PureMVC中的成员交互和运作。一般来说，一个应用中创建一个facade对象就够了。</p>
<p>&nbsp;</p>
<p>②PureMVC中主要有三个角色：<span style="color: #3366ff;">Mediator、<span style="color: #00ff00;">Command以及<span style="color: #ff6600;">Proxy。这三个角色分别对应着我们通常所说的MVC思想中的<span style="color: #3366ff;">V（视图）、<span style="color: #00ff00;">C（控制器）、<span style="color: #ff6600;">M（数据管理器）。它们只有被注册到facade类中才能运作，才有意义。通过调用facade对象的<span style="color: #3366ff;">registerMediator、<span style="color: #3366ff;">registerCommand或<span style="color: #3366ff;">registerProxy方
法可以将它们注册到facade对象中去。一旦被注册到facade对象中去了之后，享用同一注册源的Mediator、Command以及Proxy对
象就可以通过notification（通知）进行彼此之间的通讯，notification类似于AS中的事件，只不过notification是在全
局进行派发罢了，而事件只有事件派发者本人或其显示列表的父容器才能侦听到。使用notification进行通讯是PureMVC<span style="color: #ff0000;">最大的便利之处。在一个Mediator、Command或者Proxy对象中使用<span style="color: #3366ff;">sendNotification方法可以派发一个notification通知：</span></span></span></span></span></span></span></span></span></span></span></p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">sendNotification("MyNotification");</pre>
<p>该 方法的首个参数代表该条notification的名字，确保notification的名字的唯一性是减少意外错误的最佳保证。如果你愿意，你可以为该 方法传入第二个参数作为该条notification所携带的数据，可以是一个String, int或者是Object、Array等复杂对象。</p>
<p>notification的派发方式是一样的，但是接受方式有些不同，对于Mediator对象来说，我们需要通过重载<span style="color: #3366ff;">listNotificationInterests方法为它列出其感兴趣的notification列表，如果在一个notification被发出时，该Mediator对象通过查看该notification的名字来判断该条notification是否是自己所感兴趣的，若感兴趣，则会调用<span style="color: #3366ff;">handleNotification方法来对该notification进行处理：</span></span></p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">override public function listNotificationInterests():Array
{
	return ["MyNotification", "Shit"];
}

override public function handleNotification(notification:INotification):void
{
    switch( notification.getName() )
   {
	case "MyNotification":
		trace("get MyNotification");
		break;
	case "Shit":
		trace(notification.getBody());
		break;
   }
}

</pre>
<p><span style="color: #3366ff;">listNotificationInterests方法的返回值必须是一个数组，而且该数组中的内容不能动态改变。当一个Mediator对多个notification感兴趣的时候，可以在<span style="color: #3366ff;">handleNotification方法中使用switch...case语句针对不同名字的notification执行不同的逻辑，若是在派发通知时在sendNotification方法中设置了第二个参数，那么可以在处理通知时使用notification对象的<span style="color: #3366ff;">getBody方法来获取通知所携带的数据。</span></span></span></p>
<p>对于Command对象，若要让它接受notification通知，就必须为该Command在facade中注册notification对应关系：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">registerCommand("Shit", ShitCommand);
registerCommand("Fuck", FuckCommand);

</pre>
<p>一个Command需要响应多少种类的notification就需要多少条注册语句，注意Command的使用方法，我们没有必要去 实例化一个Command对象，而仅仅需要创建一个Command类，之后为该类注册notification响应关系即可。注册完毕之后我们需要在 Command类中通过重载<span style="color: #3366ff;">execute方法来为Command编写通知处理逻辑：</span></p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">override public function execute(notification:INotification):void
{
	switch( notification.getName() )
	{
		case "Shit":
			trace("get Shit");
			break;
		case "Fuck":
			trace("get Shit");
			break;
	}
}

</pre>
<p>其中逻辑基本上与Mediator的处理模式是一样的。对于Proxy来说，它不具备响应notification的能力，这样也使得其Model（数据管理者）的角色更加纯粹一些，数据管理者本身就没有必要参与到应用程序的业务逻辑中去。</p>
<p>一旦某个M、C或者P被注册到facade中，它们中的<span style="color: #ffcc00;">facade属性就会持有注册到的facade对象的引用，然后我们可以在任意时候调用该属性的retrieveMediator方法获取到某个名称对应的Mediator对象。如我们使用刚才注册的那个名字去facade中取到相应的Mediator对象：</span></p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">var mediator:Mediator = facade.retrieveMediator("SpMediator");
</pre>
<p>类似地，我们可以使用使用facade属性的retrieveProxy方法获取到指定名称对应的Proxy对象。这是除了notification外的 另一种通讯方式，只不过该方式耦合性稍高一些。如果在某些情况下Mediator要获取Proxy的数据，就可以通过该方法拿到。</p>
<p>&nbsp;</p>
<p>③关于这三者的使用方法，在AS项目中，我们会为一个视图模块套上一个Mediator对象。类似这样：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">var sp:Sprite = new Sprite();
var mediator:Mediator = new Mediator("SpMediator", sp);
</pre>
<p>Mediator的构造函数默认接受两个参数，第一个指的是该Mediator的名字，一旦被指定了一个名字，该Mediator对象就会以该名字被注册 到facade中去；第二个参数则是该Mediator所关联的视图对象，关联了一个视图对象之后，Mediator可以通过其<span style="color: #ffcc00;">viewComponent属性来访问它所关联着的视图对象。</span></p>
<p>通 过为Flash显示列表中某个显示对象建立与Mediator的关联，我们这就让显示列表与PureMVC框架之间衔接了起来。在Mediator中对其 所关联显示对象viewComponent侦听事件，我们就可以在viewComponent需要获取数据或做一些其自身所无法完成的大事时借助 PureMVC的力量予以完成掉。下图展示的是一个项目中，Flash显示列表与PureMVC之间的通讯关系：</p>
<p><img style="width: 664px; height: 514px; float: none;" src="http://www.iamsevent.com/zb_users/UPLOAD/learnPureMVC1/1.PNG" alt="" width="664" height="514" border="0" hspace="0" vspace="0"></p>
<p>由 此图我们可以看到，在显示列表中的显示对象在外围包裹了一层Mediator之后，如果它需要获取数据，只需要派发一个事件即可，显示对象自身无需知道数 据获取的过程，它只是衣来伸手饭来张口，我TM要数据的时候你TM就乖乖给我拿过来，老子不管你用了什么方式！若是你已准确地在Mediator中为相应 事件添加了事件侦听器，那么在收到来自其所关联的显示列表中派发出来的事件后就可以开始通过notification让PureMVC框架运作起来了，若 要获取数据，那么该notification会被Command相应并调用Proxy的API，由Proxy负责网络交互，待取到数据后使用 notification发送回Mediator；若要切换面板（如点击显示列表中某个按钮后打开另一个面板），则发送的notification会被要 切换到的面板所关联的Mediator相应并执行相关切换面板的操作。</p>
<p>&nbsp;</p>
<p>光看文字有点抽象，但是我也不太可能出视频。 所以只能结合一点实例来理论结合实践一下。由于我自己不会写后台，所以只能找网上一些公开的API，用得比较多的一个是雅虎的天气API，这个的使用方法 也比较简单，稍后我们就会看到。在本教程中，由于安全沙箱的问题，不能将演示的swf放上来，因此还得列位下载源码后在自己的机器上编译运行以查看结果， 现在只放出一个运行结果的截图以供列位在脑中有个小小的印象：</p>
<p><img style="width: 620px; height: 556px; float: none;" src="http://www.iamsevent.com/zb_users/UPLOAD/learnPureMVC1/2.jpg" alt="" width="620" height="556" border="0" hspace="0" vspace="0"></p>
<p>很简单对吧？只需要获取一下天气信息再显示出来就好了，数据和图片都从雅虎网站上加载，因此要看到效果，必须让你的机器处于联网状态才行。</p>
<p>好 了，搓搓手，let`s fucking start our game, baby! 首先是创建文档类，然后在文档类中，若要启动PureMVC框架，就必须创建一个facade实例。由于我们当前做的是一个天气预报程序，所以咱们的 facade类就取名叫WeatherFacade好了：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">package com.iamsevent
{
	import com.iamsevent.control.commands.ApplicationCommand;
	
	import org.puremvc.as3.patterns.facade.Facade;
	
	public class WeatherFacade extends Facade
	{		
		private static var _instance:WeatherFacade;
		
		public function WeatherFacade()
		{
			super();
		}
		
		public static function get instance():WeatherFacade
		{
			if( !_instance )
			{
				_instance = new WeatherFacade();
			}
			return _instance;
		}
		
		override protected function initializeController():void
		{
			super.initializeController();
			
			//pureMVC一启动时就需要注册一些会用到的command
			this.registerCommand(NotificationDictionary.STARTUP_APP, ApplicationCommand);
		}
		
		public function startup():void
		{
			sendNotification(NotificationDictionary.STARTUP_APP);
		}
	}
}
</pre>
<p>在创建了facade之后，我们想把一些初始化工作放到一个Command里去做，因为初始化的代码不涉及到Mediator和Proxy。但是之前说 过，在PureMVC中，一个Command只有被注册到了facade中才有意义，才能运作。在facade启动时会调用其一个名叫<span style="color: #ffcc00;">initializeController的 方法来执行一系列Command的注册工作，我们就把做初始化工作的Command（我这里命名为ApplicationCommand）在该方法中执行 注册工作。注册完毕后，我们让WeatherFacade开放一个公共API出来，以便外部在想要启动facade的时候可以随时启动。我将该API命名 为startup，在该方法中只执行一句代码，就是派发我们之前注册的与ApplicationCommand相关联的通知（这里出现的 NotificationDictionary类是一个我创建的用于记录该应用中所有可用的notification名字的类）。在派发该通知之后会发生 什么事？对，这位同学回答得很好，会执行与它关联的Command的excute方法。下面给出的是ApplicationCommand类的代码：</span></p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">public class ApplicationCommand extends SimpleCommand
{
	
	public function ApplicationCommand()
	{
		super();
	}
	
	override public function execute(note:INotification):void
	{
		trace("application startup!");
	}
}
</pre>
<p>在pureMVC中提供了两种类型的Command以供我们选择：MacroCommand和SimpleCommand，前者可以让 你一次性按顺序执行多个Command，后者则一次只执行一条Command，总而言之，SimpleCommand是单一命 令，MacroCommand是多命令。在我的实际应用中，基本上极少会用到前者，一般使用后者就足以满足我们的使用需要了。在 ApplicationCommand的excute方法中我们只执行一句踹死语句，这意味着现在，当我们通过调用我们的 WeatherFacade.startUp方法启动应用后，会看到控制台输出一句"application startup"，除此之外不会发生任何其他事情。稍后，我们会在该excute方法中添加其它的一些逻辑。现在，我们先创建出我们的文档类 WeatherTest.as，并试着启动我们的WeatherFacade看看。</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">package
{
	import com.iamsevent.WeatherFacade;
	
	import flash.display.Sprite;
	import flash.system.System;
	
	[SWF(width="600", height="500")]
	public class WeatherTest extends Sprite
	{
		public function WeatherTest()
		{
			System.useCodePage = true;
			WeatherFacade.instance.startup();
		}
	}
}
</pre>
<p>由于WeatherFacde被我做成了单例，所以我们可以在文档类中很方便地拿到其全局唯一的实例并执行其启动方法。我这里还使用了一句 Systen.useCodePage = true 是为了让我在向雅虎获取天气数据时不至于出现乱码。如果你现在执行我们的文档类WeatherTest，你将会如期看到控制台输出了一条应用已启动的消 息。到此为止，列位应该已经了解了pureMVC中Command和notification的使用方式了。那么接下来，让我们继续来点好玩的，Come on！</p>
<p>我们知道，我们在做Flash应用的时候通常会把文档类作为最上层父容器，其他创建的图形啊面板什么的都会addChild在文档 类或其子对象上面。那么在pureMVC中，为了延续我们的习惯，我们需要让启动应用的Command——ApplicationCommand持有文档 类的引用才行。为了达到这个目的，我在WeatherFacade.startup方法中添加了一个WeatherTest类型的参数，并将该参数放在 notification中携带数去</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">public function startup(main:WeatherTest):void
{
	sendNotification(NotificationDictionary.STARTUP_APP, main);
}
</pre>
<p>之后，在ApplicationCommand的excute方法中取出其接收到的notification对象携带的文档类引用并持有之：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">public class ApplicationCommand extends SimpleCommand
{
	private var _main:WeatherTest;
	
	……
	
	override public function execute(note:INotification):void
	{
		_main = note.getBody() as WeatherTest;
	}
}
</pre>
<p>最后，我们只需要在文档类中，将文档类自身的引用传递给WeatherFacade.startup方法就行了。</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">public class WeatherTest extends Sprite
{
	public function WeatherTest()
	{
		System.useCodePage = true;
		WeatherFacade.instance.startup(this);
	}
}

</pre>
<p>在ApplicationCommand持有了文档类的引用之后我们就可以在ApplicationCommand.excute方法中执行一系列我们熟 悉的addChild及removeChild等操作来为舞台上添置东东了。在添置东东之前，我们先想想，我们舞台上要放置点神马东西呢？首先，是一个面 板，上面有多个按钮，每个按钮代表一个城市，我点击哪个城市的按钮就可以查询哪个城市的天气预报信息！为了简便起见，我使用了以前教程中用到的一些按钮、 面板组件，源码就不放出了，感兴趣的道友可以直接下载源码进行查看。我们首先创建的导航面板NavigationPanel代码如下：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">/**
 * 导航面板，用以选择查询的城市  
 * @author S_eVent
 * 
 */	
public class NavigationPanel extends Canvas
{
	private var _buttonList:Vector.&lt;CustomButton&gt; = new Vector.&lt;CustomButton&gt;();
	private var _gap:int = 10;//按钮间水平间距
	
	public function NavigationPanel()
	{
		super();
		this.mouseEnabled = false;
		//对于不经常用到的事件侦听使用弱引用（addEventListener方法第五个参数设为true）
		this.addEventListener(Event.ADDED_TO_STAGE, onAdded, false, 0, true);
	}
	
	/**
	 * 设置按钮项 
	 * @param items	按钮项数据提供源。其中的元素格式需是包含有label(按钮标签)及name(用以在查询天气时使用的名字)属性的Object对象
	 * 
	 */		
	public function setItems(items:Array):void
	{
		//清空按钮列表
		while(_buttonList.length &gt; 0)
		{
			removeChild(_buttonList.pop());
		}
		var button:CustomButton;
		for each(var elem:Object in items)
		{
			button = new CustomButton(elem.label);
			button.name = elem.name;
			addChild(button);
			_buttonList.push( button );
		}
		updateDisplayList();
	}
	
	/** 更新显示列表，让其中组件按一定方式排布 */
	public function updateDisplayList():void
	{
		//对于NavigationPanel来说，它的排列规则是让其中的按钮都居中排布
		
		//计算全部按钮排布后的宽度占用
		var w:Number = 0;
		var len:int = _buttonList.length;
		var i:int;
		for(i=0; i&lt;len; i++)
		{
			w += _buttonList[i].width;
		}
		w += (len - 1) * _gap;
		
		//计算全部按钮排布后的高度占用
		var h:Number = _buttonList[0].height;
		
		//得到起始位置后开始排列
		var startX:Number = (this.width - w) / 2;
		var startY:Number = (this.height - h) / 2;
		for(i=0; i&lt;len; i++)
		{
			_buttonList[i].x = startX;
			_buttonList[i].y = startY;
			startX += _buttonList[i].width + _gap;
		}
	}
	
	private function onAdded( e:Event ):void
	{
		//由于CLICK事件是冒泡事件，所以可以在父类注册一个点击侦听器来侦听该面板内所有子组件的点击事件，由于在该类构造函数中
		//已经将this.mouseEnble设为了false，所以只有点击该类的子显示对象才可能触发CLICK事件，
		//排除了该类的背景被点击后会派发CLICK事件产生的干扰
		this.addEventListener(MouseEvent.CLICK, onClick);
		this.addEventListener(Event.REMOVED_FROM_STAGE, onRemoved);
	}
	
	private function onClick( e:MouseEvent ):void
	{
		//停止CLICK事件冒泡以保证不会对外部的事件侦听造成干扰
		e.stopPropagation();
		var btn:CustomButton = e.target as CustomButton;
		//派发一个冒泡事件通知外部有一个按钮被点击了，被点击的按钮的名字将会被存入事件的data属性中
		//该冒泡事件将在WeahterPanelMediator中被侦听
		dispatchEvent(new CustomEvent(CustomEvent.ITEM_SELECTED, btn.name, true));
	}
	
	private function onRemoved( e:Event ):void
	{
		this.removeEventListener(MouseEvent.CLICK, onClick);
		this.removeEventListener(Event.REMOVED_FROM_STAGE, onRemoved);
	}
}
</pre>
<p>首先，该导航面板类继承自Canvas类，Canvas类是我自定义的一个继承自Sprite的类，它实现了面板的一些基本功能，包括绘制背景，设置固定 大小的功能。在导航面板的构造函数中我将它的mouseEnable设置为了false，这是为了使我在为它添加鼠标点击事件的时候，事件对象的 target属性不会指向它自身，这样就保证了我每次只有点击其内部的子显示对象才会触发CLICK事件，我点击子显示对象区域之外的背景区域都不会派发 CLICK事件了，这样就不必为每个子显示对象都注册一个CLICK事件侦听，只要一个事件侦听器就可以达到侦听点击事件的目的。这也是我常用的一个小技 巧。</p>
<p>另外，NavigationPanel的setItems方法可以让我们很方便地创建出将出现在导航面板中的按钮项目，我们只需要提供 一个满足一定格式的数组（在setItems方法的注释中有说明），导航面板就会根据该数据来创建出相应的按钮并自动调用 updateDisplayList方法来实现排版工作(CustomButton类是一个灰底黑字的按钮组件，在构造函数中传入的是一个代表按钮文字的 String对象)。</p>
<p>好了，创建完了导航面板后，我们还需要一个用来显示某个城市详细天气信息的信息面板，该面板将会在我点击导航面板中某个城市的按钮后打开，它的效果图如一开始给出的应用预览图一致。先上完整代码：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">package com.iamsevent.view.component
{
	import com.iamsevent.model.events.CustomEvent;
	import com.iamsevent.model.vo.ForcastVO;
	
	import flash.display.Loader;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.text.TextFormat;

	/**
	 * 显示天气预报详情的面板
	 * @author S_eVent
	 * 
	 */	
	public class InformationPanel extends Canvas
	{
		private var _image:Loader = new Loader();
		private var _currentInfo:ForcastView;
		private var _forcastInfo:Vector.&lt;ForcastView&gt;;
		private var _backBtn:CustomButton;
		private var _title:TextField;
		private var _forcastNum:int = 2;
		private var _waitingText:TextField;
		
		public function InformationPanel()
		{
			super();
			
			_title = new TextField();
			_title.mouseEnabled = false;
			_title.autoSize = TextFieldAutoSize.LEFT;
			_title.defaultTextFormat = new TextFormat("SimSun", 14, 0, true);
			addChild(_title);
			
			_currentInfo = new ForcastView();
			var view:ForcastView;
			_forcastInfo = new Vector.&lt;ForcastView&gt;();
			for(var i:int=0; i&lt;_forcastNum; i++)
			{
				view = new ForcastView();
				addChild(view);
				_forcastInfo[i] = view;
			}
			
			
			addChild(_currentInfo);
			_backBtn = new CustomButton("返回");
			addChild(_backBtn);
			
			_waitingText = new TextField();
			_waitingText.mouseEnabled = false;
			_waitingText.autoSize = TextFieldAutoSize.LEFT;
			_waitingText.defaultTextFormat = new TextFormat("SimSun", 20, 0, true);
			_waitingText.text = "正在加载……"
			addChild(_waitingText);
			_waitingText.visible = false;
			
			addEventListener(Event.ADDED_TO_STAGE, onAdded, false, 0, true);
		}
		
		/**
		 * 设置一个城市的天气预报信息 
		 * @param info	一个保存天气预报信息向量。其中第一个元素为当前天气状况，后四个元素为从今天起4天的天气情况
		 * 
		 */		
		public function setInfomation(info:Vector.&lt;ForcastVO&gt;):void
		{
			_currentInfo.forcastVO = info[0];
			for(var i:int=0; i&lt;_forcastNum; i++)
			{
				_forcastInfo[i].forcastVO = info[i+1];
			}
			layout();
		}
		
		/**
		 * 显示/隐藏加载文字 
		 * @param show	是否显示加载文字
		 * 
		 */		
		public function showWaitingText(show:Boolean):void
		{
			if( show )
			{
				_waitingText.visible = true;
				_waitingText.x = (this.width - _waitingText.width) / 2;
				_waitingText.y = (this.height - _waitingText.height) / y;
			}
			else
			{
				_waitingText.visible = false;
			}
		}
		
		private function layout():void
		{
			var estimateW:Number = 150;
			var estimateH:Number = 150;
			var commonY:Number = (this.height - estimateH) / 2;
			var currentX:Number = (this.width - (estimateW * (1+_forcastNum))) / 2;
			_currentInfo.y = commonY;
			_currentInfo.x = currentX;
			currentX += estimateW;
			
			for(var i:int=0; i&lt;_forcastNum; i++)
			{
				_forcastInfo[i].x = currentX;
				_forcastInfo[i].y = commonY;
				currentX += estimateW;
			}
		}
		
		private function onAdded( e:Event ):void
		{
			_backBtn.addEventListener(MouseEvent.CLICK, onClick);
			this.addEventListener(Event.REMOVED_FROM_STAGE, onRemoved);
		}
		
		private function onRemoved( e:Event ):void
		{
			_backBtn.removeEventListener(MouseEvent.CLICK, onClick);
			this.removeEventListener(Event.REMOVED_FROM_STAGE, onRemoved);
		}
		
		private function onClick( e:MouseEvent ):void
		{
			dispatchEvent(new CustomEvent(CustomEvent.CHANGE_STATE, null, true));
		}
		
		override public function set width(value:Number):void
		{
			super.width = value;
			_backBtn.x = width - _backBtn.width;
		}
		
		override public function set height(value:Number):void
		{
			super.height = value;
			_backBtn.y = height - _backBtn.height;
		}
		
		/** 信息面板左上角标题文字 */
		public function get title():String
		{
			return _title.text;
		}
		
		public function set title(value:String):void
		{
			_title.text = value;
		}
	}
}
import com.iamsevent.model.vo.ForcastVO;
import com.iamsevent.view.component.CustomButton;
import com.iamsevent.view.global.Definition;

import flash.display.Loader;
import flash.display.Sprite;
import flash.events.Event;
import flash.net.URLRequest;
import flash.text.TextField;
import flash.text.TextFieldAutoSize;
import flash.text.TextFormat;

class ForcastView extends Sprite
{	
	private var _image:Loader = new Loader();
	private var _dayTF:TextField = new TextField();
	private var _conditionTF:TextField = new TextField();
	
	private var _forcastVO:ForcastVO;
	private var _request:URLRequest = new URLRequest();
	private var _gap:int = 2;
	
	public function ForcastView()
	{
		_dayTF.defaultTextFormat = new TextFormat("SimSun", 12, 0, true);
		_conditionTF.defaultTextFormat = new TextFormat("SimSun", 12, 0);
		this.mouseChildren = false;
		_dayTF.autoSize = _conditionTF.autoSize = TextFieldAutoSize.LEFT;
		addChild(_dayTF);
		addChild(_image);
		addChild(_conditionTF);
	}
	
	public function refresh():void
	{
		_image.unload();
		
		var dayText:String = "", conditionText:String = "";
		
		if( _forcastVO )
		{
			_request.url = Definition.IMAGE_URL_PREFIX + _forcastVO.iconPath + ".gif";
			_image.load( _request );
			_image.contentLoaderInfo.addEventListener(Event.COMPLETE, onComp);
			if( _forcastVO.isCurrent )
			{
				dayText += "当前";
				conditionText += _forcastVO.temp;
				conditionText += "\n" + _forcastVO.condition;
			}
			else
			{
				dayText += _forcastVO.day;
				conditionText += _forcastVO.lowTemp + "~" + _forcastVO.highTemp;
				conditionText += "\n" + _forcastVO.condition;
			}
		}
		_dayTF.text = dayText;
		_conditionTF.text = conditionText;
		layout();
	}
	
	private function layout():void
	{
		_dayTF.y = 0;
		_image.y = _dayTF.height + _gap;
		_conditionTF.y = _image.y + _image.height + _gap;
		_conditionTF.y + _conditionTF.height + _gap;
	}
	
	private function onComp( e:Event ):void
	{
		_image.contentLoaderInfo.removeEventListener(Event.COMPLETE, onComp);
		layout();
	}
	
	/** 天气预报数据 */
	public function get forcastVO():ForcastVO
	{
		return _forcastVO;
	}

	public function set forcastVO(value:ForcastVO):void
	{
		_forcastVO = value;
		refresh();
	}
}
</pre>
<p>咋看之下代码很多，但是细细看来，其实也没多少东西。以上代码中除了信息面板之身之外还包含了一个叫做ForcastView的包外类，该类将被用以表示 每天的天气信息（包括天气图标，温度、天气描述文本），我想显示几天的天气信息，就创建几个ForcastView对象。该对象的数据提供源来自一个 ForcastVO类，该类中记录了如下几个信息：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">package com.iamsevent.model.vo
{
	/**
	 * 天气预报数据对象 
	 * @author S_eVent
	 * 
	 */	
	public class ForcastVO
	{
		/** 最低温度 */
		public var lowTemp:int;
		/** 最高温度 */
		public var highTemp:int;
		/** 天气条件 */
		public var condition:String;
		/** 当前温度（摄氏度） */
		public var temp:int;
		/** 天气图标路径 */
		public var iconPath:String;
		/** 星期几 */
		public var day:String;
		/** 该ForcastVO对象记录的是否是当前天气信息 */
		public var isCurrent:Boolean;
	}
}

</pre>
<p>当isCurrent属性为true时，ForcastView的时间部分将显示为“当前”，温度只显示当前温度；否则，时间部分将显 示对应星期几，温度会显示最高到最低温度。由于该类只会在InformationPanel中用到，我就直接把它作为包外类了。有了该类之后，我在 InformationPanel中创建了三个它的对象，一个用来表示当前天气信息，剩下两个用来表示接下来两天的天气预报信息。另外，我还创建了一个 “返回”按钮用以回到导航面板，点击它之后将会派发一个事件，该事件将会被InformationPanel的父类侦听并处理。如果要设置 InformationPanel的天气信息，调用setInfomation方法即可达到目的，如果要让我们在加载时显示等待文字，可以调用 showWaitingText方法。</p>
<p>接下来，我们需要一个来包含NavigationPanel及InformationPanel，并根据用户的交互来适时切换两个面板的显示状态。为此，我们创建了WeatherPanel类：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">package com.iamsevent.view.component
{	
	import com.iamsevent.model.events.CustomEvent;
	import com.iamsevent.model.vo.ForcastVO;
	
	public class WeatherPanel extends Panel
	{
		/** 导航状态 */
		public static const STATE_NAVIGATION:int = 1;
		/** 信息状态 */
		public static const STATE_INFORMATION:int = 2;
		
		private var _navigationPanel:NavigationPanel;
		private var _infomationPanel:InformationPanel;
	
		private var _currentState:int;
		
		public function WeatherPanel(width:Number, height:Number, 
									 backgroundColor:uint=0x000000, backgroundAlpha:Number=1,
									 title:String = "", dragable:Boolean = false)
		{
			super(width, height, backgroundColor, backgroundAlpha, title, dragable);
			
			_navigationPanel = new NavigationPanel();
			_infomationPanel = new InformationPanel();
			_navigationPanel.width = _infomationPanel.width = width;
			_navigationPanel.height = _infomationPanel.height = height;
			addEventListener(CustomEvent.CHANGE_STATE, onChangeState, false, 0, true);
			addEventListener(CustomEvent.ITEM_SELECTED, onItemSelected, false, 0, true);
			
		}

		/**
		 * 设置按钮项 
		 * @param items	按钮项数据提供源。其中的元素格式需是包含有label(按钮标签)及name(用以在查询天气时使用的名字)属性的Object对象
		 * 
		 */		
		public function setItems( items:Array ):void
		{
			_navigationPanel.setItems(items);
		}
		
		/**
		 * 设置一个城市的天气预报信息 
		 * @param info	一个保存天气预报信息向量。其中第一个元素为当前天气状况，后四个元素为从今天起4天的天气情况
		 * 
		 */		
		public function setInfomation( info:Vector.&lt;ForcastVO&gt; ):void
		{
			_infomationPanel.setInfomation(info);
		}
		
		/**
		 * 显示/隐藏加载文字 
		 * @param show	是否显示加载文字
		 * 
		 */		
		public function showWaitingText(show:Boolean):void
		{
			_infomationPanel.showWaitingText(show);
		}
		
		private function onChangeState( e:CustomEvent ):void
		{
			currentState = WeatherPanel.STATE_NAVIGATION;
		}
		
		private function onItemSelected( e:CustomEvent ):void
		{
			currentState = WeatherPanel.STATE_INFORMATION;
			_infomationPanel.title = e.data.toString();
		}
		
		/** 天气面板当前状态。可选值为WeatherPanel中以STATE开头的常量 */
		public function get currentState():int
		{
			return _currentState;
		}

		public function set currentState(value:int):void
		{
			if( _currentState != value )
			{
				_currentState = value;
				
				if( this.contains(_navigationPanel) )
					this.removeChild(_navigationPanel);
				if( this.contains(_infomationPanel) )
					this.removeChild(_infomationPanel);
				
				if( _currentState == STATE_INFORMATION )
				{
					this.addChild(_infomationPanel);
				}
				else if( _currentState == STATE_NAVIGATION )
				{
					this.addChild(_navigationPanel);
				}
			}
		}

	}
}
</pre>
<p>作为一个面板管理者，它不需要具备太多的功能，主要职责就是侦听来自子面板派发的冒泡事件并执行相应的面板显示状态切换就好了。WeatherPanel 继承自Panel类，而Panel类又继承自Canvas，因此Panel类拥有Canvas的全部功能（能绘制背景，可设置固定尺寸），并且还增加了一 个标题栏，拖拽标题栏可以带动整个面板的移动。</p>
<p>好了，看完了乏味的几个视图类之后总算等到了我们PureMVC中几员大将的登场。之前说过，一个视图模块要想与外部通讯，必须通过该视图模块外层嵌套的Mediator来代理。那么为此，我们隆重介绍一下寡人的爱将——WeahterPanelMediator。</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">package com.iamsevent.view.mediator
{
	import com.iamsevent.NotificationDictionary;
	import com.iamsevent.model.events.CustomEvent;
	import com.iamsevent.model.vo.ForcastVO;
	import com.iamsevent.view.component.WeatherPanel;
	
	import org.puremvc.as3.interfaces.INotification;
	import org.puremvc.as3.patterns.mediator.Mediator;
	
	public class WeahterPanelMediator extends Mediator
	{
		public static const NAME:String = "WeahterPanelMediator";
		
		//去掉构造函数的第一个参数，让该Mediator的名字恒定为NAME常量定义的字符串。将第二个参数定死为WeatherPanel类型，
		//让该Mediator只能关联WeatherPanel类型的对象上
		public function WeahterPanelMediator(viewComponent:WeatherPanel=null)
		{
			super(NAME, viewComponent);
		}
		
		override public function onRegister():void
		{
			weatherPanel.setItems( [{label:"北京", name:"Beijing"}, {label:"上海", name:"Shanghai"}] );
			weatherPanel.currentState = WeatherPanel.STATE_NAVIGATION;
			weatherPanel.addEventListener(CustomEvent.ITEM_SELECTED, onItemSelected, false, 0, true);
		}
		
		override public function listNotificationInterests():Array
		{
			return [NotificationDictionary.ON_GET_WEATHER];
		}
		
		override public function handleNotification(notification:INotification):void
		{
			weatherPanel.setInfomation( notification.getBody() as Vector.&lt;ForcastVO&gt; );
			weatherPanel.showWaitingText(false);
		}
		
		private function onItemSelected( e:CustomEvent ):void
		{
			sendNotification(NotificationDictionary.GET_WEATHER, e.data);
			weatherPanel.showWaitingText(true);
		}

		
		//定义此get方法以便于更加方便地拿到此Mediator所关联的WeatherPanel类型，
		//不用每次都要将viewComponent变量as成WeatherPanel类型
		private function get weatherPanel():WeatherPanel
		{
			return viewComponent as WeatherPanel;
		}
	}
}
</pre>
<p>我在关键部分都写了注释，另外，在Mediator被注册后会立即调用onRegister方法，我们可以在该方法中写一些初始化的代码，在本例中，我为其所关联的WeatherPanel类进行了以下初始化工作：</p>
<p>1.设置导航面板中只显示两个选项：北京和上海；</p>
<p>2.切换其初始化视图状态为“导航面板”显示状态</p>
<p>3.侦听导航面板中某选项被选择事件</p>
<p>在 某选项被选择事件CustomEvent.ITEM_SELECTED被派发后，WeahterPanelMediator将会派发出一个名为 NotificationDictionary.GET_WEATHER的notification，这个通知派发出去后会发生什么事情，我们尚且不管， 反正我WeahterPanelMediator只知道，我要获取天气预报的数据就必须派发这个通知出去（同时将我要获取的天气预报城市名放在 notification中携带出去）。然后等天气预报数据获取到之后会收到一个名为 NotificationDictionary.ON_GET_WEATHER的通知，我将该通知列为WeahterPanelMediator所感兴趣 的通知（在listNotificationInterests方法中列出），并在通知处理方法handleNotification中将获取到的天气数 据传递给其所关联的weatherPanel去显示。</p>
<p>接下来，我们要面对的问题是，让谁去响应WeahterPanelMediator发 出的NotificationDictionary.GET_WEATHER这个通知。之前我们说过，Proxy无法直接对notification做出 响应，那么此时我们就需要一个Command来做中介了。为此，我们创建了GetWeatehrCommand：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">package com.iamsevent.control.commands
{
	import com.iamsevent.model.proxy.WeatherProxy;
	
	import org.puremvc.as3.interfaces.INotification;
	import org.puremvc.as3.patterns.command.SimpleCommand;
	
	/**
	 * 该Command用以获取天气数据
	 * @author S_eVent
	 * 
	 */	
	public class GetWeatehrCommand extends SimpleCommand
	{
		public function GetWeatehrCommand()
		{
			super();
		}
		
		override public function execute(notification:INotification):void
		{
			//若是该Command存在对于多个notification的关联，则需要使用switch...case语句来根据
			//参数notification的名字执行不同逻辑。这里由于只存在唯一一个notification的关联所以不用
			weatherProxy.getWeather(notification.getBody() as String);
		}
		
		private function get weatherProxy():WeatherProxy
		{
			return facade.retrieveProxy(WeatherProxy.NAME) as WeatherProxy;
		}
		
	}
}
</pre>
<p>该类通过我们之前所提到过的facade.retrieveProxy方法获取到了我们用来做网络交互工作的Proxy——WeatherProxy的引 用，并在excute方法中把收到的notification（该notification名称事实上就是 NotificationDictionary.GET_WEATHER，稍后我们会在ApplicationCommand中为它和 GetWeatehrCommand注册起对应关系，若不注册，则GetWeatehrCommand永远也收不到该通知）中携带的数据，也就是我们要获 取天气预报的城市名传递给WeatherProxy的getWeather方法，WeatherProxy将会通过该方法来发送网络请求，获取对应数据。 接下来让我们一起来看看WeatherProxy类的代码，看看它内部是如何工作的：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">package com.iamsevent.model.proxy
{
	import com.iamsevent.NotificationDictionary;
	import com.iamsevent.model.vo.ForcastVO;
	import com.iamsevent.view.global.Definition;
	
	import flash.events.Event;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.net.URLRequestMethod;
	import flash.net.URLVariables;
	
	import org.puremvc.as3.patterns.proxy.Proxy;
	
	/**
	 * 天气预报Proxy，负责获取数据
	 * @author S_eVent
	 * 
	 */	
	public class WeatherProxy extends Proxy
	{
		public static const NAME:String = "WeatherProxy";
		
		private var _weatherXML:XML;
		private var _urlLoader:URLLoader = new URLLoader();
		private var _urlRequest:URLRequest = new URLRequest();
		private var _urlVar:URLVariables = new URLVariables();
		private var _apiURL:String = "http://weather.yahooapis.com/forecastrss";
		
		public function WeatherProxy()
		{
			super(NAME);
		}
		
		/**
		 * 获取某城市的天气数据 
		 * @param city	欲获取数据的城市名（拼音）
		 * 
		 */		
		public function getWeather(city:String):void
		{
			_urlVar.w = Definition.WOEID_MAP[city];
			_urlVar.u = "c";
			_urlRequest.url = _apiURL;
			_urlRequest.data = _urlVar;
			_urlRequest.method = URLRequestMethod.GET;
			_urlLoader.load(_urlRequest);
			_urlLoader.addEventListener(Event.COMPLETE, onBack);
		}
		
		private function onBack( e:Event ):void
		{
			_urlLoader.removeEventListener(Event.COMPLETE, onBack);
			_weatherXML = XML(_urlLoader.data);
			//将XML对象转换成VO数组。数组中第一项是当前天气情况，后几项是从今天开始4天的天气情况
			var forcastList:Vector.&lt;ForcastVO&gt; = new Vector.&lt;ForcastVO&gt;();
			
			//生成当前天气数据。暂时只取用以下几个标签中的数据：
			//yweather:condition	当前天气情况
			//yweather:forecast		未来两天的天气预报
			//
			//以上标签中的day和date属性分别代表当天的星期及日期。low和high分别代表当天最低和最高温度，
			//text代表天气情况，code代表天气情况对应图片名,temp代表当前温度
			var vo:ForcastVO = new ForcastVO();
			var yNameSpace:Namespace = _weatherXML.namespace("yweather");
			var itemXML:XML = _weatherXML.channel.item[0];
			var currentXML:XML = itemXML.yNameSpace::condition[0];
			vo.condition = currentXML.@text;
			vo.temp = currentXML.@temp;
			vo.iconPath = currentXML.@code;
			vo.isCurrent = true;
			forcastList[0] = vo;
			
			//生成未来4天的天气数据
			for each(var elem:XML in itemXML.yNameSpace::forecast)
			{
				vo = new ForcastVO();
				vo.day = elem.@day;
				vo.lowTemp = elem.@low;
				vo.highTemp = elem.@high;
				vo.iconPath = elem.@code;
				vo.condition = elem.@text;
				forcastList.push(vo);
			}
			
			sendNotification(NotificationDictionary.ON_GET_WEATHER, forcastList);
		}
	}
}
</pre>
<p>对于一般Http交互来说，Flash客户端使用URLRequest类就可以实现目的。我们目前需要获取的天气数据来自于<a href="http://developer.yahoo.com/weather/" target="_blank">雅虎天气API</a>， 于是我们将URLRequest的请求地址，即url属性设置为雅虎天气API的地址，将参数设置为雅虎天气API可接受的参数（u代表温度类型：f表示 华氏温度，c表示摄氏温度；w代表欲获取天气预报的城市的世界地址编号（WOEID），如果你想获取某个城市的WOEID，那么你可以在<a href="http://weather.yahoo.com/" target="_blank">雅虎天气首页</a>的城市搜索框中键入你要查询WOEID的城市名，比如：Shanghai后，在出现的下拉选项中选择正确的城市</p>
<p><img style="width: 963px; height: 519px; float: none;" src="http://www.iamsevent.com/zb_users/UPLOAD/learnPureMVC1/3.jpg" alt="" width="963" height="519" border="0" hspace="0" vspace="0"></p>
<p>之后，在打开的页面中，你会发现该页面的地址最后带了一串数字，如<a href="http://weather.yahoo.com/china/shanghai/shanghai-12712465/">http://weather.yahoo.com/china/shanghai/shanghai-12712465/</a>。 那么这串数字：12712465就是我们上海的WOEID了。我们将正确的WOEID及温度类型作为参数放入一个URLVariables对象中，之后将 该URLVariables对象作为我们URLRequest对象的data，最后调用load方法可使请求发出。在Event.COMPLETE事件的 侦听函数中，我们访问URLRequest对象此时的data属性可以得到HTTP请求的远程返回数据。雅虎天气API的返回数据是一个XML格式的数 据，其中所有标签的含义可以访问该<a href="http://developer.yahoo.com/weather/" target="_blank">API文档</a>获 知。对于本例来说，我只取了几个标签的数据，并将数据封装成为我视图层WeatherPanel可用的数据格式后，将数据放入notification中 派发出去。该通知将被视图层WeatherPanel外嵌套的WeatherPanelMediator获取并利用。至于具体怎么显示，不是我一个 Proxy对象想管的事情了。</p>
<p>好了，有了Mediator、Command以及Proxy后，我们差不多快大功告成了，最后在ApplicationCommand中，将我们之前所写的零件都配备、组装起来：</p>
<pre name="CodeLight_code" class="brush:as;mouse-over:#ff9">public class ApplicationCommand extends SimpleCommand
{
	private var _main:WeatherTest;

        ……
	
	override public function execute(note:INotification):void
	{
		//生成视图
		_main = note.getBody() as WeatherTest;
		var weatherPanel:WeatherPanel = new WeatherPanel(450, 300, 0xffffff, 1, "天气预报", true);
		_main.addChild(weatherPanel);
		weatherPanel.x = (_main.stage.stageWidth - weatherPanel.width) / 2;
		weatherPanel.y = (_main.stage.stageHeight - weatherPanel.height) / 2;
		
		facade.registerMediator(new WeahterPanelMediator(weatherPanel));
		
		//注册Command
		facade.registerCommand(NotificationDictionary.GET_WEATHER, GetWeatehrCommand);
		
		//注册Proxy
		facade.registerProxy( new WeatherProxy() );
	}
}
</pre>
<p>好了，这时若是你运行整个项目的代码，应该能够看到一个比较完整的结果了，若是不想敲代码，直接在文章顶部下载源码便是。这是一个非常简单的例子，却涵盖 了PureMVC的使用方式，整个PureMVC的运作流程，我已经在之前用一张图表示过了。在本次实践下来，我们可以体会到PureMVC的哪些优势 呢？我列出了以下几点：</p>
<p>1.通过notification机制降低了整个框架的耦合度。Mediator想要获取数据，直接发一个 notification出去即可，老子只要数据，具体怎么获取的，老子不管！老子只要结果，不要过程！反正Mediator是最屌的，Command和 Proxy都是打工仔，Command一般是作为中介的存在，而Proxy一般只负责数据获取、处理以及保管，若有需要，你可以把某些Proxy做成单 例，在整个项目中都可以随时向它们获取数据。如此明确的分工造就了PureMVC相当低的耦合度，以致于让其非常适合团队开发。每个程序员只管自己模块的 功能实现，不必关心别的模块中的代码，每个模块间通过notification通讯，非常简单。比如程序员A对程序员B说：“喂，我这边模块上有一个按 钮，按下之后要打开你做的那个面板，我该怎么办？”“哦，你发个名字叫做XXX的notification就好了……”是的，你不用关心太多事情，在需要 使用别人开发的功能时，往往在需要的时候发一个notification即可解决问题。</p>
<p>2.PureMVC是一个成熟的，并且被广泛使用的 框架。正因为使用它的人多，所以大家基本上都懂得游戏的规则，在一个公司招聘员工的时候，若新来的员工懂PureMVC的用法，他就能很快地看懂当前项目 的源码，并在其中可以快速查找、修改。最重要的是，新来的这名员工在写了新的代码之后不会随便乱放，他会根据现有的项目目录结构来安排文件放置位置。要调 用别人负责模块的功能的时候也是简单地发一条notification就可以实现。总而言之，一个熟悉PureMVC的新员工在加入一个使用 PureMVC框架进行开发的团队中时能够非常快地融入进去，这其实也是那么多公司在招聘启事上写“要求熟练掌握PureMVC”的原因。</p>
<p>光说是没有用的，列位道友还是得靠多实践，多看多用方能领悟其中之奥妙。结束语不多说了，列位中秋、国庆快乐吧！</p>
</div>
<div class="post_tags">Tags: <span class="tags"><a href="http://www.iamsevent.com/catalog.asp?tags=AS3">AS3</a>&nbsp; <br></span></div></div>