# 移动端的小说网站
***

其包含了从数据获取，数据库设计，服务器搭建，后台模板渲染的前后端开发流程。

## 依赖
***

* mongodb

* nodejs

* express

* mongoose

* phantomjs 

## 安装
***

* git clone git@github.com:qingjing246/m-book-web.git

* 下载 [phantomjs](http://phantomjs.org/)设置为环境变量
* 下载安装 [mongodb](www.mongodb.org/) 

* 创建数据库`use book`
    
* 再分别创建两个集合 `db.createCollection(bookinfo), db.createCollection(bookcontent)`

* `npm install`
    
    
## 运行

### 数据获取
***

* `cd data`

* 在loadData.js里设置url地址

* 执行`phantomjs loadData.js`

### 运行服务器
***

* `npm start`

## 项目介绍
### 数据库
***

利用phantomjs爬取网站小说的内容，再在phantomjs里面触发二级任务，把爬取的信息存入mongodb里面。

### 服务器
***

使用nodejs + express框架构建服务器，利用express-router实现路由跳转，ejs后台模板渲染，mongoose操作数据库
