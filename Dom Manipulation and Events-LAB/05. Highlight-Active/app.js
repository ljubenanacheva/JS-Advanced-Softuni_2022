function focused() {
    let input=Array.from(document.querySelectorAll('input'));
    input.forEach(x=>{
        x.addEventListener('focus',focusInput);
        x.addEventListener('blur',blurInput);
    });
    

    function focusInput(event){
        event.target.parentElement.className ='focused';
    }
    function blurInput(event){
        event.target.parentElement.className='';
    }
}