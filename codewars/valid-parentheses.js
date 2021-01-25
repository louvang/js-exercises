/**
 * Title: Valid Parentheses
 * Link: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
 * Kata Level: 5 kyu
 */

function validParentheses(parens) {
  if (parens.length == 0) return true;
  if (parens.length == 1) return false;
  
  let firstOpen = parens.indexOf("(");
  let firstEnd = parens.indexOf(")");

  if (firstOpen > firstEnd) return false;
  
  let newStr = parens.replace('(', '');
  newStr = newStr.replace(')', '');

  return validParentheses(newStr);
}


// Should return: true
console.log(validParentheses("()"));

// Should return: false
console.log(validParentheses(")(()))"));

// Should return: false
console.log(validParentheses("("));

// Should return: true 
console.log(validParentheses("(())((()())())"));

// Should return: false
console.log(validParentheses(")()()()("));

// Should return: false
console.log(validParentheses("())(()"));

// Should return: false
console.log(validParentheses(")"));

// Should return: false
console.log(validParentheses("("));