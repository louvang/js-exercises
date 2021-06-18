/**
 * Title: Format a string of names
 * Link: https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
 * Kata Level: 6 kyu
 */

function list(names) {
  return names
    .map((person, index) => {
      if (index === names.length - 2) {
        return `${person.name} & `;
      } else if (index === names.length - 1) {
        return person.name;
      } else {
        return `${person.name}, `;
      }
    })
    .join('');
}

// Should return: 'Bart, Lisa, Maggie, Homer & Marge'
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));

// Should return: 'Bart, Lisa & Maggie'
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));

// Should return: 'Bart & Lisa'
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));

// Should return: 'Bart'
console.log(list([{ name: 'Bart' }]));

// Should return: ''
console.log(list([]));
