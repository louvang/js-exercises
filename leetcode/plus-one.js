/**
 * Title: 66. Plus One
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/plus-one/description
 */

var plusOne = function (digits) {
  let i = digits.length - 1;
  if (digits[i] < 9) {
    digits[i]++;
  } else {
    for (let j = 0; j < digits.length; j++) {
      if (digits[i - j] < 9) {
        digits[i - j]++;
        break;
      } else {
        digits[i - j] = 0;
      }
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};

// Should return: [1,2,4]
console.log(plusOne([1, 2, 3]));

// Should return: [4,3,2,2]
console.log(plusOne([4, 3, 2, 1]));

// Should return: [1,0]
console.log(plusOne([9]));

// Should return: [1,0,0]
console.log(plusOne([9, 9]));

// Should return: [5,0,0,0,0]
console.log(plusOne([4, 9, 9, 9, 9]));

// Should return: [4,9,8,0,0]
console.log(plusOne([4, 9, 7, 9, 9]));
