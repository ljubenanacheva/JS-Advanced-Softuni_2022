function solve(arr){
let result=[];
arr.shift();

for(let el of arr){
    let tokens=el.split(' | ');
    let town={};
    let townName=tokens[0].toString().substring(2);
    let townLongitude=(tokens[2]).toString().slice(0,-2);
    town['Town']=townName;
    town['Latitude']=Number((Number(tokens[1]).toFixed(2)));
    town['Longitude']=(Number(Number(townLongitude).toFixed(2)));
    result.push(town);
}

return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));