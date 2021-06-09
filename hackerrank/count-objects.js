/**
 * Title: Count Objects
 * Link: https://www.hackerrank.com/challenges/js10-count-objects/problem
 */

function getCount(objects) {
  let matches = objects.filter((obj) => {
    return obj.x === obj.y;
  });
  return matches.length;
}

// Should return: 2
let arr = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];
console.log(getCount(arr));
