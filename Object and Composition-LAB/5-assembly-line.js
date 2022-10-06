function createAssemblyLine(){
    return {
        hasClima:(car)=>{
            car.temp=21;
            car.tempSettings=21;
            car.adjustTemp=()=>{
                if(temp<tempSettings){
                    temp++;
                }else if(temp>tempSettings){
                    temp--;
                }
            }
        },
        hasAudio:(car)=>{
            car.currentTrack={name:'',artist:''};
            car.nowPlaying=()=>{
                if(currentTrack!==null){
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            }
        },
        hasParktronic:(car)=>{
            car.checkDistance=(distanse)=>{
                if(distanse<0.1){
                    console.log('Beep! Beep! Beep!');
                }else if(distanse<0.25){
                    console.log('"Beep! Beep!');
                }else if(distanse<0.5){
                    console.log('Beep!');
                }else{
                    console.log('');
                }
            
            }
        },
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();


