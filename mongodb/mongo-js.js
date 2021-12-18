/* var userName = 'xiaoming';
var loginTime = Date.parse(new Date());

var JsonData = {'userName':userName, 'loginTime':loginTime}

var db = connect('user');//use user

db.log.insert(JsonData);
print('log insert data success'); */

//批量插入

/* var startTime = (new Date()).getTime();
var db = connect('user');
var arr = [];
for(var i=0;i<1000;i++) {
    arr.push({id:i})
}
db.test2.insert(arr);
for(var i = 0;i<1000;i++){
    db.test.insert({id:i});
}

var runTime = (new Date()).getTime() -  startTime;
print('runtime:',runTime); */

/* var workmates1 = {
    name: 'xiaowei',
    age:18,
    gender:1,
    skills:{
        skillOne:'html+css',
        skillTwo:'javascript'
    },
    roll:new Date()
}

var workmates2 = {
    name: 'xiaoming',
    age:22,
    gender:0,
    skills:{
        skillOne:'java+web',
        skillTwo:'docker'
    },
    roll:new Date()
}

var db = connect('company');
var workmates = [workmates1,workmates2];
db.mates.insert(workmates); */


//更新数据  update修改器
// var db = connect('company');
//$set 更新
//db.mates.update({name:'xiaowei'},{$set:{'age':24}});
//db.mates.update({name:'xiaowei'},{$set:{'skills.skillOne':'html5+css3'}});
//$unset 删除
//db.mates.update({name:'xiaowei'},{$set:{age:''}});
//$inc 加减
//db.mates.update({name:'xiaowei'},{$inc:{age:-2}});
// print('update data successfully')

//应答式写入  findAndUpdate

//find gt lt ne {},{display:true} 

//$in $or $and $all


//建立索引  ensureIndex() param{}
db.user.ensureIndex({username:1})


