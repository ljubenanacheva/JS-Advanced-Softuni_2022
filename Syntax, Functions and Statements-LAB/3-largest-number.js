function findLargest(...params){
    let largestNum=Math.max(...params);
    console.log(`The largest number is ${largestNum}.`);
}

findLargest(-3, -5, -22.5);