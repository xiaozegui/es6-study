// let fn = 10;
// {
//     // console.log(fn());
//     const fn = function(){
//         return 1;
//     }
//     console.log(fn);
// }
/* 块级作用域函数提升学习：块级作用域与函数作用域一样，进入块级作用域会有函数提升，函数不会提升到顶层，
    for若使用let声明循环条件，视为一父级块作用域，循环体为子级块作用域。
*/
/* let fn = 10;
{
    console.log(fn());
    let n = 10;
    console.log(fn());
    function fn(){
        return 1;
    }
    console.log(fn);
} */
// let a;
// function A(n1,n2) {
//     console.log('A');
//     function B(b,c) {
//        console.log(b+c+n1+n2); 
//     }
//     B(3,4);
// }
// A(1,2);
// let obj ={
//     nym:'a',
//     func:function(){
//         console.log(this);
//     }
// }
// obj.func();
