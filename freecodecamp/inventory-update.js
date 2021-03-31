/**
 * Title: Inventory Update
 * Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
 */

function updateInventory(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let index = -1;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i][1] === arr1[j][1]) {
        index = j;
      }
    }

    if (index > -1) {
      arr1[index][0] += arr2[i][0];
    } else {
      arr1.push(arr2[i]);
    }
  }

  arr1.sort((a, b) => a[1].localeCompare(b[1]));

  return arr1;
}

// Example inventory lists
let curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

let newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

// Should return: [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
console.table(updateInventory(curInv, newInv));
