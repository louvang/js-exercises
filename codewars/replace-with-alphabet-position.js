/**
 * Title: Replace with Alphabet Position
 * Link: https://www.codewars.com/kata/546f922b54af40e1e90001da
 * Kata Level: 6 kyu
 */

let alphabetPosition = (text) => {
  let arr = text.match(/[a-z]/gi);
  if (arr !== null) {
    return arr
      .map((letter) => letter.toUpperCase().charCodeAt() - 64)
      .join(' ');
  } else {
    return '';
  }
};

// Should return: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Should return: ""
console.log(alphabetPosition('^$@6>@8['));
