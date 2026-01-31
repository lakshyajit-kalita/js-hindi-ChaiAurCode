// singleton

// object literals

// Object.create 

const mySym = Symbol("Key1")

const JsUser = {
    name : "Lakshyajit",
    "full name": "Lakshyajit Kalita",
    [mySym]: "Key2",
    age : 20,
    email : "lakshyajit@googe.com",
    isLoggedIn : false,
    LoggdInDays : ["Monday", "Saturday"]
}
console.log(JsUser);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Lakshyajit@microsoft.com"
console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email = "Lakshyajit@outlook.com"


console.log(JsUser); // email will not be changed

// JsUser.isLoggedIn = true
// console.log(JsUser); // isLoggedIn will be changed

// JsUser.LoggdInDays.push("Friday")
// console.log(JsUser); // Friday will be added in the array

// Object.seal  


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greeting2());