/**
 * Title: 283. Move Zeroes
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/move-zeroes/description/
 */

var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }

  return nums;
};

// Should return: [1,3,12,0,0]
console.log(moveZeroes([0, 1, 0, 3, 12]));

// Should return: [1,3,12,0,0]
console.log(moveZeroes([0]));

// Should return: [1,0,0]
console.log(moveZeroes([0, 0, 1]));
