function extractText() {
   let items=Array.from(document.getElementsByTagName('li'));
   let result=items.map(e=>e.textContent).join('\n');
   document.getElementById('result').value=result;
}