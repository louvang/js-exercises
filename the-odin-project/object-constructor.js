/**
 * Title: Object Constructor Exercise
 * Link: https://www.theodinproject.com/courses/javascript/lessons/objects-and-object-constructors#exercise
 */

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = () => `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`);
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 322, false);

// Should return: "The Hobbit"
console.log(theHobbit.title);

// Should return: "The Hobbit by J.R.R Tolkien, 322 pages, not read yet"
console.log(theHobbit.info());