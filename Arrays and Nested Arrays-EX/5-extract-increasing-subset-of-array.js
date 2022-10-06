function extractIncrSubset(arr){
    let resultArr=[arr[0]];
    arr.reduce((acc,el)=>{
        if(el>=acc){
            resultArr.push(el);
            acc=el;
        }
        return acc;
    });
    return resultArr;
}

console.log(extractIncrSubset([1, 
    2, 
    3,
    4]
    ));