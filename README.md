# keihuan-portal-site
丹东科环集成墙板有限公司 门户网站

## 技术方案

1. 纯静态网站,传统页面跳转
1. BootStrap + JQuery + Less + es6
1. 使用[ejs](http://ejs.co/)组织项目结构，配合webpack使用[ejs-loader](https://github.com/okonet/ejs-loader)
1. webpack html插件生成html，静态文件名称使用hash，解决缓存问题

## 构建
便于自动构建，每个页面为src目录下一个文件夹

命名规则为：

1. index.html
1. style.less
1. script.js
1. 其他图片等
