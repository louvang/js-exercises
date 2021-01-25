/**
 * Title: Who Likes It?
 * Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 * Kata Level: 6 kyu
 */

function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// Should return: "no one likes this"
console.log(likes([]));

// Should return: "Peter likes this"
console.log(likes(['Peter']));

// Should return: "Jacob and Alex like this"
console.log(likes(['Jacob', 'Alex']));

// Should return: "Max, John and Mark like this"
console.log(likes(['Max', 'John', 'Mark']));

// Should return: "Alex, Jacob and 2 others like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
