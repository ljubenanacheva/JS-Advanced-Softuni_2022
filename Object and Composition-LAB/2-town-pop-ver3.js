function town(input){

    const result={};
    for(let town of input){
        const tokens=town.split(' <-> ');
        const name = tokens[0];
        const popultation =Number(tokens[1]);
        if(result[name]==undefined){
            result[name]=popultation;
        }else{
            result[name]+=popultation;
        }

    }

    for(let town in result){
        console.log(`${town} : ${result[town]}`);
    }
}

town(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);