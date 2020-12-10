/**
 * Title: Falsy Bouncer
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
 */

function bouncer(arr) {
  return arr.filter((element) => Boolean(element) == true);
}

// Should return: [7, "ate", 9]
console.log(bouncer([7, 'ate', '', false, 9]));

// Should return: ["a", "b", "c"]
console.log(bouncer(['a', 'b', 'c']));

// Should return: []
console.log(bouncer([false, null, 0, NaN, undefined, '']));

// Should return: [1, 2]
console.log(bouncer([null, NaN, 1, 2, undefined]));
