function findMagicMatrix(matrix){
    let sumRow=matrix[0].reduce((acc,el)=>acc+el);

    for (let i = 0; i < matrix.length; i++) {
       let sumCol=0;

       for (let j = 0; j < matrix.length; j++) {
        sumCol+=matrix[i][j];
       }
       if(sumRow!==sumCol){
        return false;
       }
        
    }

    return true;
}

console.log(findMagicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));

console.log(findMagicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));