const name = "Lakshyajit"
const repoCount = 50

console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);


const gameName = new String('Lakshyajit-lk')

console.log(gameName[5]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-100, 5)
console.log(anotherString);

const newStringOne = "  lakshyajit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Lakshyajit.com/lakshyajit%70kalita"
console.log(url.replace('%70', '-'));

console.log(url.includes('lakshyajit'));

console.log(gameName.split("-"));
