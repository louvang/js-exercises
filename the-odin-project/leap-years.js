/**
 * Title: Leap Years
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/leapYears
 */

let solution = (year) => {
  if (year % 4 === 0) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// returns true
console.log(solution(2020));

// returns true
console.log(solution(2000));

// returns false
console.log(solution(1985));

// returns false
console.log(solution(1900));
