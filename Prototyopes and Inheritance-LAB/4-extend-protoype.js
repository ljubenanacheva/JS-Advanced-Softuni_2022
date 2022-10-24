function extendPrototype(classDef){
    classDef.prototype.species='Human';
    classDef.prototype.toSpeciesString=function(){
        return `I am a ${this.species}. ${this.toString()}`;
    };
}