/**
 * Title: String incrementer
 * Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
 * Kata Level: 5 kyu
 */

function incrementString(str) {
  let num = str.match(/\d+/);

  if (num === null) {
    return str + '1';
  } else {
    let zeroNines = num[0].match(/[0][9]+/);
    let parsedNum = parseInt(num[0]);
    if (parsedNum === 0) {
      return str.substring(0, str.length - 1) + 1;
    } else if (zeroNines !== null) {
      return str.replace(zeroNines[0], parseInt(zeroNines[0]) + 1);
    }
    return str.replace(parsedNum, parsedNum + 1);
  }
}

// Should return: 'foobar001'
console.log(incrementString('foobar000'));

// Should return: 'foo1'
console.log(incrementString('foo'));

// Should return: 'foobar002'
console.log(incrementString('foobar001'));

// Should return: 'foobar100'
console.log(incrementString('foobar99'));

// Should return: 'foobar100'
console.log(incrementString('foobar099'));

// Should return: '1'
console.log(incrementString(''));
