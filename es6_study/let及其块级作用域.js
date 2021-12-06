var arr = [];
let num = 'a';
for(let i = 0;i < 10;i++){
    let j = i+10;
    {
        arr[i] = function(){
            console.log(i,j,a);
        }
    }  
}

for(var k = 0;k < 10;k++){
    arr[k]();
}