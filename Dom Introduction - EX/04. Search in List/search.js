function search() {
   let townList=Array.from(document.querySelectorAll('ul li'));
   let searchedText=document.getElementById('searchText').value;
   let counter=0;
   for(let town of townList){
      let text=town.textContent;
      if(text.includes(searchedText)){
         counter++;
         town.style.textDecoration='underline';
         town.style.fontWeight='bold';
      }
   }

   let resultDiv=document.getElementById('result');
   resultDiv.textContent=`${counter} matches found`;
}
