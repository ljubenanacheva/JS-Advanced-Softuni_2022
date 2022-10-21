function validate() {
    let emailEl=document.querySelector('input');
    
    emailEl.addEventListener('change',onChange);
    
    function onChange(){
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm;
     if (emailEl.value.match(mailformat)){
        emailEl.classList.remove('error');
        
    }else{
        emailEl.classList.add('error');
    
    }
    
    }
}
  
    

