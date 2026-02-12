// for of 

//["", "", "" ] array in string
//[{}, {}, {}]  array objects    mostly used in forEach


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "ABCDEFG HIJKLMNO"
for (const greet of greetings) {
    if (greet !== " ") {
        //   console.log(`Each char is ${greet}`);
    } 
}


// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fn', "France")

//console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':-', value);
    
}

// const myObj = {
//     'game1': 'NSF',
//     'game2': 'SpiderMan'
// }
// for (const [element, gamename] of myObj) {
//     console.log(element, ':-', gamename);
    
// }    // this for of syntax will not work here 



