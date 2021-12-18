//引包
const express = require('express')
//创建服务器 http.creatServer()
const app = express();
//请求监听，触发回调
/* 
    server.on('request',(req, res) => {req.url})
    createServer((req, res) => {req.url})
*/
//开放目录public static
app.use('/static/public/', express.static('../../static/public/'))
app.use('/staic/', express.static('../../static/'))

//服务器收到get请求，触发callback
app.get('/', (req, res) => {
    //res.end('hello express')  res.write('hello')
    res.send('hello express')
})
//server.listen()
app.listen(3000, () => {
    console.log('server start success,you can access by', 'http://127.0.0.1:3000/');
})