function validate() {
    let checkbox=document.getElementById('company')
   document.getElementById('company').addEventListener('change',()=>{
    let companyInfo=document.getElementById('companyInfo');
    if(checkbox.checked===false){
        companyInfo.style.display='none';
    }
    companyInfo.style.display='block';
   });

   document.getElementById('submit').addEventListener('click',checkFields);

   function checkFields(event){
    event.preventDefault();
    let invalidFields=[];
    let userName=document.getElementById('username');
    let userNamePattern=/^[A-Za-z0-9]{3,20}$/;
    if(!userNamePattern.test(userName.value)){
        invalidFields.push(userName);
    }
    let email=document.getElementById('email');
    let emailPattern=/^[^@.]+@[^@]*\.[^@]+$/;
    if(!emailPattern.test(email.value)){
        invalidFields.push(email);
    }
    let password=document.getElementById('password');
    let confirmPassword=document.getElementById('confirm-password');
    let passwordPattern=/^[\w]{5,15}$/;
    if(!passwordPattern.test(password.value)||confirmPassword.value!==password.value){
        invalidFields.push(password);
        invalidFields.push(confirmPassword);
    }
    if(checkbox.checked){
        let companyNumber=document.getElementById('companyNumber');
        let companyPattern=/^[0-9]{4}$/;
        if(!companyPattern.test(companyNumber.value)){
            invalidFields.push(companyNumber);
        }
    }
    invalidFields.forEach(field=>field.style.borderColor='red');
    let valid=document.querySelector('#valid');
    !invalidFields.length?valid.style.display='block':valid.style.display='none';
   }
}
