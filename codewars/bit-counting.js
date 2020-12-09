/**
 * Title: Bit Counting
 * Link: https://www.codewars.com/kata/526571aae218b8ee490006f4
 * Kata Level: 6 kyu
 */

let countBits = (int) => {
  return int
    .toString(2)
    .split('')
    .reduce((sum, current) => parseInt(sum) + parseInt(current), 0);
};

// Should return: 0
console.log(countBits(0));

// Should return: 1
console.log(countBits(4));

// Should return: 3
console.log(countBits(7));

// Should return: 2
console.log(countBits(9));

// Should return: 2
console.log(countBits(10));
