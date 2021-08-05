const prompt = require("prompt-sync")();

// Question1
let input = prompt("Enter Value: ").split(" ");
let newString = [];
for (let i = 0; i < input.length; i++) {
  console.log(input[i], input[i][0]);
  newString.push(input[i].replace(input[i][0], input[i][0].toUpperCase()));
}
console.log(newString.join(" "));

// Question 2
let input = prompt("Enter Address: ").split("");
let character = 0;
let number = 0;
let symbol = 0;
for (let i = 0; i < input.length; i++) {
  if (
    (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) ||
    (input[i].charCodeAt() >= 95 && input[i].charCodeAt() <= 122)
  ) {
    character++;
  } else if (
    (input[i].charCodeAt() >= 186 && input[i].charCodeAt() <= 222) ||
    input[i] === " "
  ) {
    symbol++;
  } else if (input[i].charCodeAt() >= 48 && input[i].charCodeAt() <= 57) {
    number++;
  } else {
    console.log("You Entered Invalid Value");
  }
}

console.log(
  `The are ${character} characters, ${number} numbers, ${symbol} symbols`
);
