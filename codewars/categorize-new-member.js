/**
 * Title: Categorize New Member
 * Link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
 * Kata Level: 7 kyu
 */

function openOrSenior(data) {
  return data.map((person) => {
    if (person[0] >= 55 && person[1] > 7) {
      return 'Senior';
    }
    return 'Open';
  });
}

// Should return: ["Open", "Open", "Senior", "Open", "Open", "Senior"]
console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);
