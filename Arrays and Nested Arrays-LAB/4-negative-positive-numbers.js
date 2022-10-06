function solve(arr){
    let result=[];
    for (number of arr){
        if(number<0){
            result.unshift(number);
        }
        else{
            result.push(number);
        }
    }

    for (number of result){
        console.log(number);
    }
}

solve([7, -2, 8, 9]);