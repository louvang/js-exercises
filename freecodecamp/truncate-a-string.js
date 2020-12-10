/**
 * Title: Truncate a String
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
 */

function truncateString(str, num) {
  return num >= str.length ? str : str.slice(0, num) + '...';
}

// Should return: "A-tisket..."
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));

// Should return: "Peter Piper..."
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));

// Should return: "A-tisket a-tasket A green and yellow basket"
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
);

// Should return: "A-tisket a-tasket A green and yellow basket"
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  )
);

// Should return: "A..."
console.log(truncateString('A-', 1));

// Should return: "Ab..."
console.log(truncateString('Absolutely Longer', 2));
