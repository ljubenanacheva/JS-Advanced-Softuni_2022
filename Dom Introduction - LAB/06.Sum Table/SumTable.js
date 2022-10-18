function sumTable() {
let rows=Array.from(document.querySelectorAll('tr')).slice(1,-1);
let sum=0;
for(let row of rows){
    sum+=Number(row.lastElementChild.textContent);
}

document.getElementById('sum').textContent=sum;
}