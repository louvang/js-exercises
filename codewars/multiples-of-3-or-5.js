/**
 * Title: (Find the Sum of) Multiples of 3 or 5
 * Link: https://www.codewars.com/kata/514b92a657cdc65150000006
 * Kata Level: 6 kyu
 */

function solution(number) {
  let arr = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }

  return arr.reduce((sum, current) => sum + current, 0);
}

// Should return: 23
console.log(solution(10));

/**
 * ALTERNATIVE ANSWER
 * Instead of pushing multiples of 3 and 5 into an empty array, you can simply initialize a variable and continuously add on to it using +=. That way, you don't have to reduce() your array at the end to one sum.
 */

function solution2(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// Should return: 23
console.log(solution2(10));
