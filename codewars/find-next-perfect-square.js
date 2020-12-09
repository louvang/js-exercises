/**
 * Title: Find the next perfect square!
 * Link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
 * Kata Level: 7 kyu
 */

function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  return sqrt % 1 === 0 ? (sqrt + 1) * (sqrt + 1) : -1;
}

// Should return: 144
console.log(findNextSquare(121));

// Should return: 676
console.log(findNextSquare(625));

// Should return: 320356
console.log(findNextSquare(319225));

// Should return: 15241630849
console.log(findNextSquare(15241383936));

// Should return: -1
console.log(findNextSquare(155));

// Should return: -1
console.log(findNextSquare(342786627));
