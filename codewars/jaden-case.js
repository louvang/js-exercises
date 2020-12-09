/**
 * Title: Jaden Casing Strings
 * Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6
 * Kata Level: 7 kyu
 */

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

// Should return: "How Can Mirros Be Real If Our Eyes Aren't Real."
const str = "How can mirrors be real if our eyes aren't real.";
console.log(str.toJadenCase());
