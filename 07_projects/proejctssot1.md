# Projects related to DOM

## project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

## Project 01 solution

```javascript
console.log("Hi This Is My First Code Here");
const buttons = document.querySelectorAll('.button');
// cosole.log(buttons)
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    } else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    } else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    } else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id 
    }else if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id 
    } else if(e.target.id === 'orange'){
      body.style.backgroundColor = e.target.id 
    }
  })
});


```

## project 02 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  
 if ( height === '' || height < 0 || isNaN(height)) {
   results.innerHTML = `Please give a valid height ${height}`;
 } else if ( weight === '' || weight < 0 || isNaN(weight)) {
   results.innerHTML = `Please give a valid weight ${weight}`;
 } 

 const bmi = (weight / ((height ** 2)/10000)).toFixed(2)


 let catagory = ``
//let category = '' is used to store the BMI classification result, which is later displayed after determining the BMI value using conditional statements.

 if (bmi < 18.6 ){
   catagory = `under weight`
 } else if (bmi >= 18.6 && bmi <=24.9){
   catagory = `Normal Range`
 } else{
   catagory = ` Over Weight`
 }
 results.innerHTML = `
 <span>${bmi}<span/>
 <span>${catagory}</span>
 `
});

```

## proejct 03 solution 

```javascript
const clock = document.getElementById('clock')

setInterval ( function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```