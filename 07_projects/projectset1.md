# projects related to DOM

# solution code


## project 1

```html
 <body>
    <div class="modecontainer">
      <span class="mode" id="bright"><i class="fa-regular fa-sun"></i></span>
      <span class="mode" id="dark"><i class="fa-solid fa-moon"></i></span>
    </div>
  </body>

```

```javascript

 const icon = document.querySelectorAll(".mode");
    
 const body = document.querySelector("body");
    
    icon.forEach((button) => {
      button.addEventListener("click", (e) => {
        if (e.target.className === "fa-regular fa-sun") {
          body.style.backgroundColor = "white";
        }
        if (e.target.className === "fa-solid fa-moon") {
          body.style.backgroundColor = "black";
        }
      });
    });
```




# project 2

```html
 <style>
    body {
      background-color: #0011ff49;
      margin: 20px;
    }
    .container {
      display: flex;
      justify-content: center;
    }

    form {
      width: 20%;
      min-width: 300px;
      height: 300px;
      background-color: #0011ff49;
      margin: 20px 20px;
      padding: 20px 20px;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      padding: 20px;
    }
    form h1 {
      margin: 5px 30px;
    }
    form button {
      width: 100px;
      margin: 10px 80px 5px 80px;
      padding: 10px;
      border-radius: 5px;
      border: 5px;
      background-color: #a1c6ea;
      color: #04080f;
    }
    label {
      color: #f9f7f3;
    }
    input {
      border-radius: 2px;
      border: none;
      padding: 5px;
      margin-left: 10px;
    }
    img {
      width: 80%;
      min-width: 400px;
      margin: 5px 10px;
    }
    .result {
      color: #dae3e5;
    }
  </style>
  <body>
    <div class="container">
      <form action="">
        <h1>BMI calculator</h1>
        <p>
          <label for="">Height</label>
          <input type="text" id="height" placeholder="in cm" />
        </p>
        <p>
          <label for="">Weight</label>
          <input type="text" id="weight" placeholder="in kg" />
        </p>
        <button>calculate</button>
        <div class="Result-box"></div>
        <h2>Result</h2>
        <div class="result"></div>
      </form>
    </div>
    <h1>BMI table for adults</h1>
    <p>
      This is the World Health Organization's (WHO) recommended body weight
      based on BMI values for adults. It is used for both men and women, age 20
      or older.
    </p>
    <img src="bmi.jpg" alt="" />

    <h1>BMI table for children and teens, age 2-20</h1>
    <p>
      The Centers for Disease Control and Prevention (CDC) recommends BMI
      categorization for children and teens between age 2 and 20.
    </p>
    <img src="BMI-Chart-For-Kids.png" alt="" />
  </body>

```

``` javascript
const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      console.log(e);
      e.preventDefault();
      const height = parseInt(document.querySelector("#height").value);
      console.log(height);
      const weight = parseInt(document.querySelector("#weight").value);
      console.log(weight);
      const results = document.querySelector(".result");
      if (height === " " || height < 0 || isNaN(height)) {
        results.innerHTML = `please enter positive height`;
      } else if (weight === " " || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please enter positive weight`;
      } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        results.innerHTML = `<span>${bmi}kg/m<sup>2</sup></span>`;
      }
    });
```


## project 3

```javascript
 const time = document.querySelector(".time");
    setInterval(() => {
      let date = new Date();
      time.innerHTML = date.toLocaleTimeString();
    }, 1000);
```


## project 4
```html
<style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .wrapped {
      width: 30%;
      min-width: 400px;
      height: 500px;
      background-color: gray;
      padding: 5px 10px;
      border-radius: 20px;
    }
    .wrapped h1 {
      margin-left: 30px;
    }
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    #guess {
      font-size: 1.5em;
      margin-bottom: 5px;
    }
    #guessField {
      border-radius: 5px;
      border: 2px solid transparent;
      padding: 5px;
      margin-bottom: 5px;
    }
    .guessSubmit {
      margin-top: 10px;
      padding: 5px;
      font-size: 1em;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      border-radius: 5px;
      border: 2px solid transparent;
      cursor: pointer;
    }
    p {
      margin-left: 25px;
      color: antiquewhite;
      font-size: 1em;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      cursor: pointer;
    }
    h2 {
      margin-left: 80px;
      margin-top: 30px;
      width: 175px;
      height: 40px;
      background-color: black;

      padding: 10px 10px 5px 10px;
      border-radius: 10px;
    }
  </style>
  <body>
    <div class="wrapped">
      <h1>Number guessing game</h1>
      <p>try and guess a random number between 1 and 100</p>
      <p>you have 10 attempts to guess the right number.</p>
      <br />
      <form action="" class="form">
        <label for="guessField" id="guess">Guess a number</label>
        <input type="text" id="guessField" class="guessField" />
        <input
          type="submit"
          id="subt"
          value="submit guess"
          class="guessSubmit"
        />
      </form>

      <div class="result">
        <p>previous Guesses:<span class="guesses"></span></p>
        <p>Guesses Remaining:<span class="lastResult">10</span></p>
        <p class="lowOrHi"></p>
      </div>
    </div>
  </body>

```

```javascript
<script>
    let randomNumber = parseInt(Math.random() * 100 + 1);

    const sumit = document.querySelector("#subt");
    const userInput = document.querySelector("#guessField");
    const guessSlot = document.querySelector(".guesses");
    const remaining = document.querySelector(".lastResult");
    const lowOrHi = document.querySelector(".lowOrHi");
    const startOver = document.querySelector(".result");

    const p = document.createElement("p");

    let prevGuess = [];
    let numGuess = 1;

    let playGame = true;
    if (playGame) {
      sumit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
      });
    }

    function validateGuess(guess) {
      if (isNaN(guess)) {
        alert("please enter a valid number");
      } else if (guess < 1) {
        alert("please enter a valid number");
      } else if (guess > 100) {
        alert("please enter a number less than 100");
      } else {
        prevGuess.push(guess);
        if (numGuess > 10) {
          cleanup(guess);
          displayMessage(`Game over.Random number was ${randomNumber}`);
          endGame();
        } else {
          cleanup(guess);
          checkGuess(guess);
        }
      }
    }

    function checkGuess(guess) {
      if (randomNumber === guess) {
        displayMessage("you guessed it right");
        endGame();
      } else if (randomNumber < guess) {
        displayMessage("your guesses is too high");
      } else if (randomNumber > guess) {
        displayMessage("your guesses is too low");
      }
    }
    function cleanup(guess) {
      userInput.value = " ";
      guessSlot.innerHTML += `${guess},`;
      numGuess++;
      remaining.innerHTML = `${11 - numGuess}`;
    }
    function displayMessage(message) {
      lowOrHi.innerHTML = `<h3>${message}</h3>`;
    }
    function endGame() {
      userInput.value = " ";
      userInput.setAttribute("disabled", "");
      p.classList.add("button");
      p.innerHTML = `<h2 id="newGame">start new Game</h2>`;
      startOver.appendChild(p);
      playGame = false;
      newGame();
    }
    function newGame() {
      const newGamebutton = document.querySelector("#newGame");
      newGamebutton.addEventListener("click", (e) => {
        let randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = " ";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        lowOrHi.innerHTML = " ";
        playGame = true;
      });
    }
  </script>

```