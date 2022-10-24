function solve(face,suit){
    let validFaces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits=['S','H','D','C'];

    if(validFaces.indexOf(face.toString())<0){
        throw new Error('Error');
    }
    if(validSuits.indexOf(suit)<0){
        throw new Error('Error');
    }

    switch(suit){
        case 'S': suit='\u2660';break;
        case 'H': suit='\u2665';break;
        case 'D': suit='\u2666';break;
        case 'C': suit='\u2663';break;
    }
    return{
        face:face,
        suit:suit,
        toString(){
            return this.face+this.suit;
        }
    }
}

console.log(solve('100','S').toString());