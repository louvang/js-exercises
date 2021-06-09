/**
 * Title: Dates
 * Link: https://www.hackerrank.com/challenges/js10-date/problem
 */

function getDayName(dateString) {
  let dayName;
  let d = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayName = days[d.getDay()];
  return dayName;
}

// Should return: Sunday
console.log(getDayName('10/11/2009'));

// Should return: Wednesday
console.log(getDayName('11/10/2010'));
