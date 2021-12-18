/* let Person = (function() {//函数作用域  闭包 p被引用
    let male = Symbol('male')
    //let female = Symbol('male') //两者不相等
    function p(name, age, gender) {
        this.name = name;
        this.age = age;
        this[male] = gender;
    }
    p.prototype.getGender = function() {
        return this[male];
    }
    return p
})()

const p = new Person('大雄', 18, '男');
console.log(p);//gender只能通过getGender访问，因为Symbol是未知的
console.log(p); */

let s1 = Symbol();
let s2 = Symbol();
s1 === s2 //false
//为了识别 Symbol 引入参数 symbol(param)
let s3 = Symbol('s3');//param 字符串是descript
let s4 = Symbol('s4');
console.log(s3, s4);
console.log(Symbol('s5') === Symbol('s5'));//false desc没有意义的
console.log(Symbol('s6').toString());//symbol(s6)字符串
console.log(!!Symbol());//Synbol()做判断true 
//Symbol('s7') + '' //报错 symbol不能和任何类型做任何运算

/* let yyy = Symbol('yyy');
const obj = {}
obj[yyy] = 1;
console.log(obj[yyy]); */

let yyy = Symbol('yyy');
const obj = {
    [yyy]: 1,  //不能 for in 循环遍历
    [Symbol()]: 2//不能访问
}
obj[yyy]
//通过Object.getOwnPropertySymbols()获取Symbol
let s = Object.getOwnPropertySymbols(obj);
console.log(obj[s[1]]);//访问