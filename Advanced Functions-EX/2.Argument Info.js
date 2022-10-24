function solve(){
const params=Array.from(arguments);
const types ={};
for(let param of params){
    const type = typeof param;
    console.log(`${type}: ${param}`);

    if(types[type]==undefined){
        types[type]=0;
    }
    types[type]++;
}

const result=Object.entries(types).sort((a,b)=> b[1]-a[1]);
for( let [type,count] of result){
    console.log(`${type} = ${count}`);
}
}

solve('cat', 42, function () { console.log('Hello world!'); });