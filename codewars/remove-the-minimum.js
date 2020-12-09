/**
 * Title: Remove the Minimum
 * Link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b
 * Kata Level: 7 kyu
 */

function removeSmallest(numbers) {
  let newArr = [...numbers];
  let indexSmallest = numbers.findIndex((num) => num == Math.min(...numbers));
  newArr.splice(indexSmallest, 1);
  return newArr;
}

// Should return: [2,3,4,5]
console.log(removeSmallest([1, 2, 3, 4, 5]));

// Should return: [5,3,2,4]
console.log(removeSmallest([5, 3, 2, 1, 4]));

// Should return: [2,2,2,1]
console.log(removeSmallest([2, 2, 1, 2, 1]));
