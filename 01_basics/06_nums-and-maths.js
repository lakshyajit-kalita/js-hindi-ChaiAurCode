const score = 500

const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 23.2394
console.log(otherNumber.toPrecision(5));


const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));


// ***********************  MATHS ************************** //

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.max(2,3,4,5,5,6,7,8,3,4,6,7));
// console.log(Math.min(2,3,4,5,5,6,7,8,3,4,6,7));


console.log(Math.random());
console.log(Math.random()*10+1);

const min = 10
const max =20 
console.log(Math.floor(Math.random() *(max - min + 1) + min));
