/**
 * Title: Confirm the Ending
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
 * Note: The exercise requests not to use the 'endsWith()' method.
 */

function confirmEnding(str, target) {
  let ending = str.slice(str.length - target.length);
  return ending == target;
}

// Should return: true
console.log(confirmEnding('Bastian', 'n'));

// Should return: true
console.log(confirmEnding('Congratulation', 'on'));

// Should return: false
console.log(confirmEnding('Connor', 'n'));

// Should return: false
console.log(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  )
);

// Should return: true
console.log(confirmEnding('He has to give me a new name', 'name'));

// Should return: true
console.log(confirmEnding('Open sesame', 'same'));

// Should return: false
console.log(confirmEnding('Open sesame', 'sage'));

// Should return: false
console.log(confirmEnding('Open sesame', 'game'));

// Should return: false
console.log(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  )
);

// Should return: true
console.log(confirmEnding('Abstraction', 'action'));
