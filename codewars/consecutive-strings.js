/**
 * Title: Consecutive strings
 * Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
 * Kata Level: 6 kyu
 */

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  let conArr = [];
  for (let i = 0; i < strarr.length; i++) {
    let str = strarr[i];

    if (i <= strarr.length - k) {
      for (let j = i + 1; j < i + k; j++) {
        if (strarr[j] !== undefined) {
          str += strarr[j];
        }
      }
      conArr.push(str);
    }
  }

  let lengthArr = conArr.map((str) => str.length);
  let max = Math.max(...lengthArr);

  let longestStr = conArr.find((str) => {
    return str.length === max;
  });

  return longestStr;
}

// Should return: "abigailtheta"
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2));

// Should return: "ixoyx3452zzzzzzzzzzzz"
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3));

// Should return: "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1));

// Should return: "ixoyx3452zzzzzzzzzzzz"
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3));

// Should return: "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(
  longestConsec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2)
);

// Should return: ""
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15));

// Should return: ""
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0));

// Should return: ""
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2));
