/**
 * Title: Count characters in your string
 * Link: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
 * Kata Level: 6 kyu
 */

function count(string) {
  let countObj = {};
  let strArr = string.split('');

  strArr.forEach((char) => {
    if (!countObj[char]) {
      countObj[char] = 1;
    } else {
      countObj[char] += 1;
    }
  });

  return countObj;
}

// Should return: {}
console.log(count(''));

// Should return: { a: 2, b: 1 }
console.log(count('aba'));
