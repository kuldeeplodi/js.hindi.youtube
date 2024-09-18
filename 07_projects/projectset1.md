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