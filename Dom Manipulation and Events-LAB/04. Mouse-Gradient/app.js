function attachGradientEvents() {
    let gradientElement=document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', function(event){
        let position=event.offsetX;
        let elWidth=event.target.clientWidth-1;
        let result=Math.trunc(position/elWidth*100);

        let resultEl=document.getElementById('result');
        resultEl.textContent=result+'%';
    })
}