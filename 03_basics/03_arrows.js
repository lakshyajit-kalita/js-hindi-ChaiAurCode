const user = {
    userName: "Lakshyajit",
    price: 999,

    wellcomeMessage : function() {
        // console.log(`${this.userName}, Wellcome To The Website`);
        // console.log(this);
        
    } 

}
// user.wellcomeMessage()
// user.userName = "sam"
// user.wellcomeMessage()

// console.log(this);


// function chai(){
//     let username= "Lakshyajit"
//     console.log(this.username);
// }

// chai()


// const chai = function() {
//     let username = "Lakshyajit"
//     console.log(this.username);
    
// }



// const chai = () => {
//     let username = "Lakshyajit"
//     console.log(this.username);
    
// }
// chai()


// arrow function;

// const addnum = (num1, num2) => { // arrow function
//     return num1 + num2 
// }

// const addnum = (num1, num2) => num1 + num2 // implisit return 
const addnum = (num1, num2) => ( num1 + num2 ) //if use {} have to write return keyword
                                               // if use () no need to write return keyword
const addname = (num1, num2) => ({username: "Lakshyajit", price : 100000})

console.log(addnum(5,20));

console.log(addname(5, 10));

//*******************MOST IMP*********************//