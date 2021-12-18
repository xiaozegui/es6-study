const path = require('path');

//extname()获取扩展名 ext：extension
let ext = path.extname('c:/a/b/c/aaa.txt');//.txt
console.log(ext);

//__dirname  return 文件所在目录
console.log(__dirname);
//__filename return 文件全路径
console.log(__filename);

//event loop  宏任务 微任务
//宏任务&微任务和异步无关  宏任务 > 微任务 
setTimeout(() => {
    new Promise((resolve,reject) => {
        console.log('promise 宏任务');
        setTimeout(() => {
            console.log('异步函数宏任务');
            resolve('1');
        }, 100);
    })
    .then(res => {//then与resolve的位置有关
        console.log('promise 微任务');//根resolve的位置有关，决定其父级宏任务
    })
    console.log('宏任务');
    //settimeout是宏任务同步任务，里面的方法是异步任务
    setTimeout(() => {
        process.nextTick()//微任务
        console.log('异步任务'); //先执行
    }, 1000);
}, 0);