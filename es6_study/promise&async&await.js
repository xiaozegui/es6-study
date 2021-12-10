 const fs = require('fs');
 const co = require('co');
/*
let promise = new Promise((resolve, reject) => {//promise是异步容器
    fs.readFile('../nodejs_study/fs.js', 'utf-8', (err, data) => {
        if (err) {
            reject(err);
            return;//不太清楚
        }
        resolve(data)
    })
});
promise.then((data) => {
    promise.then((data) => { console.log(data); });//data是上一个作用域data
    console.log(data);
}, (err) => {
    console.log(err);
})*/


//微任务队列 异步队列 宏任务（当前宏，同步任务）> 微任务 > 异步任务
/* let promise = new Promise((resolve, reject) => {
    console.log('synchrom');
    resolve('没有异步代码调用的情况');
});
setTimeout(() => { console.log('间隔调用'); }, 0)
promise.then((data) => { console.log(data); });
console.log('sychrom end'); */
/*
    synchrom
    sychrom end
    没有异步代码调用的情况
    间隔调用
*/

//resole reject  静态方法（构造函数上的方法）
/* let p1 = Promise.resolve(1);
let p2 = Promise.reject(2);
p1.then((data) => {console.log(data);});//1
p2.then(() => {}, (err) => {console.log(err);});//2
p2.catch((err) => {console.log('err+', err);})//2 只关心reject用catch */

//thenable对象
/* let p1 = Promise.resolve({a: 1});
let p2 = Promise.reject(2);
p1.then((data) => {console.log(data);});//{a: 1}
p2.catch((err) => {console.log('err+', err);}) */

/* let obj = {
    then(resolve, reject) {
        resolve(11);
    }
}
let p1 = Promise.resolve(obj);
p1.then((data) => {
    console.log(data);//11
}) */

//thenable对象默认调用then方法
/* let obj = {
    then(resolve, reject) {
        reject('reject');
    }
}
let p1 = Promise.resolve(obj);//改为reject不会有默认调用then方法
p1.then((data) => {
    console.log(data);//11
}, (err) => {
    console.log('err+', err);//reject
}) */

/* Promise.resolve().then(() => {
    console.log('1');
    setTimeout(() => {console.log('2');}, 0)
})
setTimeout(() => {
    console.log(3);
    Promise.resolve().then(() => {
        console.log(4);
    }, 0)
}) */
/* 1 3 4 2  */

//promise链式调用
/* let p1 = new Promise((resolve, reject) => {
    resolve(1);
}) */
/* p1.then(res => console.log(res)).//1  then返回一个promise  没有返回值默认返回 resolve（undefined）
then(res => console.log(res+1)).//NaN
then(res => console.log(res+1))//NaN */

/* p1.then(res => res + 1).//resolve(2)
then(res => res + 1).//resolve(3)
then(res => res + 1)//resolve(4) */

//链式调用具有穿透性 所以错误在最后用catch then默认返回一个promise
/* p1.then((res) => {
    console.log(res);
    return Promise.reject(10)
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
}) */

/* let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    },1000) 
}) */
/* p1.then(res => res + 1);//11
p1.then(res => res + 1);//11
p1.then(res => res + 1);//11

p1.then(res => res + 1)//Promise.resolve(11)
.then(res => res + 1)//resolve(12)
.then(res => res + 1)//resolve(13) */

/* p1.then(res => console.log(res))//1
.then()//忽略
.then()//忽略
.then((res) => {console.log(res);})//undefined
.catch((err) => {console.log(err);}) */
//rest运算符 收集与扩展
function promiseify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args,(err, data) => {
                if(err){
                    reject(err);
                    return;
                }
                //console.log(data);
                resolve(data);
            })
        })
    }
}
let readfile = promiseify(fs.readFile);
/* let p1 = readfile('../static/classes', 'utf-8');
p1.then((res) => readfile(res, 'utf-8'))
.then(res => readfile(res, 'utf-8'))
.then(res => console.log(res))
.catch(err => console.log(err)) */

function* read() {
    let value1 = yield readfile('../static/classes', 'utf-8');
    //console.log(value1);
    let value2 = yield readfile(value1, 'utf-8');
    //console.log(value2);
    let value3 = yield readfile(value2, 'utf-8');
    return value3;
}
//async包含生成器+co模块
async function readasync() {
    let value1 = await readfile('../static/classes', 'utf-8');
    //console.log(value1);
    let value2 = await readfile(value1, 'utf-8');
    //console.log(value2);
    let value3 = await readfile(value2, 'utf-8');
    return value3;
}
let p = readasync()
.then(res => {
    console.log(res);
})

/* co(read()).then(res => {
    console.log(res);
}) */
//执行器
/* let iter = read();
function exec(iter) {
    return new Promise((resolve, reject) => {
        let next = function(data) {
            let {value, done} = iter.next(data);
            if(done){
                resolve(data);
            }else{
                value.then(val => {
                    // console.log(val);
                    next(val);
                }).catch(err => console.log(err));
            }
        }
        next();
    });
}
let p = exec(read());
p.then(res => {
    console.log(res);
})
 */
/* let {value,done} = iter.next();
value.then(val1 => {
    let {value, done} = iter.next(val1);//赋值给value1
    value.then(val2 => {
        let {value, done} = iter.next(val2);
        value.then(val3 => {
            let {value, done} = iter.next(val3);
        });
    }); 
}) */
