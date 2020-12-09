# js-exercises

A compilation of solutions for JavaScript exercises from [Codewars](https://codewars.com), [freeCodeCamp](https://freecodecamp.com), [The Odin Project](https://theodinproject.com), and more.

Each solution will have a title and link to the problem at the top of the file in the following format:

```javascript
/**
 * Title:
 * Link:
 */
```

Depending on where the exercise is from, I may add additional information. Codewars, for example, categorizes each exercise as 8-1 kyu, with 8 being the easiest exercise and 1 being the most difficult. I will also add extra notes if certain solutions require explaining.

At the bottom of the file, there will be multiple `console.log` tests with the expected solution. It will be formatted as such:

```javascript
// Should return: 2
console.log(addNums(1, 1));

// Should return: 78
console.log(addNums(75, 3));

// Should return: 23
console.log(addNums(4, 19));
```

The solutions are all listed below and sorted via various JavaScript concepts and methods. Some solutions may be listed multiple times. I've compiled these exercises as an easy reference for me should I get stuck anywhere during my future code endeavours.

If navigating via JavaScript concepts and methods isn't your cup of tea, you can navigate through the directories. I've sorted each solution by the location I've received the exercise from (Codewars, freeCodeCamp, The Odin Project, etc.).

## Solutions

- [Loops](#loops)
- [Regex](#regex)
- [String Methods](#string-methods)
- [Number/Math Methods](#numbermath-methods)
- [Array Methods](#array-methods)
- [Misc Methods](misc-methods)
- [Objects](#objects)
- [Constructors](#constructors)
- [Other](#other)

#### Loops

- [Fibonacci](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/fibonacci.js) (Codewars) - looping to add elements to an array
- [Mexican Wave](https://github.com/voidteddy/js-exercises/blob/main/codewars/mexican-wave.js) (Codewars) - looping through string characters
- [Multiples of 3 and 5](https://github.com/voidteddy/js-exercises/blob/main/codewars/multiples-of-3-or-5.js) (Codewars) - finding the sum: `sum += i`
- [Palindromes](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/palindromes.js) (The Odin Project) - looping to add elements to an array
- [Repeat String](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/repeat-string.js) (The Odin Project) - looping to repeat a string
- [Reverse String](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/reverse-string.js) (The Odin Project) - looping to add strings to a string
- [Sum All](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/sum-all.js) (The Odin Project) - looping to find sum

#### Regex

- [Exes and Ohs](https://github.com/voidteddy/js-exercises/blob/main/codewars/exes-and-ohs.js) (Codewars) - `String.match()`, match specific letter regardless of case: `/o/gi`, `/x/gi`
- [Mexican Wave](https://github.com/voidteddy/js-exercises/blob/main/codewars/mexican-wave.js) (Codewars) - `String.match()`, match one letter regardless of case: `/[a-z]/i`
- [Replace with Alphabet Position](https://github.com/voidteddy/js-exercises/blob/main/codewars/replace-with-alphabet-position.js) (Codewars) - `String.match()`, match multiple letters regardless of case: `/[a-z]/gi`

#### String Methods

- [Bit Counting](https://github.com/voidteddy/js-exercises/blob/main/codewars/bit-counting.js) (Codewars) - `String.split()`
- [Caesar Cipher](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/caesar-cipher.js) (The Odin Project) - `String.fromCharCode()`, `String.charCodeAt()`
- [Detect Pangram](https://github.com/voidteddy/js-exercises/blob/main/codewars/detect-pangram.js) (Codewars) - `String.split()`
- [Jaden Casing Strings](https://github.com/voidteddy/js-exercises/blob/main/codewars/jaden-case.js) (Codewars) - `String.split()`, creating string method: `String.prototype.myOwnMethod()`
- [Mexican Wave](https://github.com/voidteddy/js-exercises/blob/main/codewars/mexican-wave.js) (Codewars) - `String.toUpperCase()`, `String.slice()`
- [Mumbling](https://github.com/voidteddy/js-exercises/blob/main/codewars/mumbling.js) (Codewars) - `String.toLowerCase()`, `String.toUpperCase()`, `String.repeat()`
- [Reverse String](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/reverse-string.js) (The Odin Project) - `String.charAt()`
- [Shortest Word](https://github.com/voidteddy/js-exercises/blob/main/codewars/shortest-word.js) (Codewars) - `String.split()`
- [Stop gninnipS My sdroW!](https://github.com/voidteddy/js-exercises/blob/main/codewars/stop-spinning-my-words.js) (Codewars) - `String.split()`

#### Number/Math Methods

- [Bit Counting](https://github.com/voidteddy/js-exercises/blob/main/codewars/bit-counting.js) (Codewars) - `Number.toString(2)`
- [Calculator](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/calculator.js) (The Odin Project) - `Math.pow()`
- [Find the Next Perfect Square](https://github.com/voidteddy/js-exercises/blob/main/codewars/find-the-next-perfect-square.js) (Codewars) - `Math.sqrt()`
- [Remove the Minimum](https://github.com/voidteddy/js-exercises/blob/main/codewars/remove-the-minimum.js) (Codewars) - `Math.min()`
- [Shortest Word](https://github.com/voidteddy/js-exercises/blob/main/codewars/shortest-word.js) (Codewars) - `Math.min()`
- [Temp Conversion](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/temp-conversion.js) (Codewars) - `Number.toFixed()`

#### Array Methods

- [Bit Counting](https://github.com/voidteddy/js-exercises/blob/main/codewars/bit-counting.js) (Codewars) - `Array.reduce()`
- [Caesar Cipher](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/caesar-cipher.js) (The Odin Project) - `Array.map()`, `Array.join()`
- [Calculator](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/calculator.js) (The Odin Project) - `Array.reduce()`, `Array.push()`
- [Detect Pangram](https://github.com/voidteddy/js-exercises/blob/main/codewars/detect-pangram.js) (Codewars) - `Array.every()`
- [Find the Oldest](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/find-the-oldest.js) (The Odin Project) - `Array.reduce()`
- [Friend or Foe?](https://github.com/voidteddy/js-exercises/blob/main/codewars/friend-or-foe.js) (Codewars) - `Array.filter()`
- [Get the Titles](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/get-the-titles.js) (The Odin Project) - `Array.map()`
- [Jaden Casing Strings](https://github.com/voidteddy/js-exercises/blob/main/codewars/jaden-case.js) (Codewars) - `Array.map()`, `Array.join()`
- [Mexican Wave](https://github.com/voidteddy/js-exercises/blob/main/codewars/mexican-wave.js) (Codewars) - `Array.push()`
- [Multiples of 3 and 5](https://github.com/voidteddy/js-exercises/blob/main/codewars/multiples-of-3-or-5.js) (Codewars) - finding the sum: `Array.reduce()`
- [Mumbling](https://github.com/voidteddy/js-exercises/blob/main/codewars/mumbling.js) (Codewars) - `Array.map()`, `Array.join()`
- [Remove from Array](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/remove-from-array.js) (The Odin Project) - `Array.splice()`, `Array.indexOf()`
- [Remove the Minimum](https://github.com/voidteddy/js-exercises/blob/main/codewars/remove-the-minimum.js) (Codewars) - `Array.findIndex()`, `Array.splice()`
- [Replace with Alphabet Position](https://github.com/voidteddy/js-exercises/blob/main/codewars/replace-with-alphabet-position.js) (Codewars) - `Array.map()`, `Array.join()`
- [Shortest Word](https://github.com/voidteddy/js-exercises/blob/main/codewars/shortest-word.js) (Codewars) - `Array.map()`
- [Stop gninnipS My sdroW!](https://github.com/voidteddy/js-exercises/blob/main/codewars/stop-spinning-my-words.js) (Codewars) - `Array.map()`, `Array.reverse()`, `Array.join()`
- [Vasya Clerk](https://github.com/voidteddy/js-exercises/blob/main/codewars/vasya-clerk.js) (Codewars) - `Array.forEach()`

#### Misc Methods

- [Find the Oldest](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/find-the-oldest.js) (The Odin Project) - `Date.getFullYear()`

#### Objects

- [Get the Titles](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/get-the-titles.js) (The Odin Project) - get titles from an array of objects: `Array.map()`
- [Vasya Clerk](https://github.com/voidteddy/js-exercises/blob/main/codewars/vasya-clerk.js) (Codewars) - `switch` statement

#### Constructors

- [Find the Oldest](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/find-the-oldest.js) (The Odin Project) - `Date()`

#### Other

- [Find the Oldest](https://github.com/voidteddy/js-exercises/blob/main/the-odin-project/leap-years.js) (The Odin Project) - `if` statements
