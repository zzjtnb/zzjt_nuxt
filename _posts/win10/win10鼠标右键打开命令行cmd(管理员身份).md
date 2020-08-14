---
title: win10鼠标右键打开命令行cmd(管理员身份)
img: 
categories: win10
tags:
  - win10
  - cmd
---

# 添加到注册表
将下面命令保存为reg文件：
```bash
Windows Registry Editor Version 5.00

[-HKEY_CLASSES_ROOT\Directory\shell\runas]

[HKEY_CLASSES_ROOT\Directory\shell\runas]
@="命令提示符(管理员)"
"HasLUAShield"=""

[HKEY_CLASSES_ROOT\Directory\shell\runas\command]
@="cmd.exe /s /k pushd \"%V\""

[-HKEY_CLASSES_ROOT\Directory\Background\shell\runas]

[HKEY_CLASSES_ROOT\Directory\Background\shell\runas]
@="命令提示符(管理员)"
"HasLUAShield"=""

[HKEY_CLASSES_ROOT\Directory\Background\shell\runas\command]
@="cmd.exe /s /k pushd \"%V\""



[-HKEY_CLASSES_ROOT\Drive\shell\runas]

[HKEY_CLASSES_ROOT\Drive\shell\runas]
@="命令提示符(管理员)"
"HasLUAShield"=""

[HKEY_CLASSES_ROOT\Drive\shell\runas\command]
@="cmd.exe /s /k pushd \"%V\""



[-HKEY_CLASSES_ROOT\LibraryFolder\background\shell\runas]

[HKEY_CLASSES_ROOT\LibraryFolder\background\shell\runas]
"HasLUAShield"=""
@="命令提示符(管理员)"

[HKEY_CLASSES_ROOT\LibraryFolder\background\shell\runas\command]
```
保存 文件名为 Add_Open_Command_Window_Here_as_Administrator.reg 
然后双击执行就可以了。

卸载
类似上面的，执行下面注册表命令就可以了：

```bash
Windows Registry Editor Version 5.00

[-HKEY_CLASSES_ROOT\Directory\shell\runas]

[-HKEY_CLASSES_ROOT\Directory\Background\shell\runas]

[-HKEY_CLASSES_ROOT\Drive\shell\runas]

[-HKEY_CLASSES_ROOT\LibraryFolder\background\shell\runas]
```