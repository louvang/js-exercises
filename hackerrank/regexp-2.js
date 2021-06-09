/**
 * Title: RegExp II - Proper Prefix
 * Link: https://www.hackerrank.com/challenges/js10-regexp-2/problem
 */

function regexVar(str) {
  let re = /^((Mr)||(Mrs)||(Ms)||(Dr)||(Er))\.[A-Za-z]+$/;
  console.log(re.test(str));
  return re;
}

// Should return: true
regexVar('Mr.X');

// Should return: true
regexVar('Mrs.Y');

// Should return: false
regexVar('Dr#Joseph');

// Should return: false
regexVar('Er .Abc');

// Should return: false
regexVar('Er.Dr.');
