//map
let array = [3, 6, 3, 8, 2];
const square = array.map((value) => value * value);
console.log(square);

function multiply(array, value) {
  return array.map((arr) => arr * value);
}
console.log(multiply(array, 2));
console.log(multiply(array, 5));

let array2 = ["hello", "world", "i am", "zack"];
function capitiliaze(array) {
  return array.map((arr) => arr[0].toUpperCase().concat(arr.slice(1)));
}

console.log(capitiliaze(array2));

// forEach;
function sumUp(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(sumUp(array));

let letters = ["a", "b", "v", "a", "r", "b", "a"];
function numberOfLetters(array) {
  let obj = {};

  array.forEach((element, i) => {
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  });
  return obj;
}

console.log(numberOfLetters(letters));

// filter;
let numbers = [3, 6, 2, 8, 3, 20, 23, 52];
const evenNum = numbers.filter((num) => num % 2 === 0);
console.log(evenNum);

const oddNum = numbers.filter((num) => num % 2 === 1);
console.log(oddNum);

let letters = ["cat", "dog", "elephant", "bee"];
function filterByLength(array, value) {
  return array.filter((arr) => arr.length === value);
}

console.log(filterByLength(letters, 3));

// reduce
const num = [2, 5, 7, 2, 5];
const sum = num.reduce((a, b) => a + b);
console.log(sum);
