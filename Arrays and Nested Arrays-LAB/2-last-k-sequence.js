function solve(n,k){
let result=[];
result.push(1);
for (let i= 1; i < n; i++) {
    let number=0;
    let startIndex=Math.max(0,i-k);
    for (let j =startIndex; j < i;j++){
        number+=result[j];
    }
    result.push(number);
        
    }
    return result;
}

console.log(solve(8, 2));