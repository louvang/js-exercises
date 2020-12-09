/**
 * Title: Remove from Array
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/removeFromArray
 */

let solution = (arr, el) => {
  arr.splice(arr.indexOf(el), 1);
  return arr;
};

// Should return: [1,2,4]
console.log(solution([1, 2, 3, 4], 3));
