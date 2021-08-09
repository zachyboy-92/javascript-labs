const prompt = require("prompt-sync")();

// Question 1
let array = ["apple", "pineapple", "grapes", "pineapples", "fff"];
function isLongestString(array) {
  var longestString = array[0];
  for (let i = 1; i < array.length; i++) {
    if (longestString.length < array[i].length) {
      longestString = array[i];
    }
  }

  return `${longestString} has a length of ${longestString.length}`;
}

console.log(isLongestString(array));

// // let input;
// // function isPalindrome(value) {
// //   input = prompt("Insert Value: ");
// //   let reversedValue = "";
// //   for (i = value.length - 1; i >= 0; i--) {
// //     reversedValue += value[i];
// //   }
// //   if (value === reversedValue) {
// //     return `${value} is palindrome`;
// //   } else {
// //     return `${value} is not palindrome`;
// //   }
// // }

// // console.log(isPalindrome(input));
// // console.log(isPalindrome(input));
// // console.log(isPalindrome(input));

// var sum = 0;
// function findSum(num1, num2) {
//   sum = num1 + num2;
//   //   return sum;
// }

// findSum(1, 10);
// console.log(sum);
