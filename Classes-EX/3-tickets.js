function storeAndSortTickets(arr,criteria){
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    let tickets=[];
    for (let element of arr){
       let [destination,price,status]=element.split('|');
       price=Number(price);
       tickets.push(new Ticket(destination,price,status));
    }

    return tickets.sort((a,b)=>{
        if(criteria=='destination'){
            return a.destination.localeCompare(b.destination);
        }
        else if(criteria=='status'){
            return a.status.localeCompare(b.status);
        }
        else{
            return a.price-b.price;
        }
    });
}


console.log(storeAndSortTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));
