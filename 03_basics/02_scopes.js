let a = 100
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ",a);
    function fName(){
        
    }
    
}



console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const userName = "Lakshya"
    function two(){
        const value = 2 
        console.log(userName);
    }
    // console.log(value);
    two()
}

one()

 function addone(num){
    return num+1
 }
console.log(addone(5))

const addTwo = function(num){
    return num+2
}
console.log(addTwo(10));
