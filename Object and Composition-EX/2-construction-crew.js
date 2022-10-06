function constructionCrew(worker){
    
        if(worker.dizziness==true){
            let additionalWater=0.1*worker.weight*worker.experience;
            worker.levelOfHydrated+=additionalWater;
            worker.dizziness=false;
        }
        return worker;
    };


console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));