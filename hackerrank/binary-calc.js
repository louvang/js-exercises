/**
 * Title: Binary Calculator
 * Link: https://www.hackerrank.com/challenges/js10-binary-calculator?hr_b=1
 */

const res = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

btn0.addEventListener('click', () => {
  res.innerHTML += '0';
});

btn1.addEventListener('click', () => {
  res.innerHTML += '1';
});

btnClr.addEventListener('click', () => {
  res.innerHTML = '';
});

btnEql.addEventListener('click', () => {
  let exp = res.innerHTML;
  let binaryReg = /\d+/g;
  let operandReg = /[+\-*/]/;

  let matches = exp.match(binaryReg);
  let operand = exp.match(operandReg)[0];

  let op1 = parseInt(matches[0], 2);
  let op2 = parseInt(matches[1], 2);

  if (operand === '+') {
    res.innerHTML = (op1 + op2).toString(2);
  } else if (operand === '-') {
    res.innerHTML = (op1 - op2).toString(2);
  } else if (operand === '*') {
    res.innerHTML = (op1 * op2).toString(2);
  } else if (operand === '/') {
    res.innerHTML = (op1 / op2).toString(2);
  }
});

btnSum.addEventListener('click', () => {
  res.innerHTML += '+';
});

btnSub.addEventListener('click', () => {
  res.innerHTML += '-';
});

btnMul.addEventListener('click', () => {
  res.innerHTML += '*';
});

btnDiv.addEventListener('click', () => {
  res.innerHTML += '/';
});
