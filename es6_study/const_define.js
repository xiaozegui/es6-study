//常量定义必须赋值，example：const n;n=10将报错
/* const n = 10; */
//暂时性死区问题1：a is not defined   block:{a:undefind}
/* {
    const a = 12;
}
console.log(a); */
//problem2：Cannot access 'a' before initialization，es6在运行前会先检查机制
/* {   
    console.log(a);
    const a = 12;
} */
//uncaught syntax error:'a' has already been declared不能重复声明，无变量提升
/* const a = 10;
const a = 10; */
//原始数据类型：stack   引用类型：heap
//Object.freeze seal preventExtention 逐渐递减
// var arr = new Array(5).fill(0);
// Object.freeze(arr);
// Object.seal(arr); //seal:密封
// Object.preventExtention(arr);
//freeze  writable:false
//seal  writable:true
//preventExtention  writable:true
// arr[0] = 1;
//freeze  configurable:false
// delete arr[0];
//freeze  extentable:false
// arr.push(1);
// console.log(arr);
/* 
    顶层对象：在浏览器窗口：window  node:global  
    es5中var声明的变量与window属性有映射机制
*/
// var n = 1; //window.n = 1
// b = 2;//window.b = 2  写错直接挂window上
// console.log(n);

/* 
    let const class 产生块级作用域 ，不作顶层对象的属性，没有映射机制
*/



