/**
 * Title: 1768. Merge Strings Alternately
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/merge-strings-alternately/description/
 */

var mergeAlternately = function (word1, word2) {
  let maxLength = Math.max(word1.length, word2.length);
  let newWord = '';

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) newWord += word1[i];
    if (word2[i]) newWord += word2[i];
  }

  return newWord;
};

// Should return: apbqcr
console.log(mergeAlternately('abc', 'pqr'));

// Should return: apbqcd
console.log(mergeAlternately('abcd', 'pq'));
