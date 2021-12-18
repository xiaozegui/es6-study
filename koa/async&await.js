//await 主要接收promise，也可以接收普通返回值
/* function some() {
    return 'word'
}
async function fn() {
    return 'hello'
} *///加了async相当于包裹promise异步容器，返回一个promise对象
//await ==async await
/* const p = fn();
console.log(p); */

/* async function test() {
    let v1 = some();
    let v2 = fn();
    console.log(v1, v2);
    let v3 = await some();
    let v4 = await fn();
    console.log(v3, v4);
}
test(); */

/* function takelongtime() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('take long time')
        }, 2000);
    })
}

async function test(params) {
    const v = await takelongtime();
    console.log(v);
}
console.log(test()); */

/* async function fn() {//加async相当于加了promise异步容器
    console.log('宏任务');
    return 'solve' //相当于 resolve 微任务 
}
fn().then(res => console.log(res));//微任务
console.log('后执行先返回'); */

/* async function fn(param) { 
    if(param) {
        return 'true'//promise.resolve('true')
    }else{
        throw 'error'//promise.reject('error')
    }
}
console.log(fn(false).catch(err => console.log(err))); */

function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve(2 * num)
        }, 2000);
    } )
}
//加async 生成一个promise 为了异步
//await 相当于执行了promise.then() 耗时操作异步 多个耗时操作
//所以为了总体异步外面套个promise形成异步
//Promise特点——异步无等待
//await会暂停当前async function的执行
//这就是 await 必须用在 async 函数中的原因。async 函数调用不会造成阻塞，
//它内部所有的阻塞都被封装在一个 Promise 对象中异步执行
async function test() { //await之前的先执行
    console.log(3);
    let n = await doubleAfter2seconds(10);
    console.log(n);
    console.log('宏任务');
    return true;
}
test().then(d => console.log(d)).catch(e => console.log(e));
console.log('1');


/* function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log('s1');
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log('s2');
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log('s3');
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
async function doIt() { //异步函数
    console.log(2);
    console.time('doIt');
    let time1 = 300;
    let time2 = await step1(time1);//将Promise对象resolve(n+200)的值赋给time2
    let time3 = await step1(time2);
    let result = await step1(time3);
    console.log(`result is ${result}`);
    console.timeEnd('doIt');
    return ;//await语法糖阻塞 return（相当于resolve）== 异步函数了resolve
}
console.log('1');
console.log(3);

doIt(); */