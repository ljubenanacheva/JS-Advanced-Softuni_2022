function solve(arr){
    arr.sort((a,b)=>(a-b));
    
    let result=[];
    let current;
    while(arr.length>0){
        current=arr.shift();
        result.push(current);
        current=arr.pop();
        result.push(current);
    }

    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);