function calcArea(input){
    let inputType=typeof(input);
    let result=0;
    if(inputType==='number'){
        result=input*input*Math.PI;
        console.log(result.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

calcArea(5);
calcArea('name');