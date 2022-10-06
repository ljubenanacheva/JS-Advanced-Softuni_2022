function rectangle(width,height,color){
    let colorUppercase=color[0].toUpperCase()+color.substring(1); 
    return{
        width,
        height,
        color:colorUppercase,
        calcArea(){
            return this.width*this.height;
        },
    };  
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
