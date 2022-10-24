const {expect}=require('chai');
const{chooseYourCar}=require('./task3');

describe("Choose Your Car function", function() {
    describe("choosingType", function() {
        it("Happy path", function() {
            expect(chooseYourCar.choosingType('Sedan','red',2012)).to.equal('This red Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan','red',2009)).to.equal('This Sedan is too old for you, especially with that red color.');
        });
        it("Edge Cases", function() {
            expect(chooseYourCar.choosingType('Sedan','red',2010)).to.equal('This red Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan','red',1900)).to.equal('This Sedan is too old for you, especially with that red color.');
            expect(chooseYourCar.choosingType('Sedan','red',2022)).to.equal('This red Sedan meets the requirements, that you have.');
        });
        it("Invalid type", function() {
            expect(()=>chooseYourCar.choosingType('Coupe','red',2010)).to.throw('This type of car is not what you are looking for.');
        });
        it("Invalid year", function() {
            expect(()=>chooseYourCar.choosingType('Sedan','red',1899)).to.throw('Invalid Year!');
            expect(()=>chooseYourCar.choosingType('Sedan','red',2023)).to.throw('Invalid Year!');
        });
     });
    
     describe("Brand Name", function() {
        it("Happy path", function() {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],0)).to.equal('Toyota, Peugeot');
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],2)).to.equal('BMW, Toyota');
        });
        it("Invalid input array", function() {
            expect(()=>chooseYourCar.brandName([],0)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName('BMW',0)).to.throw('Invalid Information!');
        });
        it("Invalid index", function() {
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],-1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],3)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],'1')).to.throw('Invalid Information!');
        });
     });

     describe("CarFuelConsumption", function() {
        it("Happy path", function() {
            expect(chooseYourCar.carFuelConsumption(100,20)).to.equal('The car burns too much fuel - 20.00 liters!');
            expect(chooseYourCar.carFuelConsumption(100,6)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        });
        it("Edge Cases", function() {
            expect(chooseYourCar.carFuelConsumption(100,7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });
        it("Invalid inputs", function() {
            expect(()=>chooseYourCar.carFuelConsumption('100',7)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(100,'7')).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption('100','7')).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(100,-7)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(-100,7)).to.throw('Invalid Information!');
        });
     });
});
