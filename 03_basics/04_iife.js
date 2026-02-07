// Immediately Invoked Function Expression (IIFE)

// NAMED IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();

//UNNAMED IIFE
( () => {
    console.log(`DB CONNECTED TWO`);
})();

//PARAMETER IIFE
( (name) => {
    console.log(`DBCONNECTED THREE ${name}`);
    
})('Lakshyajit')