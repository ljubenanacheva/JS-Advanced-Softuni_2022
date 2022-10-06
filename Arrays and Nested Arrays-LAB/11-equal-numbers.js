function solve(matrix){
    let count=0;
    matrix.forEach(x => 
        x.reduce((a,b)=>{
            if(a===b){
                count++;
            }
            return b;
    }));

    for (let i = 0; i< matrix.length-1; i++) {
        matrix[i].forEach((_,j)=>{
            if(matrix[i][j]===matrix[i+1][j]){
                count++;
            }
        })
        
    }
    return count;
}

console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));