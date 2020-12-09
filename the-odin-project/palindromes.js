/**
 * Title: Find the Oldeset
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/findTheOldest
 */

const palindromes = function () {
  let regex = /[a-z]/gi;
  let arr1 = arguments[0].toLowerCase().match(regex);
  let arr2 = [];

  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }

  return arr1.join('') === arr2.join('');
};

// Should return: true
console.log(palindromes('racecar'));

// Should return: true
console.log(palindromes('racecar!'));

// Should return: true
console.log(palindromes('Racecar!'));

// Should return: true
console.log(palindromes('A car, a man, a maraca.'));

// Should return: true
console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Should return: false
console.log(palindromes('ZZZZ car, a man, a maraca.'));
