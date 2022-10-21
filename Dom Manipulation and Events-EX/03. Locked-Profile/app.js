function lockedProfile() {
    let butns=Array.from(document.querySelectorAll('.profile button'));
    
    for (let btn of butns){
        btn.addEventListener('click',showMore);
    }
    
    function showMore(event){
        let radioBtn=event.target.parentElement.querySelectorAll('input[type=radio]')[0];
        if(radioBtn.checked){
            return;
        }

        let hiddenEl=event.target.parentElement.querySelectorAll('div')[0];
        if(event.target.textContent==='Show more'){
            hiddenEl.style.display='block';
            event.target.textContent='Hide it';
        }else{
            if(radioBtn.checked){
                return;
            }
            hiddenEl.style.display='';
            event.target.textContent='Show more';
        }
        
    }
}