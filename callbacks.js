// Return the sum of an array using
let sum = 0;
function getSum(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
    console.log(sum);
  }
  return sum;
}

function instructions(input) {
  return (sum += input);
}

console.log(getSum([3, 5, 7, 1], instructions));

// Using callback to add the value of multiple fuctions
function addNum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiply(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum *= array[i];
  }
  return sum;
}

function addValues(fun1, fun2) {
  console.log(fun1, fun2);
  return fun1 + fun2;
}

console.log(addValues(addNum([6, 4, 2]), multiply([3, 5, 2])));
