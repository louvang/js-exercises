/**
 * Title: Get the Titles
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/getTheTitles
 */

const getTheTitles = function () {
  return arguments[0].map((obj) => obj.title);
};

const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  },
];

// Should return: ['Book','Book2']
console.log(getTheTitles(books));
