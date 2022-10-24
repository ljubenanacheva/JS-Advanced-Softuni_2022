function solve(area, vol, input) {
    let data=JSON.parse(input);
    let result=[];
    
    for (let element of data){
        let calculatedArea=area.call(element);
        let calculatedVolume=vol.call(element);
        result.push({
            area: calculatedArea,
            volume: calculatedVolume
        });
    }
    return result;
}
function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};


let resultCalc=solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    );
    console.log(JSON.stringify(resultCalc));