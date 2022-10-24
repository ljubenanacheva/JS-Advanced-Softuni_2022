function printDeckOfCards(cards) {
    let validFaces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits=['S','H','D','C'];
    let result=[];
    for(let card of cards){
        let suit=card.toString().substring(card.length-1);
        let face=card.slice(0,-1);
        
        if(validFaces.indexOf(face.toString())<0){
            console.log(`Invalid card: ${card}`);
            return;
        }
        if(validFaces.indexOf(face.toString())<0){
            console.log(`Invalid card: ${card}`);
            return;
        }
        if(validSuits.indexOf(suit)<0){
            console.log(`Invalid card: ${card}`);
            return;
        }
        let newCard=createCard(face,suit);
        result.push(newCard);
    }
    console.log(result.join(' '));

    function createCard (face,suit){
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
  }
  
  printDeckOfCards(['5S', '3D', 'QD', '1C']);