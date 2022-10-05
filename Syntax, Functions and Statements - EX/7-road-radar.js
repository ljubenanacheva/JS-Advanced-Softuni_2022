function radar(speed,area){
let status;
let speedLimit;
let difference;

if(area=='motorway'){
    speedLimit=130;
    difference=speed-130;

    if(speed>130&&speed<=150){
    status='speeding';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else if(speed>150&&speed<=170){
    status='excessive speeding';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else if(speed>170){
    status='reckless driving';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}else if(area=='interstate'){
    speedLimit=90;
    difference=speed-90;

    if(speed>90&&speed<=110){
    status='speeding';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else if(speed>110&&speed<=130){
    status='excessive speeding';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else if(speed>130){
    status='reckless driving';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}else if(area=='city'){
    speedLimit=50;
    difference=speed-50;

    if(speed>50&&speed<=70){
    status='speeding';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else if(speed>70&&speed<=90){
    status='excessive speeding';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else if(speed>90){
    status='reckless driving';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}else if(area=='residential'){
    speedLimit=20;
    difference=speed-20;

    if(speed>20&&speed<=40){
    status='speeding';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else if(speed>40&&speed<=60){
    status='excessive speeding';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else if(speed>60){
    status='reckless driving';
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
    else{
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');