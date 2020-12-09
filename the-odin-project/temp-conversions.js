/**
 * Title: Temp Conversion
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/tempConversion
 */

let ftoc = (f) => {
  let ans = (f - 32) * (5 / 9);

  if (ans % 1 !== 0) {
    return ans.toFixed(1);
  } else {
    return ans;
  }
};

let ctof = (c) => {
  let ans = c * (9 / 5) + 32;

  if (ans % 1 !== 0) {
    return ans.toFixed(1);
  } else {
    return ans;
  }
};

// Should return: 37.8
console.log(ftoc(100));

// Should return: 0
console.log(ftoc(32));

// Should return: 32
console.log(ctof(0));
