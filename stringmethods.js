const prompt = require("prompt-sync")();

// Question #1
let inputString = prompt("Insert string: ");
let inputValue = prompt("Select value");
let occurences = 0;
let valueIndex = [];
for (let i = 0; i < inputString.length; i++) {
  if (inputString[i].includes(inputValue)) {
    occurences++;
    valueIndex.push(i + 1);
  }
}

if (occurences > 0) {
  console.log(
    `The value ${inputValue} has occurred ${
      occurences > 1 ? `${occurences} times` : `${occurences} time`
    } in index ${valueIndex}`
  );
} else {
  console.log(`${inputValue} not available`);
}

// Question #2
let userInput = prompt("Insert value: ");
let vowels = ["a", "e", "i", "o", "u"];
let numberOfVowels = 0;
userInput.replace(" ", "");
console.log(userInput);
for (let i = 0; i < userInput.length; i++) {
  for (var j = 0; j < vowels.length; j++) {
    if (userInput[i].includes(vowels[j])) {
      numberOfVowels++;
    }
  }
}
let numberOfConsonants = userInput.length - 1 - numberOfVowels;

console.log(`Number Of vowels: ${numberOfVowels}`);
console.log(`Number Of consonants: ${numberOfConsonants}`);

//Question 3
let userInput = prompt("Insert Value: ");
let palindrome = "";
for (let i = userInput.length - 1; i >= 0; i--) {
  palindrome += userInput.charAt(i);
}
console.log(palindrome);
if (userInput === palindrome) {
  console.log(userInput + " is a palindrome string");
} else {
  console.log(userInput + " is not a palindrome string");
}
