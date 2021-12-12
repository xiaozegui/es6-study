console.log('b start');
var foo = 'bbb';
console.log('b end');
exports.foo = foo;

exports.add = (x = 1, y = 2) => {
    console.log(this);
    return x + y;
}
console.log(this === exports);//true  node没有全局作用域 有模块作用域exports 默认指向exports
