const{rgbToHexColor}=require('./rgb-to-hex');
const{expect}=require('chai');

describe('RGB to HEX color',()=>{
    it('converts black',()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it('converts white',()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });
    it('converts Softuni blue to #234465',()=>{
        expect(rgbToHexColor(35,68,101)).to.equal('#234465');
    });
    it('returns undefined for missing params',()=>{
        expect(rgbToHexColor(0,0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('returns undefined for out of lower bound',()=>{
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    });
    it('returns undefined for out of upper bound',()=>{
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    });
    it('returns undefined for floats',()=>{
        expect(rgbToHexColor(1.1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,1.1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,1.1)).to.be.undefined;
    });
    it('returns undefined for not a numbet',()=>{
        expect(rgbToHexColor('1',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,'1',0)).to.be.undefined;
        expect(rgbToHexColor(0,0,'1')).to.be.undefined;
    });
    it('converts 15,15,15 to #0F0F0F',()=>{
        expect(rgbToHexColor(15,15,15)).to.equal('#0F0F0F');
    });
});