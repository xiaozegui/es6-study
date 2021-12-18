//1、引入http核心模块，commonjs语法
const http = require('http');//核心模块，编写创建服务器
const fs = require('fs');

//使用node可以很轻松构建一个web服务器
//2、使用http.creatServer()方法创建一个服务器
let server = http.createServer();//返回一个服务器server实例

//3、服务器：提供对数据的服务
//发请求 接收请求 处理请求 发送响应
//注册request请求事件，当客户端发送request请求过来，自动触发request请求事件
//request请求参数：req res
//request请求对象：获取clent请求信息，req.method req.url req.headers
//response响应对象:发送响应信息
server.on('request', (request, response) => {
    console.log('receive client request', request.method, request.url);//url以/开头 /login /register

    //5、response响应
    //response对象方法write()可以用来给client发送响应数据
    //write()可以使用多次，但是最后要用end结束响应，否则客户端会一直等待
    /* response.write('hello');
    response.end(); */
    //服务器端默认发送的charset utf-8，中文操作系统GBK，浏览器默认使用系统GBK，乱码
    //解决方法
    /* response.setHeader('Content-Type', 'text/plain; charset=utf-8');//text/html解析标签
    response.end('hello 世界') */
   /*  if (request.url === '/') {
        //实现alpha服务器功能  网页都是字符串 浏览器能识别这些字符串
        fs.readFile('../static/view/index.html', (err, data) => {
            if (err) {
                response.setHeader('Content-Type', 'text/plain; charset=utf-8');
                response.end('read file fail,please try again later');
            }
            //data默认是二进制buffer，可以通过tostring()转换为字符串
            //res.end()支持两种类型格式，二进制和字符串
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.end(data.toString());
        });
    }else if(request.url === '/img') {
        fs.readFile('../static/imgs/name.png', (err, data) => {
            if (err) {
                response.setHeader('Content-Type', 'text/plain; charset=utf-8');
                response.end('read file fail,please try again later');
            }
            //data默认是二进制buffer，可以通过tostring()转换为字符串
            //res.end()支持两种类型格式，二进制和字符串
            response.setHeader('Content-Type', 'image/png');//图片不需要指定编码
            response.end(data);//图片不需要toString
        });
    } */
    
    let url = request.url;
    //当浏览器收到html响应内容后，从上到下依次解析，解析过程发现src或href（除了a）标签：link script img iframe video audio，
    //浏览器会对这些静态资源自动发起请求
    //在服务器中，/是url根路径的意思，客户端浏览器会自动将前缀补上ip+port
})

//4、绑定端口号，启动服务器
server.listen(3000, () => {
    console.log('server start success,you can access by', 'http://127.0.0.1:3000/');
});

