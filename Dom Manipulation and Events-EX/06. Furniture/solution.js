function solve() {
let generateBtn=document.getElementsByTagName('button')[0];
let buyBtn=document.getElementsByTagName('button')[1];

generateBtn.addEventListener('click',generateFunc);
buyBtn.addEventListener('click',buyFunc);

function generateFunc(){

  let input=JSON.parse(document.querySelector('textarea').value);

  input.forEach(x => {
    let tr=document.createElement('tr');

    let td1=document.createElement('td');
    let image=document.createElement('img');
    image.src=x.img;
    td1.appendChild(image);
    tr.appendChild(td1);
    
    let td2=document.createElement('td');
    let par=document.createElement('p');
    par.textContent=x.name;
    td2.appendChild(par);
    tr.appendChild(td2);

    let td3=document.createElement('td');
    let par2=document.createElement('p');
    par2.textContent=Number(x.price);
    td3.appendChild(par2);
    tr.appendChild(td3);

    let td4=document.createElement('td');
    let par3=document.createElement('p');
    par3.textContent=Number(x.decFactor);
    td4.appendChild(par3);
    tr.appendChild(td4);

    let td5=document.createElement('td');
    let inputEl=document.createElement('input');
    inputEl.type='checkbox';
    td5.appendChild(inputEl);
    tr.appendChild(td5);

    document.querySelector('tbody').appendChild(tr);

  });
  
}
function buyFunc(){
  
  let checkBoxes=Array.from(document.querySelectorAll('tbody input')).filter(a=>a.checked);
  let bought=[];
  let price=0;
  let decoration=0;
  let counter=0;

  for(let checkbox of checkBoxes){
    let parent=checkbox.parentElement.parentElement;
    let data=Array.from(parent.querySelectorAll('p'));
    bought.push(data[0].textContent);
    price+=Number(data[1].textContent);
    decoration+=Number(data[2].textContent);
    counter++;
  }
  let averDecFactor=decoration/counter;
  let output=document.querySelectorAll('textarea')[1];
  output.textContent=`Bought furniture: ${bought.join(', ')}\r\n`;
  output.textContent+=`Total price: ${price.toFixed(2)}\r\n`;
  output.textContent+=`Average decoration factor: ${averDecFactor}`;
}
}