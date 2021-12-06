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
//参考资料:https://zhuanlan.zhihu.com/p/28140450 
//hositing 变量提升

/* function fn(x,y){
    x=x||1;
    y=y||2;
    console.log(x+y);
    var a = typeof(arguments[0]) !== 'undefined'? arguments[0]:1;
    var b = typeof(arguments[0]) !== 'undefined'? arguments[1]:2;
    console.log(a+b);
}
fn();
fn(5,6);  //先形参赋值
fn(null,7);//7 null:false 
fn(0,5) //6 falsey(虚值)
*/ 
//作用域：在看到{}中有let、const、function才会把其当做块级作用域。函数提升，不会提升到顶层作用域
/* {   
    console.log(fn);
    function fn(){
        
           //block：{fn:fn(),n:undefined}
       
    }
    let n;
} */
//函数执行先形参赋值，再变量提升
//参考资料：https://zhuanlan.zhihu.com/p/161274775
//预编译先函数提升再变量提升 参考《你不知道的javascript》

//es6函数默认值

/* function fn(x=1,y=2) {
    console.log(x+y);
}
fn();
fn(5,6);  //先形参赋值
fn(null,7);//7 null:false 
fn(0,5) //6 falsey(虚值) */ //底层是使用上面a,b做法
//
/* let x = 1;
function fn(y = x) {//let x暂时性死区，x->父级作用域找
    let x = 2;
    console.log(x,y);
} */
/* let x = 1;
function fn(x = 2) {
    let x = 2;//uncaught syntaxerror x has been declare
    console.log(x);
} */
/* let x = 1;
function fn(x = x) {//暂时性死区
    console.log(x);
}
fn(); */
/* function f1(x = 1, y=()=>{x=10;} ){
    y();
    console.log( x );
    let x;
}
f1(); */
//var 变量提升为undefined 默认值为1
/* function f2(x = 1, y = ()=>{ x = 10;} ){
    y();
    console.log( x );//10
    var x = 'abc';
}
f2(); */

/* var w = 1,z = 2;
function fn(x = w + 1, y = x + 1, z = z + 1) {//cannot access z before initialize
    console.log(x,y,z);
} */
//fn的参数有默认值产生参数作用域，函数的参数可视为let声明，let x = x ，x没有initialize报错。
//特例：函数里面不能再使用let声明相同的参数变量,报错 has declare。
/* var w = 1,y = 2;
function fn(x = w + 1, y = x + 1) {
    console.log(x,y);//2 3
}
fn() */
//函数参数块级作用域可以访问父级作用域（script or window）
/* let a = 99;
function foo(b = a + 1) { //let b = 99 +1 =100   
    console.log(b); //
}
foo(); //100
a = 100;
foo();//101   默认参数为表达式，有惰性求值 */ 

/* let a = 99;
function foo(b = 99, a = b + 1) { //let b = 99 +1 =100   函数体作用域可以访问函数参数作用域
    console.log(a,b); //
}
foo(); //100 */

//解构

//模式匹配（结构化赋值）
/* 
    1、等号两边结构相同
    2、解构失败 值少了，变量多了 默认赋值为undefined
    3、不完全解构  变量少了，值多了
    4、解构赋值可以设置默认值 // undefined时赋值默认值，null不赋默认值
*/
/* let [a, b, c] = [1, 2, 3];
let [a, b, c, [d, e], [f, g]] = [1, 2, , [, 5], [6, 7]];
let [a, , c, [, e], [f, g]] = [1, 2, 3, [4, 5], [6, 7]];
let [a = 6] = [1];//a = 1
let [a = 6] = [];//a = 6
let [a = 1, b = 2] = [2,null];// a = 2, b = null
function num() {
    return 10;
}
let [a = num()] = [1]; //a = 1
let [a = num()] = []; //a = 10

let [x = 1, y = x] = [] // x = 1,y = 1 */

//let [x = y, y = 1] = []; //TDZ

//es5对象创建
const obj  = {};
const obj1 = new Obeject();//option:{}
const obj2 = Object.create(null);//option:{} 指定__proto__ = null
//es5对象的增删改查
obj.name = '张三';
obj.name = '李四';//或者obj['name'] 对象的属性值为字符串或者symbol，不是字符串的自动转为字符串
obj.name;
delete obj.name;
