/**
 * Title: Shortest Word
 * Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
 * Kata Level: 7 kyu
 */

function findShort(s) {
  let arr = s.split(' ').map((word) => word.length);
  return Math.min(...arr);
}

// Should return: 3
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// Should return: 3
console.log(findShort('the quick brown fox jumps over the lazy dog'));
