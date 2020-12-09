/**
 * Title: Friend or Foe?
 * Link: https://www.codewars.com/kata/55b42574ff091733d900002f
 * Kata Level: 7 kyu
 */

function friend(friends) {
  return friends.filter((element) => element.length == 4);
}

// Should return: ["Ryan", "Mark"]
console.log(friend(['Ryan', 'Kieran', 'Mark']));

// ["Ryan"]
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']));

// ["Jimm", "Cari", "aret"]
console.log(
  friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
);

// Should return:  ["Love", "Your", "Face"]
console.log(friend(['Love', 'Your', 'Face', '1']));
