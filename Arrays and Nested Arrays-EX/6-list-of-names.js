function solve(arr){
    arr.sort((a,b)=>a.localeCompare(b));
    let number=0;
    for(let name of arr){
        number++;
        console.log(`${number}.${name}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);