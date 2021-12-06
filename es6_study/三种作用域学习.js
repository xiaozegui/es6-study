var arr = [];
var _loop = function(i){
    arr[i] = function(){
        console.log(i);
    }
}

for(var i = 0;i < 10;i++){
    _loop(i)
}

for(var k = 0;k < 10;k++){
    arr[k]();
}
