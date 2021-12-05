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




