/**
 * Title: Finders Keepers
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
 */

function findElement(arr, func) {
  return arr.find(func);
}

// Should return: 8
console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);

// Should return: undefined
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
);
