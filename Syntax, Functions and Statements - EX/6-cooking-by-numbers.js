function cookingByNunbers(num,command1,command2,command3,command4,command5){
let initNum=Number(num);

initNum=commandManipulator(initNum,command1);
initNum=commandManipulator(initNum,command2);
initNum=commandManipulator(initNum,command3);
initNum=commandManipulator(initNum,command4);
initNum=commandManipulator(initNum,command5);

function commandManipulator(initNum,command){
    switch(command){
        case 'chop': initNum/=2; console.log(initNum); break;
        case 'dice': initNum=Math.sqrt(initNum);console.log(initNum); break;
        case 'spice': initNum+=1; console.log(initNum);break;
        case 'bake': initNum*=3; console.log(initNum);break;
        case 'fillet': initNum-=0.2*initNum;console.log(initNum);break;
    }
    return initNum;
}


}

cookingByNunbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNunbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');