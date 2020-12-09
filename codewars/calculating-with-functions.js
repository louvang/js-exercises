/**
 * Title: Calculating with Functions
 * Link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
 * Kata Level: 5 kyu
 * Note: I originally solved this exercise using 'eval()' but decided on the alternative 'new Function' to make it more secure (just in case).
 */

function zero() {
  return arguments.length > 0
    ? new Function(`return parseInt(0 ${arguments[0]})`)()
    : 0;
}
function one() {
  return arguments.length > 0
    ? new Function(`return parseInt(1 ${arguments[0]})`)()
    : 1;
}
function two() {
  return arguments.length > 0
    ? new Function(`return parseInt(2 ${arguments[0]})`)()
    : 2;
}
function three() {
  return arguments.length > 0
    ? new Function(`return parseInt(3 ${arguments[0]})`)()
    : 3;
}
function four() {
  return arguments.length > 0
    ? new Function(`return parseInt(4 ${arguments[0]})`)()
    : 4;
}
function five() {
  return arguments.length > 0
    ? new Function(`return parseInt(5 ${arguments[0]})`)()
    : 5;
}
function six() {
  return arguments.length > 0
    ? new Function(`return parseInt(6 ${arguments[0]})`)()
    : 6;
}
function seven() {
  return arguments.length > 0
    ? new Function(`return parseInt(7 ${arguments[0]})`)()
    : 7;
}
function eight() {
  return arguments.length > 0
    ? new Function(`return parseInt(8 ${arguments[0]})`)()
    : 8;
}
function nine() {
  return arguments.length > 0
    ? new Function(`return parseInt(9 ${arguments[0]})`)()
    : 9;
}
function plus() {
  return `+ ${arguments[0]}`;
}
function minus() {
  return `- ${arguments[0]}`;
}
function times() {
  return `* ${arguments[0]}`;
}
function dividedBy() {
  return `/ ${arguments[0]}`;
}

// Should return: 35
console.log(seven(times(five())));

// Should return: 13
console.log(four(plus(nine())));

// Should return: 5
console.log(eight(minus(three())));

// Should return: 3
console.log(six(dividedBy(two())));

// Should return: 0
console.log(four(dividedBy(eight())));
