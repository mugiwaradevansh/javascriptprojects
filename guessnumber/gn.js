document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const submit = document.querySelector("#subt");
  const userInput = document.querySelector("#guessField");
  const guessSlot = document.querySelector(".guesses");
  const remaining = document.querySelector(".lastResult");
  const lowOrHi = document.querySelector(".lowOrHi");
  const startOver = document.querySelector(".resultParas");

  let prevGuess = [];
  let numGuess = 1;
  let playGame = true;

  const validateGuess = (guess) => {
    if (isNaN(guess)) {
      alert("Please enter a valid number");
    } else if (guess <= 0) {
      alert("Please enter a number greater than 0");
    } else if (guess > 100) {
      alert("Please enter a number less than or equal to 100");
    } else {
      prevGuess.push(guess);
      displayGuess(guess);
      checkGuess(guess);
    }
  };

  const checkGuess = (guess) => {
    if (guess === randomNumber) {
      displayMessage("Oh Great! You guessed it right!");
      endGame();
    } else if (guess > randomNumber) {
      displayMessage("Number is TOO high");
    } else {
      displayMessage("Number is TOO low");
    }

    if (numGuess === 10) {
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }
  };

  const displayGuess = (guess) => {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
  };

  const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  };

  const endGame = () => {
    userInput.setAttribute("disabled", "");
    const p = document.createElement("button");
    p.textContent = "Start New Game";
    startOver.appendChild(p);
    playGame = false;

    p.addEventListener("click", () => {
      location.reload();
    });
  };

  if (playGame) {
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    });
  }

  // Water waves effect
  const waterEffect = document.createElement("div");
  waterEffect.id = "water-effect";
  document.body.appendChild(waterEffect);

  document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    waterEffect.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 245, 0,0.29), rgba(24, 156, 171,0.50) 350px)`;
  });
});
