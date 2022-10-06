function solve(input){
 let result=[];
 let initial=0;
 
 for(let command of input){
    initial++;
    if(command=='add'){
        result.push(initial);
    }else{
        result.pop();
    }
 }
if(result.length>0){
 for(let el of result){
    console.log(el);
 }
}else{
    console.log('Empty');
}
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);