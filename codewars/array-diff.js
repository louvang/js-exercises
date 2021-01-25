/**
 * Title: Array.diff
 * Link: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
 * Kata Level: 6 kyu
 */

function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}

// Should return: [2]
console.log(arrayDiff([1, 2], [1]));

// Should return: [1, 3]
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

// Should return: []
console.log(arrayDiff([], [4, 5]));

// Should return: []
console.log(arrayDiff([8, 4, -13, -18], [4, 8, -18, -13]));
