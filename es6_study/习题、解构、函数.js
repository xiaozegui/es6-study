/*
    js变量过程：creat创建 initialize初始化 assign赋值
    var 变量提升：create initialize
    let 变量提升：create
    function提升：creat创建 initialize初始化 assign赋值

*/

/* var x = 1;// script{x=1}
{   //temp dead zone
    let x = x;// block:{x=undefind} 报错x is not initialize
    console.log(x);
} */

/* {
    let x = 1;  //初始化 let创建变量  x=1初始化 x=2赋值
    x = 2; //assign
    console.log(x);//2
} */
//function 多了一个赋值
/* var foo;
function foo(){}
console.log(foo);//f foo()
 */
/* function foo(){}
var foo
console.log(foo) */
//!!所谓暂时死区，就是不能在初始化之前，使用变量。
/* let x;//没有明确初始化值为undefind;
console.log(x); */