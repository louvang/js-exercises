/**
 * Title: Slice and Splice
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice
 * Note: Originally used 'frankenArr = ...arr2' but since the title was "Slice and Splice", I used 'slice()' instead.
 */

function frankenSplice(arr1, arr2, n) {
  let frankenArr = arr2.slice();
  frankenArr.splice(n, 0, ...arr1);
  return frankenArr;
}

// Should return: [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2, 3], [4, 5], 1));

// Should return: ["a", 1, 2, "b"]
console.log(frankenSplice([1, 2], ['a', 'b'], 1));

// Should return: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(
  frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
);
