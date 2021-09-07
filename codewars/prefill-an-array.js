/**
 * Title: Prefill an Array
 * Link: https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
 * Kata Level: 6 kyu
 */

function prefill(n, v) {
  if (n % 1 !== 0 || n < 0 || typeof n === 'boolean') {
    throw new TypeError(`${n} is invalid`);
  }

  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(v);
  }

  return arr;
}

// Should return: [1, 1, 1]
console.log(prefill(3, 1));

// Should return: ["abc", "abc"]
console.log(prefill(2, 'abc'));

// Should return: [1]
console.log(prefill('1', 1));

// Should return: [['2d','2d'],['2d','2d'],['2d','2d']]
console.log(prefill(3, prefill(2, '2d')));

// Should return: []
console.log(prefill(0, 1));

// Should return: "-10 is invalid"
console.log(prefill(-10, 'a'));

// Should return: "4.22019 is invalid"
console.log(prefill(4.22019, 'a'));

// Should return: "true is invalid"
console.log(prefill(true, 'a'));

// Should return: "xyz is invalid"
console.log(prefill('xyz', 1));
