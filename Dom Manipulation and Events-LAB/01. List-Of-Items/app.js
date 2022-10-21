function addItem() {
    let input=document.getElementById('newItemText');
    let newEl=document.createElement('li');
    newEl.textContent=input.value;
    let list=document.getElementById('items')
    list.appendChild(newEl);
    input.value='';

}