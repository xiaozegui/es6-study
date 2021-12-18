//proxy 代理  增强对象和函数方法  生命周期  钩子函数 函数预处理

/* let obj = {
    add(val) {
        return val + 10;
    },
    nm: 'hello'
}

const proxy = new Proxy(obj, {
    //get set apply
    get(target, key, property) {
        console.log('handle get method');
        console.log(target, key);
        return target[key];
    },
    set(target, key, value, receiver) {
        console.log('handle set method');
        console.log(`setting ${key} == ${value}`);
        return target[key] = value;
    }
}) */
/* console.log(proxy.add(1));//get
console.log(proxy.nm);//get
proxy.nm = 'world';//set
console.log(proxy.nm);//get */

let fn = function() {
    return this.name
}
const obj = {
    name:'hello',
}
const handleMethod = {
    apply(target, ctx, args){
        console.log('handle apply ');
        return Reflect.apply(...arguments);
    }
}
const pro = new Proxy(fn, handleMethod)
console.log(pro(1,3,4));



