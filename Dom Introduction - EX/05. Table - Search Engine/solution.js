function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows=document.querySelectorAll('tbody tr');
      let searchElement=document.getElementById('searchField')
      let searchedText=searchElement.value;
      for(let row of rows){
         row.classList.remove('select');
         if(searchedText!==''&&row.innerHTML.includes(searchedText)){
            row.className='select';
         }
      }
      searchElement.value='';
   }
}