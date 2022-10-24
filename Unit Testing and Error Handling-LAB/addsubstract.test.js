const{expect}=require('chai');
const { it } = require('mocha');
const createCalculator = require('./6-add-substract');
const reateCalculator=require('./6-add-substract');

describe('check createCalculator',()=>{
    it('if return type object with functions',()=>{
        let obj=createCalculator();
        expect(obj).haveOwnProperty('add');
        expect(obj).haveOwnProperty('subtract');
        expect(obj).haveOwnProperty('get');
    });
    it('iternal value cannot be modified',()=>{
        expect(createCalculator().value).to.be.undefined;
    });
    it('if add method add to iternal value',()=>{
            let calculator=createCalculator();
            calculator.add(10);
            expect(calculator.get()).to.equal(10);
            calculator.add(5)
            expect(calculator.get()).to.equal(15);
    });
    it('if subtract method subtract from iternal value',()=>{
            let calculator=createCalculator();
            calculator.add(10);
            calculator.subtract(3);
            expect(calculator.get()).to.equal(7);
            calculator.subtract(2);
            expect(calculator.get()).to.equal(5);

    });
    it('type of calculator to be an object',()=>{
        expect(typeof createCalculator()).to.equal('object');
    });

});