/**
 * Title: 58. Length of Last Word
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/length-of-last-word/description/
 */

var lengthOfLastWord = function (s) {
  let words = s.trim().split(' ');
  return words[words.length - 1].length;
};

// Should return: 5
console.log(lengthOfLastWord('Hello World'));

// Should return: 4
console.log(lengthOfLastWord('   fly me   to   the moon  '));

// Should return: 6
console.log(lengthOfLastWord('luffy is still joyboy'));
