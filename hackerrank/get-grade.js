/**
 * Title: Get Grade
 * Link: https://www.hackerrank.com/challenges/js10-if-else/problem
 */

function getGrade(score) {
  let grade;

  if (score > 25) {
    grade = 'A';
  } else if (score > 20) {
    grade = 'B';
  } else if (score > 15) {
    grade = 'C';
  } else if (score > 10) {
    grade = 'D';
  } else if (score > 5) {
    grade = 'E';
  } else {
    grade = 'F';
  }

  return grade;
}

// Should return: F
console.log(getGrade(4));

// Should return: E
console.log(getGrade(8));

// Should return: D
console.log(getGrade(14));

// Should return: C
console.log(getGrade(17));

// Should return: B
console.log(getGrade(25));

// Should return: A
console.log(getGrade(30));
