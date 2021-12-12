//require
//exports
/* 
    node中三种模块：
    具名的核心模块：fs http path os ...
    用户自己编写的文件模块：require（文件路径）必须相对路径 ./不能省略
    node 没有全局作用域.只有模块作用域（文件作用域：内部访问不到外部，外部访问不到内部
*/
/* var foo = 'aaa'//
function add(x = 1, y = 2) { //b.js中不能调用add(模块作用域)
    return x + y;
}
console.log('common start');
require('../static/b.js')//可以省略后缀名js，立即执行，类似递归
console.log('common end');
console.log(foo);//aaa  b.js中不会覆盖 */

//加载与导出
//require的两个作用：1、加载文件模块并执行里面的代码 2、拿到被加载文件对象导出的接口对象
//文件对象（模块）都提供了一个导出对象：exports
//require返回值exports，默认是空对象{}
const b = require('../static/b');
//console.log(b);//{}
console.log(b.add());



