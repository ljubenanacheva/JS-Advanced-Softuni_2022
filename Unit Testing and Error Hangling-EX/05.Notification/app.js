function notify(message) {
  let divEl=document.getElementById('notification');
  divEl.textContent=message;
  divEl.style.display='inline';

  divEl.addEventListener('click',hideDiv);
  function hideDiv(){
    divEl.style.display='none';
  }
}