window.addEventListener("load", function () {
  let header = document.createElement("h1");
  header.innerHTML = "Hello User";
  document.body.append(header);
});

let title = document.querySelector("h1");
let button = document.querySelector(".click-me");
let numberOfClicks = document.createElement("p");
button.addEventListener("click", () => {
  clicks();
  changeColor();
});

// let clicked = 0;
function clicks() {
  let num1 = Number(prompt("Insert Num1"));
  let num2 = Number(prompt("Insert Num2"));
  let sum = num1 + num2;
  numberOfClicks.innerHTML = sum;
  document.body.append(numberOfClicks);
}

function changeColor() {
  title.classList.toggle("header");
}
