//ES5 类
/* const Hello = function (a, b) {
    this.a = a;
    this.b = b;
    return this
}
Hello.prototype.print = function () {
    return this.a + this.b;
}
const hi = new Hello('hello', ' word');
console.log(hi.print()); */

//ES6 class类
/* class Hello {    //constructor ==function  method==constructor.prototype.method
                 //static method == constructor.method
    constructor(a, b) { //constructor必须有，没有默认空函数
        this.a = a;
        this.b = b;
    }//没有逗号
    print() {
        return this.a + this.b;
    } //所有方法enumerable==false
}
const hi = new Hello('hello', ' world');
console.log(hi.print());
 */

class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = `rbg(${~~Ball.rpFn([55,255])}, ${~~Ball.rpFn([55,255])}, 
            ${~~Ball.rpFn([55,255])}`;
    }
    static rpFn(arr) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        return Math.random() * ( max - min ) - min;
    } 
}
/* class SuperBall extends Ball {   //相当于Ball

} */
class SuperBall extends Ball {
    constructor(x, y, r) {
        //Ball.call(this, x, y, r);//es5
        super(x, y, r);//执行父类的构造函数
    }
    fn() {
        super.rpFn([]) //super指向父类的原型对象
    }
}