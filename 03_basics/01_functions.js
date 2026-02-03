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
