/**
 * Title: Bitwise Operators
 * Link: https://www.hackerrank.com/challenges/js10-bitwise/problem
 */

function getMaxLessThanK(n, k) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i !== j) {
        let bitwise = i & j;
        if (bitwise < k && bitwise > max) {
          max = bitwise;
        }
      }
    }
  }

  return max;
}

// Should return: 1
console.log(getMaxLessThanK(5, 2));

// Should return: 4
console.log(getMaxLessThanK(8, 5));

// Should return: 0
console.log(getMaxLessThanK(2, 2));

// Should return: 235
console.log(getMaxLessThanK(955, 236));
