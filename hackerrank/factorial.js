/**
 * Title: Factorial
 * Link: https://www.hackerrank.com/challenges/js10-function/problem
 */

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Should return: 24
console.log(factorial(4));

// Should return: 120
console.log(factorial(5));

// Should return: 3628800
console.log(factorial(10));

// Should return: 2432902008176640000
console.log(factorial(20));

// Should return: 1
console.log(factorial(0));
