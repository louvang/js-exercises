/**
 * Title: Repeat a String
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
 * Note: The exercise requests not to use the 'repeat()' method.
 */

function repeatStringNumTimes(str, num) {
  let newStr = '';

  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  return newStr;
}

// Should return: "***"
console.log(repeatStringNumTimes('*', 3));

// Should return: "abcabcabc"
console.log(repeatStringNumTimes('abc', 3));

// Should return: "abcabcabcabc"
console.log(repeatStringNumTimes('abc', 4));

// Should return: ""
console.log(repeatStringNumTimes('abc', -2));

// Should return: ""
console.log(repeatStringNumTimes('abc', 0));

// Should return: "********""
console.log(repeatStringNumTimes('*', 8));
