/**
 * Title: 459. Repeated Substring Pattern
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/repeated-substring-pattern/description/
 */

var repeatedSubstringPattern = function (s) {
  let repeatableStr = undefined;

  let i = 1;
  while (!repeatableStr && i < s.length) {
    if (s.length % i !== 0) {
      i++;
      continue;
    }

    let subStr = [];
    for (let j = 0; j < s.length; j += i) {
      subStr.push(s.substring(j, j + i));
    }

    let allMatch = subStr.every((str) => str === subStr[0]);

    if (allMatch) {
      repeatableStr = subStr[0];
    } else {
      i++;
    }
  }

  return Boolean(repeatableStr);
};

// Should return: true
console.log(repeatedSubstringPattern('abab'));

// Should return: false
console.log(repeatedSubstringPattern('aba'));

// Should return: true
console.log(repeatedSubstringPattern('abcabcabcabc'));

// Should return: true
console.log(repeatedSubstringPattern('abaababaab'));
