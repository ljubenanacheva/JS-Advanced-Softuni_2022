function wordsUpperCase(text){
    return text.match(/\w+/g).join(', ').toUpperCase();
}
console.log(wordsUpperCase('Hi, how are you?'));