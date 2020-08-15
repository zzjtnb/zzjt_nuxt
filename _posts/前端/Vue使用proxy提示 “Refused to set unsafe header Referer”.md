---
title: Vue使用proxy提示 “Refused to set unsafe header "Referer"”
img: 
categories: 前端
tags:
  - Vue
  - 跨域
  - axios
---

[![](https://upload.jianshu.io/users/upload_avatars/15883220/55322afa-f3f8-4c1d-be93-fb79efb75756.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp)](https://www.jianshu.com/u/ad38f4ff483c)


在调用另一个源节点接口的时候，报错提示  
“Refused to set unsafe header "Referer"

![](http://upload-images.jianshu.io/upload_images/15883220-314bd46f9f21b079.png)

报错信息

经过查询发现是因为浏览器拒绝人为设置伪装的 referer  
正巧不巧，在用 vue 的 proxy 来进行跨域处理，由此记录一下用法。

1.  这是在调用 axios 的方法

```js
method:'post',
    url:"/api/v1/home/page",
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Referer':'https://xxxxx.com'
    }
```

显然这样子浏览器处于安全考虑是不允许发送出去的

2.  这里是 vue-config.js 文件的配置

```js
module.exports = {
    publicPath: './',  
    lintOnSave: true,
    devServer:{
        proxy:{
            "/api":{                        //设置跨域变量代号
                target:"xxxx.com/",         //你想要代理的目标源链接
                changeOrigin:true,          //开启代理
                pathRewrite:{               //设置二级
                    "^/api": "/",           
                    "^/api2": "/body"
                },
                headers:{//重点在这里，添加配置项 headers 就可以了
                    'Referer':'https://xxxx.com'
                }
            }
        }
    }
}
```

3. 最后成功地拿到了数据

![](http://upload-images.jianshu.io/upload_images/15883220-191c62bfe4ad07e9.png)

完成


[![](https://upload.jianshu.io/users/upload_avatars/15883220/55322afa-f3f8-4c1d-be93-fb79efb75756.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp)](https://www.jianshu.com/u/ad38f4ff483c)
