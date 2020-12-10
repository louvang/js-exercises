/**
 * Title: Factorialize a Number
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
 */

function factorialize(num) {
  let ans = 1;

  for (let i = 1; i <= num; i++) {
    ans *= i;
  }

  return ans;
}

// Should return: 120
console.log(factorialize(5));

// Should return: 3628800
console.log(factorialize(10));

// Should return: 2432902008176640000
console.log(factorialize(20));

// Should return: 1
console.log(factorialize(0));
