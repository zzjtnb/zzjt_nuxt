---
title: 使用ffmpeg合并视频
img: 
categories: 资料
tags:
  -  ffmpeg
---

# 故事的背景是这样的：
有三个素材视频，名称分别为1.mp4、2.mp4、……\3.mp4。
然后我就去下载了ffmpeg。
ffmpeg下载地址：https://ffmpeg.zeranoe.com/builds/
并且将解压后的文件的bin目录的位置加入到了环境变量PATH中。

然后在视频文件所在目录下新建一个文件**filelist.txt**，内容如下：
```json
file '1.mp4'
file '2.mp4'
file '3.mp4'
```
注意事项：视频文件名不要有中文
在命令行执行如下命令：
`ffmpeg -f concat -i filelist.txt -c copy output.mp4`
然后，一个合并好的 output.mp4 文件就生成了！