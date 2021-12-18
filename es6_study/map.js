//map是hash结构[键：值]对
//map 与 object对比 ： map==值：值  obj==字符串：值  map比obj更完善

//创建map
const m = new Map([
    ['a','1']
])//params [[]]二维数组
console.log(m);

//map 类属性
console.log(m.size);

//map 类方法
//set(key, value) 添加或更新键值对  返回map 链式操作
m.set('b', 2);
m.set('cc', 2);
console.log(m);
//get(key) //返回值 若key不存在return undefined
console.log(m.get('a'));
m.get('c');//undefined
//delete(key) return boolean
m.delete('cc')
//has(key)  //return boolean
m.has('cc');
//clear()
//keys()  return keys iterator
m.keys()
//values() return values iterator
m.values()
//entries() return key:value iterator
m.entries()
//forEach() 遍历
m.forEach(r => console.log(r));
//主要事项
m.set(NaN,1) //NaN 非数值  属于Number  数值/非数值==NaN
m.set(NaN,2)//层叠  NaN被认为是相同的key
m.set({},1)
m.set({},2) // {} !== {} true

