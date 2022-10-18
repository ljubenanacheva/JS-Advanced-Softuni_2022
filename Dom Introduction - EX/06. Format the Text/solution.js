function solve() {
  let text=document.getElementById('input').value;
  let resultDiv=document.getElementById('output');
  resultDiv.innerHTML='';

  let senteceArr=text.split('.').filter(x=>x.length>0);

  for (let i = 0; i < senteceArr.length; i+=3){
    let result=[];
    for (let x = 0; x < 3; x++) {
      if(senteceArr[i+x]){
        result.push(senteceArr[i+x]);
      }
      
    }
    let resultText=result.join('. ')+'.'.trim();
    resultDiv.innerHTML+=`<p>${resultText}</p>`;
  }

}