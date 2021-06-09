/**
 * Title: RegExp III - Find Integers
 * Link: https://www.hackerrank.com/challenges/js10-regexp-3/problem
 */

function regexVar(str) {
  let re = /\d+/g;
  console.log(str.match(re));
  return re;
}

// Should return: ['1', '2', '3']
regexVar('1 2 3');

// Should return: ['102', '1948948', '1', '3', '4', '5']
regexVar('102, 1948948 and 1.3 and 4.5');
