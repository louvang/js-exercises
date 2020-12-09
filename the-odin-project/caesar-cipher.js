/**
 * Title: Caesar Cipher
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/caesar
 */

const caesar = function () {
  let str = arguments[0];
  let shift = arguments[1];
  let arr = str.split('');

  if (shift > 26) {
    shift = shift % 26;
  } else if (shift < -26) {
    shift = shift % 26;
  }

  arr = arr.map((char) => {
    let charCode = char.charCodeAt();
    let shiftedCharCode = charCode + shift;
    let newCharCode = 0;

    if (charCode >= 65 && charCode <= 90) {
      if (shiftedCharCode < 65) {
        newCharCode = 91 - (65 - shiftedCharCode);
      } else if (shiftedCharCode > 90) {
        newCharCode = 64 + (shiftedCharCode - 90);
      } else {
        newCharCode = charCode + shift;
      }
    } else if (charCode >= 97 && charCode <= 122) {
      if (shiftedCharCode < 97) {
        newCharCode = 123 - (97 - shiftedCharCode);
      } else if (shiftedCharCode > 122) {
        newCharCode = 96 + (shiftedCharCode - 122);
      } else {
        newCharCode = charCode + shift;
      }
    } else {
      newCharCode = charCode;
    }

    return String.fromCharCode(newCharCode);
  });

  return arr.join('');
};

// Should return: "B"
console.log(caesar('A', 1));

// Should return: "Bbb"
console.log(caesar('Aaa', 1));

// Should return: "Mjqqt, Btwqi!"
console.log(caesar('Hello, World!', 5));

// Should return: "Hello, World!"
console.log(caesar('Mjqqt, Btwqi!', -5));

// Should return: A
console.log(caesar('Z', 1));

// Should return: "Ebiil, Tloia!"
console.log(caesar('Hello, World!', 75));

// Should return: "Ebiil, Tloia!"
console.log(caesar('Hello, World!', -29));
