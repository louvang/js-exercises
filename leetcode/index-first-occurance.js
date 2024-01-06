/**
 * Title: 28. Find the Index of the First Occurrence in a String
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 */

var strStr = function (haystack, needle) {
  let hsArr = haystack.split('');
  let nArr = needle.split('');

  return hsArr.findIndex((letter, index) => {
    let matchWord = letter;

    for (let i = index + 1; i < index + nArr.length; i++) {
      matchWord += hsArr[i];
    }

    if (matchWord === needle) return true;
  });
};

// Should return: e
console.log(strStr('sadbutsad', 'sad'));

// Should return: y
console.log(strStr('leetcode', 'leeto'));
