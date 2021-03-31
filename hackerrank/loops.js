/**
 * Title: Loops
 * Link: https://www.hackerrank.com/challenges/js10-loops/problem
 */

function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let v = [];
  let c = [];

  for (let i = 0; i < s.length; i++) {
    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (s[i] === vowels[j]) {
        isVowel = true;
      }
    }

    if (isVowel) {
      v.push(s[i]);
    } else {
      c.push(s[i]);
    }
  }

  [...v, ...c].forEach((letter) => console.log(letter));

  return;
}

// Should return a console log of all vowels in order and then all consonants in order
vowelsAndConsonants('javascriptloops');
