// Array

const myArray = [1,2,3,4,5,6]
const myHeros = ['IronMan', 'SpiderMan', 'SuperMan']

const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray[5]);

// Array Methods 

// myArray.push(6)
// myArray.push(9)
// myArray.pop()


myArray.unshift(0)
myArray.shift()
console.log(myArray);


// console.log(myArray.includes(500000000));
// console.log(myArray.indexOf(5));

const newArray = myArray.join()
console.log( myArray);
// console.log(typeof newArray);


// console.log('A', myArray);

const myn1 = myArray.slice(0, 3)
// console.log(myn1);

// console.log('B', myArray);

const myn2 = myArray.splice(0, 3)
// console.log("c", myArray);
// console.log(myn2);