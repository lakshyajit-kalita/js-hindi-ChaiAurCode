// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDateOne = new Date(2026, 0, 28)
let myCreatedDateTwo = new Date(2026, 0, 28, 5, 30)
console.log(myCreatedDateOne.toDateString());
console.log(myCreatedDateTwo.toLocaleString());



let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDateTwo.getTime());


console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})