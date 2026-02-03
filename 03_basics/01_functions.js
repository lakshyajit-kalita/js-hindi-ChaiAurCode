function Name(){
    console.log("L");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("y");
    console.log("a");
    
}

Name()    // Name = reference......// Name() = execution.

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(10, 11)
console.log("Result: ", result);



function loginUserMessage(userName = "Ram"){  // if we give the vlaue starting of the array then it is directly called and it dont 
        if(userName === undefined){           // run the if part of the code 
        console.log("Please enter a usename");
        return
    }
    return `${userName} user logged in`
}
console.log(loginUserMessage());   //if we did not give any value then it'll show undefine 

//*****Rest operatior(...)******//

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 5000));


//*****Object in Function******//

const user = {
    bookname: "Lakshyajit ",
    price: 500
}

function handleObject(anyobject){
    console.log(`The book name is: ${anyobject.bookname} and its price is : ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    bookname: "Hi everyone",
    price: 999
})

//*****Array in Function******//

const nyNewArray = [2002, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(nyNewArray));


// const myArray = [1, 2, 3, 4, 5]

// function getTheThirdValue(getValue){
//     return getValue[2]
// }
// console.log(getTheThirdValue(myArray));


const myList = ["Hi", "shail", 1, 2 , 3]

function getlastValue(getTheValue){
    return getTheValue[4]
}
console.log(getlastValue(myList));
