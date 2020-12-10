/**
 * Title: Chunky Monkey
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
 */

function chunkArrayInGroups(arr, size) {
  let group = [];
  let chunk = [];

  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);
    if (chunk.length == size || i == arr.length - 1) {
      group.push(chunk);
      chunk = [];
    }
  }

  return group;
}

// Should return: [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

// Should return: [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

// Should return: [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

// Should return: [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

// Should return: [[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

// Should return: [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

// Should return: [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
