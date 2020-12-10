/**
 * Title: Title Casing a Sentence
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
 */

function titleCase(str) {
  let arr = str.toLowerCase().split(' ');
  return arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// Should return: "I'm A Little Tea Pot"
console.log(titleCase("I'm a little tea pot"));

// Should return: "Short And Stout"
console.log(titleCase('sHoRt AnD sToUt'));

// Should return: "HERE IS MY HANDLE HERE IS MY SPOUT"
console.log(titleCase('Here Is My Handle Here Is My Spout'));
