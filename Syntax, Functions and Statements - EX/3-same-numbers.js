function sameNumbers(num){
let isSame=true;
let sum=0;
let numberAsString=num.toString();
let firstDigit=numberAsString[0];
    for (let i = 0; i < numberAsString.length; i++) {
       if(firstDigit!==numberAsString[i]){
        isSame=false;
       }
       sum+=Number(numberAsString[i]);
        
    }
    console.log(isSame);
    console.log(sum);
}


sameNumbers(2222222);
sameNumbers(1234);