---
title: Mysql 服务启动失败解决方法
img: 
categories: SQL
tags:
  - Mysql
---

- 1

确认 sql 目录下有没有 data 文件夹，如果有就删掉。

Mysql服务启动失败解决方法
- 2

然后在 cmd 输入 mysqld --initialize，等待一段时间（这段时间就是在创建 data 文件夹），然后就再次输入 net start mysql 便可

Mysql服务启动失败解决方法