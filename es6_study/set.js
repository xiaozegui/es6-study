/* 
    类似数组，值无序
    无重复值
*/

let s = new Set();//params array
s.add(1);
console.log(s);

//set property
s.size;
//set class method
//add()  return set实例 链式添加/操作
s.add(2).add(3).add(4);
console.log(s);
//delete() return boolean
s.delete(1);
//has() return boolean
s.has(2);
//clear() 清除所有数据
//遍历set方法
//keys()  //返回key的遍历器
console.log(s.keys()); 
//values() //返回value的遍历器
console.log(s.values());
//entries() //返回键值对的遍历器
console.log(s.entries());//set 键和值相同的特点
//forEach() //数组的forEach相同
s.forEach(item => {console.log(item);})


let arr1 = [1,2,3,4,5,5,6,7,6,7];
let s1 = new Set(arr1);
let arr2 = [...s1]//可迭代
console.log(arr2);