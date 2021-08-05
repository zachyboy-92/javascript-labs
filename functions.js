// menu
// 1. Add
// 2. Subtract
// 3. Multiply
// 4. Divide
// 5. Average
// 6. Exit

let prompt = require("prompt-sync")();
let input = prompt("Select Number 1 to 6: ");
let num1 = Number(prompt("Enter Number: "));
let num2 = Number(prompt("Enter Number: "));

console.log(input);
switch (input) {
  case "1":
    console.log(add(num1, num2));
    break;
  case "2":
    console.log(subtract(num1, num2));
    break;
  case "3":
    console.log(multiply(num1, num2));
    break;
  case "4":
    console.log(divide(num1, num2));
    break;
  case "5":
    console.log(average(num1, num2));
    break;
  case "6":
    exit();
    break;
  default:
    console.log("Invalid Value");
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function average(num1, num2) {
  return num1 + num2 / 2;
}

function exit() {
  return;
}
