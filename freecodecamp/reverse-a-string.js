/**
 * Title: Reverse a String
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
 */

function reverseString(str) {
  let rStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    rStr += str.charAt(i);
  }

  return rStr;
}

// Should return: "olleh"
console.log(reverseString('hello'));

// Should return: "ydwoH"
console.log(reverseString('Howdy'));

// Should return: "htraE morf sgniteerG"
console.log(reverseString('Greetings from Earth'));
