const expect = require("chai").expect;
const { describe } = require('mocha');
const sum=require('./4-sum-of-numbers');
describe('Check an argument',()=>{
    it('test1',()=>{
        expect(Array.isArray(arr)).to.equal(true);
    })
})