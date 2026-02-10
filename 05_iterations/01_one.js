1. /* for  

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}    */
/*******************************************************************************************************/

for(let i = 0; i <= 10; i++){
    const element = i; // we cannot use this element outside the scope because it is define inside the scope
    if(element == 5){
        // console.log("5 Is My Fev Number");
        
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j}, and Outer loop value:${i}`);
        
        console.log(i + '*' + j + '=' + i*j);
    }
    
}