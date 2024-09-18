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