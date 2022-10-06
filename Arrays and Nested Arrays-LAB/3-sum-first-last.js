function sumFirstLastEl(arr){
    let first=Number(arr.shift());
    let last=Number(arr.pop());
    return first+last;
}

console.log(sumFirstLastEl(['20', '30', '40']));