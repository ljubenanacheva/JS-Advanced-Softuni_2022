class footballTeam{
    constructor(clubName,country){
        this.clubName=clubName;
        this.country=country;
        this.invitedPlayers=[];
    }

    newAdditions(footballPlayers){
        for(let footballPlayer of footballPlayers){
            let[name,age,playerValue]=footballPlayer.split('/');
            age=Number(age);
            playerValue=Number(playerValue);

            let player=this.invitedPlayers.find(p=>p.name==name);
            if(player!=undefined){
                if(player.playerValue<playerValue){
                    player.playerValue=playerValue;
                }
            }else{
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue
                });
            }
        }
        return `You successfully invite ${this.invitedPlayers.map(p=>p.name).join(', ')}.`;
    }
    signContract(selectedPlayer){
        let [selectedName,offer]=selectedPlayer.split('/');
        offer=Number(offer);
        let player=this.invitedPlayers.find(p=>p.name==selectedName);
        if(player==undefined){
            throw new Error(`${selectedName} is not invited to the selection list!`);
        }
        let priceDifference=player.playerValue-offer;
        if(player.playerValue>offer){
            throw new Error(`The manager's offer is not enough to sign a contract with ${player.name}, ${priceDifference} million more are needed to sign the contract!`)
        }
        player.playerValue='Bought';
        return `Congratulations! You sign a contract with ${player.name} for ${offer} million dollars.`
    }
    ageLimit(name, age){
        let player=this.invitedPlayers.find(p=>p.name==name);
        if(player==undefined){
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if(player.age==age||player.age>age){
            return `${name} is above age limit!`;
        }
        if(player.age<age){
            let ageDiff=age-player.age; 
            if(ageDiff<5){
                return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
            }else if(ageDiff>5){
                return `${player.name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        
    }
    transferWindowResult(){
        let sortedPlayers=this.invitedPlayers.sort((a,b)=>a.name-b.name);
        let players=[];
        for(let player of sortedPlayers){
            players.push(`Player ${player.name}-${player.playerValue}`);
        }
        return [
            `Players list:`,
            players.join('\n')
        ].join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
