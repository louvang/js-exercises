/**
 * Title: 13. Roman to Integer
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/roman-to-integer/description/
 */

var romanToInt = function (s) {
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let currLetter = s[i];
    let nextLetter = s[i + 1];

    if (values[currLetter] < values[nextLetter]) {
      total -= values[currLetter];
    } else {
      total += values[currLetter];
    }
  }

  return total;
};

// Should return: 3
console.log(romanToInt('III'));

// Should return: 58
console.log(romanToInt('LVIII'));

// Should return: 1994
console.log(romanToInt('MCMXCIV'));

// Should return: 27
console.log(romanToInt('XXVII'));
