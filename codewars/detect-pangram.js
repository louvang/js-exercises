/**
 * Title: Detect Pangram
 * Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
 * Kata Level: 6 kyu
 */

function isPangram(string) {
  string = string.toLowerCase();
  let alphabet = 'abcdefjhijklmnopqrstuvwxyz';
  return alphabet.split('').every((letter) => string.indexOf(letter) >= 0);
}

// Should return: true
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));

// Should return: false
console.log(isPangram('This is not a pangram.')); // false
