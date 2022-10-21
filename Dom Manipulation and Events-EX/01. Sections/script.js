function create(words) {
   let mainDiv=document.getElementById('content');
   for (let word of words){
      let divEl=document.createElement('div');
      let pEl=document.createElement('p');
      pEl.style.display='none';
      pEl.textContent=word;
      divEl.addEventListener('click',showP);
      function showP(){
         pEl.style.display='block';
      }
      divEl.appendChild(pEl);
      mainDiv.appendChild(divEl);
   }
}