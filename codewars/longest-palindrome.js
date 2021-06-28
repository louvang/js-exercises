/**
 * Title: Longest Palindrome
 * Link: https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript
 * Kata Level: 6 kyu
 */

function longestPalindrome(s) {
  let rs = s.split('').reverse().join('');
  if (s === rs) {
    return s.length;
  }

  let max = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let chunk = s.slice(i, j);
      if (chunk.length > max && chunk[0] === chunk[chunk.length - 1]) {
        let rChunk = chunk.split('').reverse().join('');
        if (chunk === rChunk && chunk.length > max) {
          max = chunk.length;
        }
      }
    }
  }

  return max;
}

// Should return: 7
console.log(longestPalindrome('I like racecars that go fast'));

// Should return: 1
console.log(longestPalindrome('a'));

// Should return: 2
console.log(longestPalindrome('aa'));

// Should return: 2
console.log(longestPalindrome('baa'));

// Should return: 2
console.log(longestPalindrome('aab'));

// Should return: 4
console.log(longestPalindrome('baabcd'));

// Should return: 9
console.log(longestPalindrome('baablkj12345432133d'));

// Should return: 1
console.log(longestPalindrome('zyabyz'));

// Should return: 1
console.log(longestPalindrome('abcdefghba'));
