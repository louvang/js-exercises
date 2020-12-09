/**
 * Title: Fibonacci
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/fibonacci
 */

const fibonacci = function () {
  let num = arguments[0];
  let arr = [];

  for (let i = 0; i < num; i++) {
    i == 0 || i == 1 ? arr.push(1) : arr.push(arr[i - 1] + arr[i - 2]);
  }

  let ans = arr[num - 1];

  return !ans ? 'OOPS' : ans;
};

// Should return: 3
console.log(fibonacci(4));

// Should return: 8
console.log(fibonacci(6));

// Should return: 55
console.log(fibonacci(10));

// Should return: 610
console.log(fibonacci(15));

// Should return: 75025
console.log(fibonacci(25));

// Should return: "OOPS"
console.log(fibonacci(-25));

// Should return: 1
console.log(fibonacci('1'));

// Should return: 1
console.log(fibonacci('2'));

// Should return: 21
console.log(fibonacci('8'));
