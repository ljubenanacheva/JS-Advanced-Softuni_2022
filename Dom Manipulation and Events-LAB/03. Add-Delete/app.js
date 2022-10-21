function addItem() {
        let input=document.getElementById('newItemText');
        let newEl=document.createElement('li');
        newEl.textContent=input.value;
        let list=document.getElementById('items');
    
        let removeElement=document.createElement('a');
        let linkTekst=document.createTextNode('[Delete]');
    
        removeElement.appendChild(linkTekst);
        removeElement.href='#';

        removeElement.addEventListener('click',deletItem);
        
        newEl.appendChild(removeElement);
        list.appendChild(newEl);
    
        input.value='';
    
    function deletItem(e){
        e.target.parentElement.remove();
    }
}