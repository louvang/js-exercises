/**
 * Title: 242. Valid Anagram
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/valid-anagram/description/
 */

var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};

// Should return: true
console.log(isAnagram('anagram', 'nagaram'));

// Should return: false
console.log(isAnagram('rat', 'car'));

// Should return: false
console.log(isAnagram('a', 'ab'));
