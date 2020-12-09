/**
 * Title: Stop gninnipS My sdroW! (Stop Spinning My Words!)
 * Link: https://www.codewars.com/kata/5264d2b162488dc400000001
 * Kata Level: 6 kyu
 */

let spinWords = (str) => {
  return str
    .split(' ')
    .map((word) => {
      return word.length > 4 ? word.split('').reverse().join('') : word;
    })
    .join(' ');
};

// Should return: "emocleW"
console.log(spinWords('Welcome'));

// Should return: "This is rehtona test"
console.log(spinWords('This is another test'));
