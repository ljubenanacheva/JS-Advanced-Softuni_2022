function createFigures(){
    class Figure{
        constructor(units='cm'){
            this.units=units;
        }
        get area(){

        }
        changeUnits(value){
            this.units=value;
        }
        toString(){
            `Figures units: ${this.units}`;
        }
    }
    class Circle extends Figure{
        constructor(radius){
         super();
         this._radius=radius;
        }
        get radius(){
            let radius=this._radius;
            if(this.units=='mm'){
                radius*=10;
            }else if(this.units=='m'){
                radius/=10;
            }
            return radius;
        }
        get area(){
            return this.radius*this.radius*Math.PI;
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure{
        constructor(width,height){
            super();
            this._width=width;
            this._height=height;
        }
        get area(){
            return this.width*this.height;  
        }
        get height(){
            let height=this._height;
            if(this.units=='mm'){
                height*=10;
            }else if(this.units=='m'){
                height/=10;
            }
            return height;
        }
        get width(){
            let width=this._width;
            if(this.units=='mm'){
                width*=10;
            }else if(this.units=='m'){
                width/=10;
            }
            return width;
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
    
    let c=new Circle(5);
    console.log(c.area);
}


