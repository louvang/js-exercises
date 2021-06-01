/**
 * Title: Break camelCase
 * Link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
 */

function breakCamelCase(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

// Should return: 'camel Casing'
console.log(breakCamelCase('camelCasing'));

// Should return: 'identifier'
console.log(breakCamelCase('identifier'));

// Should return: ''
console.log(breakCamelCase(''));

// Should return: ''
console.log(breakCamelCase('memoryAllAloneInTheMoonlight'));
