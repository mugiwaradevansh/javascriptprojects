const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("Please Enter a valid number");
  } else if (guess <= 1) {
    alert("Please Enter the number greater than the 0");
  } else if (guess > 100) {
    alert("Please Enter the number less than 100");
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayMessage(guess);
      displayMessage(`Game Over.RandomNumber was ${randomNumber}`);
      endGame();
    } else {
      displayMessage(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if(guess === randomNumber){
    displayMessage('OH Great you guess right it')
    endGame()
  }
  else if(guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  }
  else if(guess < randomNumber ){
    displayMessage(`Number is TOOO low`)
  }

}

function displayGuess(guess) {
  //
  userInput.value = ''
  guessSlot.innerHTML +=`${guess}`
  numGuess++;
  remaining.innerHTML =`${11 - numGuess}`
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

function endGame() { 
  //
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame"> Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
  //
    const newGameButtton =document.querySelector('#newGame')
    newGameButtton.addEventListener('click', function(e){
      e.preventDefault()
      location.reload()
    })
}
