/**
 * Title: Find the Oldeset
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/findTheOldest
 */

const findTheOldest = function () {
  let people = arguments[0];
  let oldest = people.reduce((prev, curr) => {
    !curr.yearOfDeath ? (curr.yearOfDeath = new Date().getFullYear()) : null;
    !prev.yearOfDeath ? (prev.yearOfDeath = new Date().getFullYear()) : null;

    return prev.yearOfDeath - prev.yearOfBirth <
      curr.yearOfDeath - curr.yearOfBirth
      ? curr
      : prev;
  });

  return oldest.name;
};

const people = [
  {
    name: 'Carly',
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// Should return: "Ray"
console.log(findTheOldest(people));

const people2 = [
  {
    name: 'Carly',
    yearOfBirth: 2018,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// Should return: "Ray"
console.log(findTheOldest(people2));

const people3 = [
  {
    name: 'Carly',
    yearOfBirth: 1066,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// Should return: Carly
console.log(findTheOldest(people3));
