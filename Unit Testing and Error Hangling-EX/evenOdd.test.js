const {expect}=require('chai');
const {isOddOrEven}=require('./evenOrOdd');

describe('check the function even or odd string',()=>{
    it('return undefined if arg is number',()=>{
    expect(isOddOrEven(4)).to.be.undefined;
    });
    it('return even if string length is even',()=>{
    expect(isOddOrEven('Moni')).to.equal('even');
    });
    it('return odd if string length is odd',()=>{
    expect(isOddOrEven('Taira')).to.equal('odd')
    });
    it('return undefined if arg is array',()=>{
    expect(isOddOrEven(['aa','bb','bvv'])).to.be.undefined;  
    });
    it('multiple strings in a row',()=>{
    expect(isOddOrEven('Lyubena i Moni')).to.equal('even');
    });
});