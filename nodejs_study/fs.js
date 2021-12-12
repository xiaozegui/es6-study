//node中js具有操作文件的权限
//fs是filesystem的简写，核心模块 example：fs.readFile
//commonjs引入核心模块fs，提供文件操作的全部api
let fs = require('fs')
//回调函数参数：err,data  nodejs错误优先原则
//let that = this; //{} fs.readFile() 函数调用产生执行上下文 
//将=>fn当做参数this，this指向父级作用域this，执行进入函数才产生作用域与执行上下文

//读文件
//success：data：数据对象 err：null
//faith：data：undefined err：失败对象
/* fs.readFile('../static/classes',  (err, data) => {
    //回调函数从代码底层找执行上下文
    //=> 找函数定义时的作用域指向的this（父this）
    // console.log(this === that);//true
    if(err) {
        console.log('read file fail');
        return;
    }
    console.log(data);//二进制数据 <Buffer 2e 2e 2f 73 74 61 74 69 63 2f 78 69 61 6f 6d 69 6e 67>
    console.log(data.toString());//toString转换
}) */

//写文件
//path:文件路径
//content：内容
//callback:回调函数
//success err:undefined   fail err:error错误对象
fs.writeFile('../static/hello.md','content', err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('success');
    console.log(err);
})


