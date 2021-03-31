/**
 * Title: RegExp - Begins and Ends with the Same Vowel
 * Link: https://www.hackerrank.com/challenges/js10-regexp-1/problem
 */

function regexVar() {
  let re = /^([aeiou])\w+(\1)$/gim;
  return re;
}
