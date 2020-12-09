/**
 * Title: Reverse String
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/reverseString
 */

let solution = (str) => {
  let reversedStr = '';

  for (let i = str.length; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }

  return reversedStr;
};

// Should return: "ereht olleh"
console.log(solution('hello there'));
