function toggle() {
    let buttonElement=document.getElementsByClassName('button')[0];
    let text=document.getElementById('extra');
    if(buttonElement.textContent=='More'){
        text.style.display='block';
        buttonElement.textContent='Less';
    }else{
        text.style.display='none';
        buttonElement.textContent='More';
    }

}