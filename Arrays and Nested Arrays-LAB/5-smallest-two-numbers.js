function findSmallestNumbers(arr){
    arr.sort((a,b)=>a-b);
    let result =arr.slice(0,2);
    console.log(result.join(' '));
}

findSmallestNumbers([30, 15, 50, 5]);