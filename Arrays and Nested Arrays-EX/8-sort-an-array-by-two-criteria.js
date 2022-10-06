function sortArr(arr){
let result=arr.sort((a,b)=>a.length-b.length||a.localeCompare(b));
console.log(result.join('\n'));
}

sortArr(['alpha', 
'beta', 
'gamma']);

sortArr(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);

sortArr(['test', 
'Deny', 
'omen', 
'Default']);