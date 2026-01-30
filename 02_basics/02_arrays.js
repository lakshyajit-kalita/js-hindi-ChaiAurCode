const marvel_Heros = ["IronMan", "Thor" , "SpiderMan"]
const DC_Heros = ["SuperMan", "Flash", "BatMan"]

// marvel_Heros.push(DC_Heros)
// console.log(marvel_Heros);

// marvel_Heros.join(DC_Heros)
// console.log(marvel_Heros);

// const newArr = marvel_Heros.concat(DC_Heros)
// console.log(newArr);

// const newArr2 = [...marvel_Heros, ...DC_Heros]
// console.log(newArr2);

const newArr3  = [1,2,3,[4,5,6],7,8[9,10,11, [12, 13, [14, 15]]]]
const real_new_array = newArr3.flat(Infinity)
console.log(real_new_array);


console.log(Array.isArray("Lakshyajit"));
console.log(Array.from("Lakshyajit"));
console.log(Array.from({name: "Lakshyajit"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300 

console.log(Array.of(score1, score2, score3));
