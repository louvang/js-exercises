/**
 * Title: RegExp I - Begins and Ends with the Same Vowel
 * Link: https://www.hackerrank.com/challenges/js10-regexp-1/problem
 */

function regexVar(str) {
  let re = /^([aeiou])\w+(\1)$/g;
  console.log(re.test(str));
  return re;
}

// Should return: false
regexVar('bcd');

// Should return: false
regexVar('abcd');

// Should return: true
regexVar('abcda');

// Should return: false
regexVar('abcdo');
