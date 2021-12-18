const fs = require('fs');
const http = require('http')
const template = require('art-template');
const url = requeir('url');

//让客户端重定向：状态码设置302 临时重定向 响应头location
//301 永久重定向  cache disk 不请求服务器直接重定向
//commonjs 不是挂载方式为exports重新赋值对象：需要使用module.exports
//在node中，模块默认有module对象，module默认有exports对象成员，exports==模块作用域this {}
/* 
    module = {
        exports: {

        }
    }
    return module.exports
*/
//模块加载机制：优先从缓存（已加载模块不会重复加载） 核心模块 路径模块 第三方模块
//require('xxxx')  node_modules/xxxxx/package.json main:index.js  main没有则默认备选项index.js
//找不到就进入上一级目录查找node_modules 查找直到磁盘根目录的node_module,再无则报错
http.createServer((req, res) => {
    let reqUrl = req.url;
    let urlobj = url.parse(reqUrl, true);
})
.listen(3000, () => {
    console.log('server start success,you can access by', 'http://127.0.0.1:3000/');
})