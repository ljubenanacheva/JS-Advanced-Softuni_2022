const{sum}=require('./4-sum-numbers');
const{expect}=require('chai');

describe('Check sum function',()=>{
    it('works with array of numbers',()=>{
        expect(sum([1,2,3])).to.equal(6);
    });
    it('works with string numbers',()=>{
        expect(sum(['1','2','3'])).to.equal(6);
    });
});