function greatestCommonDivisor(x,y){
    while(y){
        let t=y;
        y=x%y;
        x=t;
    }
    console.log(x);
}

greatestCommonDivisor(2154, 458);