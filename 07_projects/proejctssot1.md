# Projects related to DOM

## project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution Code

## Project 1

```javascrpt
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