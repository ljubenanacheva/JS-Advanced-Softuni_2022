function addItem() {
    
    let selectEl=document.getElementById('menu');
    let newItemTextEl=document.getElementById('newItemText');
    let newItemValueEl=document.getElementById('newItemValue')

    let newOptEl= document.createElement('option');
    newOptEl.textContent=newItemTextEl.value;
    newOptEl.value=newItemValueEl.value;
    selectEl.appendChild(newOptEl);

    newItemTextEl.value='';
    newItemValueEl.value='';
        
    
}