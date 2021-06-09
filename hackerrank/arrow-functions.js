/**
 * Title: Arrow Functions
 * Link: https://www.hackerrank.com/challenges/js10-arrows/problem
 */

function modifyArray(nums) {
  return nums.map((num) => {
    return num % 2 === 0 ? num * 2 : num * 3;
  });
}

// Should return: [ 3, 4, 9, 8, 15 ]
console.log(modifyArray([1, 2, 3, 4, 5]));
