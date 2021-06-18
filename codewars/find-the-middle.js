/**
 * Title: Find the Middle Element
 * Link: https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
 * Kata Level: 7 kyu
 */

var gimme = function (inputArray) {
  let min = Math.min(...inputArray);
  let max = Math.max(...inputArray);

  return inputArray.findIndex((num) => {
    return num !== min && num !== max;
  });
};

// Should return: 0
console.log(gimme([2, 3, 1]));

// Should return: 1
console.log(gimme([5, 10, 14]));
