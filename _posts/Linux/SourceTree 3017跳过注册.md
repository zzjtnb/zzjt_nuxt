---
title:  SourceTree 3.0.17跳过注册
img: 
categories: Linux
tags:
  -  SourceTree

---

个人版本的跳过注册方式已经无效，需要下载企业版本下载地址：https://www.sourcetreeapp.com/enterprise首次点击msi进行安装 （当前最新版SourcetreeEnterpriseSetup_3.0.17.msi）
![](https://upload-images.jianshu.io/upload_images/16496299-cd7cb57ba43ac72c.png)
![](https://upload-images.jianshu.io/upload_images/16496299-6798c28cc45930b3.png)
![](https://upload-images.jianshu.io/upload_images/16496299-a7378f6cbe703f9b.png)
![](https://upload-images.jianshu.io/upload_images/16496299-87506f3ae3cb1b25.png)
![](https://upload-images.jianshu.io/upload_images/16496299-cf9c5eb5cb53fb5f.png)
然后找到在 %programfiles(x86)%\Atlassian\Sourcetree 目录下找到SourceTree.exe 运行后会出现注册界面
![](https://upload-images.jianshu.io/upload_images/16496299-f943b4b3c51db332.png)
关掉sourcetree 打开%LocalAppData%\Atlassian\SourceTree新建文件：
# accounts.json
内容代码：
```json
[ {  
	"$id": "1",
	  "$type": "SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity",
	  "Authenticate": true,
	  "HostInstance": {   
		"$id": "2",
		   "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount",
		   "Host": {    
			"$id": "3",
			    "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount",
			    "Id": "atlassian account"   
		},
		   "BaseUrl": "https://id.atlassian.com/"  
	},
	  "Credentials": {   
		"$id": "4",
		   "$type": "SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account",
		   "Username": "",
		   "Email": null  
	},
	  "IsDefault": false 
}]
```

如图：
![](https://upload-images.jianshu.io/upload_images/16496299-f8e98d62abce4343.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/507/format/webp)
然后在运行%programfiles(x86)%\Atlassian\Sourcetree\SourceTree.exe即可

本文参考：https://www.cnblogs.com/wswind/p/9921549.html


Mac使用sourcetree跳过注册
打开sourcetree 
关闭sourcetree 
命令终端输入
`defaults write com.torusknot.SourceTreeNotMAS completedWelcomeWizardVersion 3 
`
打开sourcetree即可跳过登录


