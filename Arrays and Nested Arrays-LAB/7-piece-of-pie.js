function solve(pies,firstFlavor,secondFlavor){
    let startIndex=pies.indexOf(firstFlavor);
    let endIndex=pies.indexOf(secondFlavor);
    return pies.slice(startIndex,endIndex+1);

}

let result=solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);
console.log(result);