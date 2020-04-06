---
title: logstash安装配置教程
lang: zh-CN
meta:
  - name: logstash
    content: logstash安装配置教程
  - name: logstash下载
    content: logstash下载
tags: 
  - ES
  - logstash
  - NoSql
date: 2020-04-05
author: chenzhiq
location: 南京
summary: logstash安装配置教程,内含百度云下载链接
---

Logstash是一个开源数据收集引擎，具有实时管道功能。Logstash可以动态地将来自不同数据源的数据统一起来，并将数据标准化到你所选择的目的地。

## 1、官网地址
`https://www.elastic.co/cn/downloads/logstash`

官网下载是真心慢，在官网下几个软件用来好几个晚上。于是这里分享到了网盘。下载后是一个**zip**压缩包

![cdn](https://cdn.jsdelivr.net/gh/moyanxiaoq/pic@master/20200406/1574579341233.png)

## 2、直接解压安装
直接将压缩包解压到你想要安装的目录里，等待文件拷贝完成即可。

![图片](https://cdn.jsdelivr.net/gh/moyanxiaoq/pic@master/20200406/1574579643981.png)

## 3、测试命令
打开cmd命令行或者使用**powershell**，切换到**logstash**的**bin**目录下，执行如下命令。
```shell
logstash -e "input { stdin { } } output { stdout {} }"
```
## 4、测试结果
启动完之后，输入一个hello测试一下，如果和下图一样表示安装成功。

![图片](https://cdn.jsdelivr.net/gh/moyanxiaoq/pic@master/20200406/1574610072215.png)

## 5、配置环境变量
为了方便启动配置环境变量，这样在任何地方打开命令行都可以识别命令，不用再去安装目录的**bin**目录下了。点击**计算机——>右键属性——>点击左侧的高级系统设置——>点击环境变量**

![图片](https://cdn.jsdelivr.net/gh/moyanxiaoq/pic@master/20200406/1574687443748.png)

## 6、路径加入path
找到**path**，将安装目录的**bin**目录填进去，我这里目录是`D:\install\logstash-7.4.2\bin`

![图片](https://cdn.jsdelivr.net/gh/moyanxiaoq/pic@master/20200406/1574687914248.png)

## 7、测试
任意一个地方打开命令行，`logstash -e "input { stdin { } } output { stdout {} }"`，启动完毕后浏览器访问`http://localhost:9600/`

![图片](https://cdn.jsdelivr.net/gh/moyanxiaoq/pic@master/20200406/1574688663540.png)

## 8、网盘下载地址
```
获取软件微信公众号【快乐学习与分享】回复：logstash
```
 
![图片](https://cdn.jsdelivr.net/gh/moyanxiaoq/pic@master/20200406/code.png)


<style lang="stylus" scoped>
  p
    margin 20px 0

  p img
    text-align center;
    margin-left 50%;
    transform translateX(-50%);
</style>