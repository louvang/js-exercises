/**
 * Title: 389. Find the Difference
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/find-the-difference/description/
 */

var findTheDifference = function (s, t) {
  s = s.split('');
  t = t.split('');

  s.forEach((sl) => {
    let i = t.findIndex((tl) => {
      return tl === sl;
    });

    t.splice(i, 1);
  });

  return t[0];
};

// Should return: e
console.log(findTheDifference('abcd', 'abcde'));

// Should return: y
console.log(findTheDifference('', 'y'));
