function rotateArr(arr,times){
    
    let current;
    for (let i = 0; i< times; i++) {
        current=arr.pop();
        arr.unshift(current);
        
    }
    console.log(arr.join(' '));
}

rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);