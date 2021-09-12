/**
 * Title: Encrypt this!
 * Link: https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
 * Kata Level: 6 kyu
 */

function encryptThis(text) {
  return text
    .split(' ')
    .map((word) => {
      if (word.length === 1) {
        return word.charCodeAt(0);
      } else if (word.length === 2) {
        return word.charCodeAt(0) + word[1];
      } else {
        let encryptedWord = word.charCodeAt(0) + word[word.length - 1];

        for (let i = 2; i < word.length - 1; i++) {
          encryptedWord += word[i];
        }

        return (encryptedWord += word[1]);
      }
    })
    .join(' ');
}

// Should return: "72olle"
console.log(encryptThis('Hello'));

// Should return: "103doo"
console.log(encryptThis('good'));

// Should return: "104olle 119drlo"
console.log(encryptThis('hello world'));

// Should return: "65"
console.log(encryptThis('A'));

// Should return: "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis('A wise old owl lived in an oak'));

// Should return: "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis('The less he spoke the more he heard'));

// Should return: "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
console.log(encryptThis('Thank you Piotr for all your help'));
