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

## project 04 solution

```javascript
let randomNumber =  parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  //id the guess is a valid number
  //is value is less than 1 or grater than 100 (if -ve or +ve)

  if(isNaN(guess)){
    alert ( 'Plese enter a valid Number ')
  } else if (guess < 1){
    alert (' Please enter a number more than 1 ')
  } else if (guess > 100){
    alert ('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  //print message that the input value is low, high or equal 

  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  } else if (guess < randomNumber){
    displayMessage(`Your guess is too low`)
  } else if (guess > randomNumber){
    displayMessage(`your guess is too high`)
  }
}

function displayGuess(guess) {
  //for dispaly the guessed number by the user if the given number is equal , high , or low
  // this function clean the previous value 
  // it'll also update the array also 
  // also update the remainig too

  userInput.value = ''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  //it interen=ct with the DOM 
  //user input value will get empty and add dthe guess to innerHTML
  // and also decrease the remaining numbers

  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 +1)
    prevGuess = []
    numGuess = 1 
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })

}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start a new game </h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame();
}

```