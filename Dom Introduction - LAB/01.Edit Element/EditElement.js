function editElement(element,match,replacer) {
   const text=element.textContent;
   const pattern=new RegExp(match,'g');
   let result=text.replace(pattern,replacer);
   element.textContent=result;
}