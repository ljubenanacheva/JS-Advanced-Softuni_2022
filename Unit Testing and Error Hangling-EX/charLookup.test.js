const{expect}=require('chai');
const{lookupChar}=require('./char-lookup');

describe('check char lookup function if works correct',()=>{
    it('check wether first parameter type is valid',()=>{
        expect(lookupChar(4,0)).to.be.undefined;
        });
    it('check wether second parameter type is valid',()=>{
        expect(lookupChar('Moni','3')).to.be.undefined;
        });
    it('check wether second parameter type is Integer',()=>{
        expect(lookupChar('Moni',3.5)).to.be.undefined;
    });
    it('check if the index is negative number',()=>{
        expect(lookupChar('Moni',-2)).to.equal('Incorrect index');
    });
    it('check if the index is bigger than string length',()=>{
        expect(lookupChar('Moni',4)).to.equal('Incorrect index');
    });
    it('parameters are valid and check if the function works correctly ',()=>{
        expect(lookupChar('Moni',1)).to.equal('o');
    });
});
