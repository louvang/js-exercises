/**
 * Title: Calculator
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/calculator
 */

function add() {
  return arguments[0] + arguments[1];
}

function subtract() {
  return arguments[0] - arguments[1];
}

function sum() {
  return arguments[0].reduce((sum, curr) => sum + curr, 0);
}

function multiply() {
  return arguments[0].reduce((prod, curr) => prod * curr, 1);
}

function power() {
  return Math.pow(arguments[0], arguments[1]);
}

function factorial() {
  let arr = [];
  for (let i = arguments[0]; i > 0; i--) {
    arr.push(i);
  }
  return multiply(arr);
}

// Should return: 0
console.log(add(0, 0));

// Should return: 4
console.log(add(2, 2));

// Should return: 8
console.log(add(2, 6));

// Should return: 6
console.log(subtract(10, 4));

// Should return: 0
console.log(sum([]));

// Should return: 7
console.log(sum([7]));

// Should return: 18
console.log(sum([7, 11]));

// Should return: 25
console.log(sum([1, 3, 5, 7, 9]));

// Should return: 8
console.log(multiply([2, 4]));

// Should return: 645120
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));

// Should return: 64
console.log(power(4, 3));

// Should return: 0! = 1
console.log(factorial(0));

// Should return: 1
console.log(factorial(1));

// Should return: 2
console.log(factorial(2));

// Should return: 120
console.log(factorial(5));

// Should return: 3628800
console.log(factorial(10));
