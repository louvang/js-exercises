// /**
//  * Title: Buttons Container
//  * Link: https://www.hackerrank.com/challenges/js10-buttons-container/problem
//  */

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');

let arr = [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4];

btn5.addEventListener('click', () => {
  let temp1, temp2;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      temp1 = arr[i].innerHTML;
      arr[i].innerHTML = arr[arr.length - 1].innerHTML;
    } else if (i % 2 !== 0) {
      temp2 = arr[i].innerHTML;
      arr[i].innerHTML = temp1;
    } else {
      temp1 = arr[i].innerHTML;
      arr[i].innerHTML = temp2;
    }
  }
});
