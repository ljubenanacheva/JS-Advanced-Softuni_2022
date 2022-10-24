function solve(arr){
    let juices={};
    let bottles={};
    for(let juice of arr){
        let [flavor,qty]=juice.split(' => ');
        if(!juices.hasOwnProperty(flavor)){
            juices[flavor]=0;
        }
        juices[flavor]+=Number(qty);
        createBottle(flavor);
    }

    function createBottle(flavor){
        if(juices[flavor]>=1000){
            if(!bottles.hasOwnProperty(flavor)){
                bottles[flavor]=0;
            }
            let numberOfBottles=Math.floor(juices[flavor]/1000);
            bottles[flavor]+=numberOfBottles;
            juices[flavor]-=numberOfBottles*1000;
        }
    }

    for(let flavor in bottles){
         console.log(`${flavor} => ${bottles[flavor]}`);
    }

}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);