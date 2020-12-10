/**
 * Title: Find the Longest Word in a String
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
 */

function findLongestWordLength(str) {
  let arr = str.split(' ');
  return Math.max(...arr.map((word) => word.length));
}

// Should return: 6
console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);

// Should return: 5
console.log(findLongestWordLength('May the force be with you'));

// Should return: 6
console.log(findLongestWordLength('Google do a barrel roll'));

// Should return: 19
console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);
