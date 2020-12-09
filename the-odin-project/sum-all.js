/**
 * Title: Sum All
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/sumAll
 */

let solution = (num1, num2) => {
  let sum = 0;

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  return sum;
};

// Should return: 10
console.log(solution(1, 4));
