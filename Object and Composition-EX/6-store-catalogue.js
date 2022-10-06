function solve(arr){
let result=arr.sort((a,b)=>a.localeCompare(b));
let current=[];
let firstChar='';

for (let i = 0; i < result.length; i++) {
   current=result[i].split(' : ');

   if(current[0][0]!==firstChar){
    console.log(current[0][0]);
   }
   console.log(`  ${current[0]}: ${current[1]}`);
   firstChar=current[0][0];
}

}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);