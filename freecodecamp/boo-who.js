/**
 * Title: Boo who
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
 */

function booWho(bool) {
  return typeof bool === 'boolean';
}

// Should return: true
console.log(booWho(true));

// Should return: true
console.log(booWho(false));

// Should return: false
console.log(booWho([1, 2, 3]));

// Should return: false
console.log(booWho([].slice));

// Should return: false
console.log(booWho({ a: 1 }));

// Should return: false
console.log(booWho(1));

// Should return: false
console.log(booWho(NaN));

// Should return: false
console.log(booWho('a'));

// Should return: false
console.log(booWho('true'));

// Should return: false
console.log(booWho('false'));
