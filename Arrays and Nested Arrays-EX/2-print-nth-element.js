function solve(arr,step){
 const result=[];

 for (let i = 0; i < arr.length; i+=step) {
    result.push(arr[i]);
    
 }
 return result;
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
));