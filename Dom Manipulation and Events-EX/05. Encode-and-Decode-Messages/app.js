function encodeAndDecodeMessages() {
    let firstTextArea = document.getElementsByTagName('textarea')[0];
    let secondTextArea=document.getElementsByTagName('textarea')[1];
    let encodeBtn=document.getElementsByTagName('button')[0];
    let decodeBtn=document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click',encode);
    decodeBtn.addEventListener('click',decode);

    function encode(event){
      let encodetMsg='';
      let input=firstTextArea.value;
      for (let i = 0; i < input.length; i++) {
        encodetMsg+=String.fromCharCode(input[i].charCodeAt(0)+1);
      } 
        secondTextArea.value=encodetMsg;
        firstTextArea.value='';
    }
    function decode(event){
        let decodeMsg='';
        let input=secondTextArea.value;
        for (let i = 0; i < input.length; i++) {
            decodeMsg+=String.fromCharCode(input[i].charCodeAt(0)-1);
          } 
        secondTextArea.value=decodeMsg;
    }
}