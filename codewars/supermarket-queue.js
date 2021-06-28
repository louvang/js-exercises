/**
 * Title: Supermarket Queue
 * Link: https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
 * Kata Level: 6 kyu
 */

function queueTime(customers, n) {
  let tills = new Array(n).fill(0);

  customers.forEach((customer) => {
    tills[0] += customer;
    tills.sort((a, b) => a - b);
  });

  return Math.max(...tills);
}

// Should return: 0
console.log(queueTime([], 1));

// Should return: 10
console.log(queueTime([1, 2, 3, 4], 1));

// Should return: 9
console.log(queueTime([2, 2, 3, 3, 4, 4], 2));

// Should return: 5
console.log(queueTime([1, 2, 3, 4, 5], 100));

// Should return: 10
console.log(queueTime([10, 2, 3, 3], 2));

// Should return: 12
console.log(queueTime([2, 3, 10], 2));
