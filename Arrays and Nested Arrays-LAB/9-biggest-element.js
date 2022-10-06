function findBiggestElement(input){
    let currentMax=Number.MIN_SAFE_INTEGER;
    let currentNum=0;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            currentNum=input[row][col];
            if(currentNum>currentMax){
                currentMax=currentNum;
            }
            
        }
        
    }

    return currentMax;
}

findBiggestElement([[20, 50, 10],
    [8, 33, 145]]);