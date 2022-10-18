function solve() {
  let text=(document.getElementById('text').value).toLowerCase();
  let typeToConvert=document.getElementById('naming-convention').value;
  let result='';
  if(typeToConvert==='Pascal Case'){
   result= toPascalCase(text);
   
  }else if(typeToConvert==='Camel Case'){
    result=toCamelCase(text);
  }else{
    result='Error!';
  }
  function toPascalCase(str){
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()});
}
  function toCamelCase(str){
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

document.getElementById('result').textContent=result;
}
