const{expect}=require('chai');
const{mathEnforcer}=require('./math-enforcer');

describe('check mathEnforcer obj',()=>{
    describe('check addFive func',()=>{
        it('if parameter is not a number should return undefined',()=>{
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        });
        it('check if the function works correctly',()=>{
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('check if works with positive number',()=>{
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('check if works with negative number',()=>{
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('check if works with floating point number',()=>{
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5,0.1);
        });

    });
    describe('check subtractTen func',()=>{
        it('if parameter is not a number should return undefined',()=>{
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        });
        it('check if the function works correctly',()=>{
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it('check if works with positive number',()=>{
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it('check if works with negative number',()=>{
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('check if works with floating point number',()=>{
            expect(mathEnforcer.subtractTen(20.5)).to.be.closeTo(10.5,0.1);
        });
    });
    describe('check sum func',()=>{
        it('if first parameter is not a number should return undefined',()=>{
            expect(mathEnforcer.sum('1',10)).to.be.undefined;
        });
        it('if second parameter is not a number should return undefined',()=>{
            expect(mathEnforcer.sum(1,'10')).to.be.undefined;
        });
        it('check if the function works correctly',()=>{
            expect(mathEnforcer.sum(20,10)).to.equal(30);
        });
        it('check if works with positive numbers',()=>{
            expect(mathEnforcer.sum(20,10)).to.equal(30);
        });
        it('check if works with negative numbers',()=>{
            expect(mathEnforcer.sum(-5,-10)).to.equal(-15);
        });
        it('check if works with floating point number',()=>{
            expect(mathEnforcer.sum(1.5,2.5)).to.be.closeTo(4.0,0.1);
        });
    });
});