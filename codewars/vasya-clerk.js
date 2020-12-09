/**
 * Title: Vasya Clerk
 * Link: https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8
 * Kata Level: 6 kyu
 */

function tickets(peopleInLine) {
  let till = {
    twentyFive: 0,
    fifty: 0,
    hundred: 0,
  };
  let able = 'YES';

  peopleInLine.forEach((bill) => {
    switch (bill) {
      case 25:
        till.twentyFive++;
        break;
      case 50:
        if (till.twentyFive >= 1) {
          till.fifty++;
          till.twentyFive--;
        } else if (till.twentyFive == 0) {
          able = 'NO';
        }
        break;
      case 100:
        if (till.twentyFive >= 1 && till.fifty >= 1) {
          till.hundred++;
          till.fifty--;
          till.twentyFive--;
        } else if (till.twentyFive >= 3) {
          till.hundred++;
          till.twentyFive -= 3;
        } else if (till.twentyFive == 0 || till.fifty == 0) {
          able = 'NO';
        }
        break;
    }
  });

  return able;
}

// Should return: YES
console.log(tickets([25, 25, 50, 50]));

// Should return: YES
console.log(tickets([25, 25, 50]));

// Should return: NO
console.log(tickets([25, 100]));

// Should return: NO
console.log(tickets([25, 25, 50, 50, 100]));

// Should return: NO
console.log(
  tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 50, 50, 100])
);

// Should return: YES
console.log(tickets([25, 25, 25, 25, 50, 100, 50]));
