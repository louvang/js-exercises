/**
 * Title: Mutations
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
 * Note: Despite the title, this exercise has absolutely nothing to do with array and object mutations.
 */

function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();

  for (let i = 0; i < word2.length; i++) {
    if (word1.indexOf(word2[i]) === -1) {
      return false;
    }
  }

  return true;
}

// Should return: false
console.log(mutation(['hello', 'hey']));

// Should return: true
console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));

// Should return: true
console.log(mutation(['Mary', 'Army']));

// Should return: true
console.log(mutation(['Mary', 'Aarmy']));

// Should return: true
console.log(mutation(['Alien', 'line']));

// Should return: true
console.log(mutation(['floor', 'for']));

// Should return: false
console.log(mutation(['hello', 'neo']));

// Should return: false
console.log(mutation(['voodoo', 'no']));

// Should return: false
console.log(mutation(['Tiger', 'Zebra']));

// Should return: true
console.log(mutation(['Noel', 'Ole']));
