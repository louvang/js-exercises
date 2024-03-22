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

Note: Some solutions may not have a console case to test against such as many of the solutions for HackerRank.

The solutions are all listed below and categorized via various JavaScript concepts and methods. Some solutions may be listed multiple times.

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

- [Consecutive Strings](https://github.com/louvang/js-exercises/blob/main/codewars/consecutive-strings.js) (Codewars) - loops
- [Factorialize a Number](https://github.com/louvang/js-exercises/blob/main/freecodecamp/factorialize-a-number.js) (freeCodeCamp) - looping to multiply numbers
- [Fibonacci](https://github.com/louvang/js-exercises/blob/main/the-odin-project/fibonacci.js) (The Odin Project) - looping to add elements to an array
- [Find the Index of the First Occurrence in a String](https://github.com/louvang/js-exercises/blob/main/leetcode/index-first-occurence.js) (LeetCode) - loop through letters of an array to ensure sequence matches string
- [Inventory Update](https://github.com/louvang/js-exercises/blob/main/freecodecamp/inventory-update.js) (freeCodeCamp) - loop through multiple 2D arrays
- [Inventory Update](https://github.com/louvang/js-exercises/blob/main/hackerrank/loops.js) (HackerRank) - loop within a loop
- [Merge Strings Alternately](https://github.com/louvang/js-exercises/blob/main/leetcode/merge-strings-alternately.js) (LeetCode) - loop through each character to create new string
- [Mexican Wave](https://github.com/louvang/js-exercises/blob/main/codewars/mexican-wave.js) (Codewars) - looping through string characters
- [Monotonic Array](https://github.com/louvang/js-exercises/blob/main/leetcode/monotonic-array.js) (LeetCode) - for loop
- [Move Zeroes](https://github.com/louvang/js-exercises/blob/main/leetcode/move-zeroes.js) (LeetCode) - for loop
- [Multiples of 3 and 5](https://github.com/louvang/js-exercises/blob/main/codewars/multiples-of-3-or-5.js) (Codewars) - finding the sum: `sum += i`
- [Palindromes](https://github.com/louvang/js-exercises/blob/main/the-odin-project/palindromes.js) (The Odin Project) - looping to add elements to an array
- [Plus One](https://github.com/louvang/js-exercises/blob/main/leetcode/plus-one.js) (LeetCode) - for loop
- [Repeat a String Repeat a String](https://github.com/louvang/js-exercises/blob/main/freecodecamp/repeat-string.js) (freeCodeCamp) - looping to repeat a string
- [Repeat String](https://github.com/louvang/js-exercises/blob/main/the-odin-project/repeat-string.js) (The Odin Project) - looping to repeat a string
- [Repeated Substring Pattern](https://github.com/louvang/js-exercises/blob/main/leetcode/repeated-substring-pattern.js) (LeetCode) - while and for loop
- [Reverse a String](https://github.com/louvang/js-exercises/blob/main/freecodecamp/reverse-a-string.js) (freeCodeCamp) - looping to add strings to a string
- [Reverse String](https://github.com/louvang/js-exercises/blob/main/the-odin-project/reverse-string.js) (The Odin Project) - looping to add strings to a string
- [Sum All](https://github.com/louvang/js-exercises/blob/main/the-odin-project/sum-all.js) (The Odin Project) - looping to find sum
- [Where Do I Belong](https://github.com/louvang/js-exercises/blob/main/freecodecamp/where-do-i-belong.js) (freeCodeCamp) - looping through array to find index

#### Regex

- [Begins and Ends with the Same Vowel](https://github.com/louvang/js-exercises/blob/main/hackerrank/regexp-1.js) (HackerRank) - anchors (`^` and `$`), backreference (`\1`), `i` flag to ignore case, `m` flag for multiline (so that anchors work)
- [Break camelCase](https://github.com/louvang/js-exercises/blob/main/codewars/break-camelCase.js) (Codewars) - `String.replace()`, capture group within the `()` is referred to as `$1`
- [Dubstep](https://github.com/louvang/js-exercises/blob/main/codewars/dubstep.js) (Codewars) - `{2,}` quantifier meaning two or more of, `String.replace()`, `String.trim()`
- [Exes and Ohs](https://github.com/louvang/js-exercises/blob/main/codewars/exes-and-ohs.js) (Codewars) - `String.match()`, match specific letter regardless of case: `/o/gi`, `/x/gi`
- [Find Integers](https://github.com/louvang/js-exercises/blob/main/hackerrank/regexp-3.js) (HackerRank) - `String.match()`
- [Mexican Wave](https://github.com/louvang/js-exercises/blob/main/codewars/mexican-wave.js) (Codewars) - `String.match()`, match one letter regardless of case: `/[a-z]/i`
- [Proper Prefix](https://github.com/louvang/js-exercises/blob/main/hackerrank/regexp-2.js) (HackerRank) - `^`, `||`, `$`, `RegExp.test()`
- [Replace with Alphabet Position](https://github.com/louvang/js-exercises/blob/main/codewars/replace-with-alphabet-position.js) (Codewars) - `String.match()`, match multiple letters regardless of case: `/[a-z]/gi`
- [String Incrementer](https://github.com/louvang/js-exercises/blob/main/codewars/string-incrementer.js) (Codewars) - `String.replace()`, `String.match()`

#### String Methods

- [Bit Counting](https://github.com/louvang/js-exercises/blob/main/codewars/bit-counting.js) (Codewars) - `String.split()`
- [Caesar Cipher](https://github.com/louvang/js-exercises/blob/main/the-odin-project/caesar-cipher.js) (The Odin Project) - `String.fromCharCode()`, `String.charCodeAt()`
- [Confirm the Ending](https://github.com/louvang/js-exercises/blob/main/freecodecamp/confirm-the-ending.js) (freeCodeCamp) - `String.slice()`
- [Detect Pangram](https://github.com/louvang/js-exercises/blob/main/codewars/detect-pangram.js) (Codewars) - `String.split()`
- [Jaden Casing Strings](https://github.com/louvang/js-exercises/blob/main/codewars/jaden-case.js) (Codewars) - `String.split()`, creating string method: `String.prototype.myOwnMethod()`
- [Longest Palindrome](https://github.com/louvang/js-exercises/blob/main/codewars/longest-palindrome.js) (Codewars) - `String.slice()`
- [Mexican Wave](https://github.com/louvang/js-exercises/blob/main/codewars/mexican-wave.js) (Codewars) - `String.toUpperCase()`, `String.slice()`
- [Mumbling](https://github.com/louvang/js-exercises/blob/main/codewars/mumbling.js) (Codewars) - `String.toLowerCase()`, `String.toUpperCase()`, `String.repeat()`
- [Mutations](https://github.com/louvang/js-exercises/blob/main/freecodecamp/mutations.js) (freeCodeCamp) - `String.indexOf()`, `String.toLowerCase()`
- [Reverse String](https://github.com/louvang/js-exercises/blob/main/the-odin-project/reverse-string.js) (The Odin Project) - `String.charAt()`
- [Shortest Word](https://github.com/louvang/js-exercises/blob/main/codewars/shortest-word.js) (Codewars) - `String.split()`
- [Stop gninnipS My sdroW!](https://github.com/louvang/js-exercises/blob/main/codewars/stop-spinning-my-words.js) (Codewars) - `String.split()`
- [Title Casing a Sentence](https://github.com/louvang/js-exercises/blob/main/freecodecamp/title-casing.js) (freeCodeCamp) - `String.toLowerCase`, `String.toUpperCase()`, `String.slice()`,
- [Truncate a String](https://github.com/louvang/js-exercises/blob/main/freecodecamp/truncate-a-string.js) (freeCodeCamp) - `String.slice()`
- [Valid Anagram](https://github.com/louvang/js-exercises/blob/main/leetcode/valid-anagram.js) (LeetCode) - `String.split()`
- [Valid Parentheses](https://github.com/louvang/js-exercises/blob/main/codewars/valid-parentheses.js) (Codewars) - `String.replace()`, `String.indexOf()`, recursion

#### Number/Math Methods

- [Area and Perimeter of a Circle](https://github.com/louvang/js-exercises/blob/main/hackerrank/ap-circle.js) (HackerRank) - `Math.pow(base, exponent)`, `Math.PI`
- [Bit Counting](https://github.com/louvang/js-exercises/blob/main/codewars/bit-counting.js) (Codewars) - `Number.toString(2)`
- [Calculator](https://github.com/louvang/js-exercises/blob/main/the-odin-project/calculator.js) (The Odin Project) - `Math.pow()`
- [Find the Longest Word In a String](https://github.com/louvang/js-exercises/blob/main/freecodecamp/longest-word.js) (freeCodeCamp) - `Math.max()`
- [Find the Next Perfect Square](https://github.com/louvang/js-exercises/blob/main/codewars/find-the-next-perfect-square.js) (Codewars) - `Math.sqrt()`
- [Get Second Largest](https://github.com/louvang/js-exercises/blob/main/hackerrank/second-largest.js) (HackerRank) - `Math.max()`
- [Remove the Minimum](https://github.com/louvang/js-exercises/blob/main/codewars/remove-the-minimum.js) (Codewars) - `Math.min()`
- [Return the Largest Numbers in Arrays](https://github.com/louvang/js-exercises/blob/main/freecodecamp/largest-numbers.js) (freeCodeCamp) - `Math.max()`
- [Shortest Word](https://github.com/louvang/js-exercises/blob/main/codewars/shortest-word.js) (Codewars) - `Math.min()`
- [Temp Conversion](https://github.com/louvang/js-exercises/blob/main/the-odin-project/temp-conversion.js) (Codewars) - `Number.toFixed()`

#### Array Methods

- [Can Make Arithmetic Progression From Sequence](https://github.com/louvang/js-exercises/blob/main/leetcode/arithmetic-progression.js) (LeetCode) - `Array.sort()`, `Array.map()`, `Array.pop()`, `Array.every()`
- [Array.diff](https://github.com/louvang/js-exercises/blob/main/codewars/array-diff.js) (Codewars) - `Array.filter()`
- [Arrow Functions](https://github.com/louvang/js-exercises/blob/main/hackerrank/arrow-functions.js) (HackerRank) - `Array.map()`
- [Bit Counting](https://github.com/louvang/js-exercises/blob/main/codewars/bit-counting.js) (Codewars) - `Array.reduce()`
- [Categorize New Member](https://github.com/louvang/js-exercises/blob/main/codewars/categorize-new-member.js) (Codewars) - `Array.map()`
- [Caesar Cipher](https://github.com/louvang/js-exercises/blob/main/the-odin-project/caesar-cipher.js) (The Odin Project) - `Array.map()`, `Array.join()`
- [Calculator](https://github.com/louvang/js-exercises/blob/main/the-odin-project/calculator.js) (The Odin Project) - `Array.reduce()`, `Array.push()`
- [Chunky Monkey](https://github.com/louvang/js-exercises/blob/main/freecodecamp/chunky-monkey.js) (freeCodeCamp) - `Array.push()`
- [Create Objects](https://github.com/louvang/js-exercises/blob/main/hackerrank/count-objects.js) (HackerRank) - `Array.filter()`
- [Detect Pangram](https://github.com/louvang/js-exercises/blob/main/codewars/detect-pangram.js) (Codewars) - `Array.every()`
- [Encrypt This!](https://github.com/louvang/js-exercises/blob/main/codewars/encrypt-this.js) (Codewars) - `Array.map()`
- [Find the Difference](https://github.com/louvang/js-exercises/blob/main/leetcode/find-the-difference.js) (LeetCode) - `Array.forEach()`, `Array.findIndex()`
- [Find the Index of the First Occurrence in a String](https://github.com/louvang/js-exercises/blob/main/leetcode/index-first-occurence.js) (LeetCode) - `Array.findIndex`
- [Find the Longest Word In a String](https://github.com/louvang/js-exercises/blob/main/freecodecamp/longest-word.js) (freeCodeCamp) - `Array.map()`
- [Find the Middle](https://github.com/louvang/js-exercises/blob/main/codewars/find-the-middle.js) (Codewars) - `Array.findIndex()`
- [Find the Oldest](https://github.com/louvang/js-exercises/blob/main/the-odin-project/find-the-oldest.js) (The Odin Project) - `Array.reduce()`
- [Finders Keepers](https://github.com/louvang/js-exercises/blob/main/freecodecamp/finders-keepers.js) (freeCodeCamp) - `Array.find()`
- [Format a String of Names](https://github.com/louvang/js-exercises/blob/main/codewars/format-string-of-names.js) (Codewars) - `Array.map()`
- [Friend or Foe?](https://github.com/louvang/js-exercises/blob/main/codewars/friend-or-foe.js) (Codewars) - `Array.filter()`
- [Get Second Largest](https://github.com/louvang/js-exercises/blob/main/hackerrank/second-largest.js) (HackerRank) - `Array.filter()`
- [Get the Titles](https://github.com/louvang/js-exercises/blob/main/the-odin-project/get-the-titles.js) (The Odin Project) - `Array.map()`
- [Help the Bookseller](https://github.com/louvang/js-exercises/blob/main/codewars/help-the-bookseller.js) (Codewars) - `Array.map()`, `Array.filter()`, `Array.reduce()`
- [Jaden Casing Strings](https://github.com/louvang/js-exercises/blob/main/codewars/jaden-case.js) (Codewars) - `Array.map()`, `Array.join()`
- [Mexican Wave](https://github.com/louvang/js-exercises/blob/main/codewars/mexican-wave.js) (Codewars) - `Array.push()`
- [Monotonic Array](https://github.com/louvang/js-exercises/blob/main/leetcode/monotonic-array.js) (LeetCode) - `Array.every()`
- [Multiples of 3 and 5](https://github.com/louvang/js-exercises/blob/main/codewars/multiples-of-3-or-5.js) (Codewars) - finding the sum: `Array.reduce()`
- [Mumbling](https://github.com/louvang/js-exercises/blob/main/codewars/mumbling.js) (Codewars) - `Array.map()`, `Array.join()`
- [Remove from Array](https://github.com/louvang/js-exercises/blob/main/the-odin-project/remove-from-array.js) (The Odin Project) - `Array.splice()`, `Array.indexOf()`
- [Remove the Minimum](https://github.com/louvang/js-exercises/blob/main/codewars/remove-the-minimum.js) (Codewars) - `Array.findIndex()`, `Array.splice()`
- [Repeated Substring Pattern](https://github.com/louvang/js-exercises/blob/main/leetcode/repeated-substring-pattern.js) (LeetCode) - `Array.every()`
- [Replace with Alphabet Position](https://github.com/louvang/js-exercises/blob/main/codewars/replace-with-alphabet-position.js) (Codewars) - `Array.map()`, `Array.join()`
- [Return the Largest Numbers in Arrays](https://github.com/louvang/js-exercises/blob/main/freecodecamp/largest-numbers.js) (freeCodeCamp) - `Array.map()`
- [Sign od Product of Array](https://github.com/louvang/js-exercises/blob/main/leetcode/sign-of-product.js) (LeetCode) - `Array.sum()`
- [Shortest Word](https://github.com/louvang/js-exercises/blob/main/codewars/shortest-word.js) (Codewars) - `Array.map()`
- [Slice and Splice](https://github.com/louvang/js-exercises/blob/main/freecodecamp/slice-and-splice.js) (freeCodeCamp) - `Array.splice()`
- [Stop gninnipS My sdroW!](https://github.com/louvang/js-exercises/blob/main/codewars/stop-spinning-my-words.js) (Codewars) - `Array.map()`, `Array.reverse()`, `Array.join()`
- [Supermarket Queue](https://github.com/louvang/js-exercises/blob/main/codewars/supermarket-queue.js) (Codewars) - `new Array(length)`, `Array.fill()`
- [Title Casing a Sentence](https://github.com/louvang/js-exercises/blob/main/freecodecamp/title-casing.js) (freeCodeCamp) - `Array.map()`, `Array.join()`
- [Valid Anagram](https://github.com/louvang/js-exercises/blob/main/leetcode/valid-anagram.js) (LeetCode) - `Array.sort()`, `Array.join()`
- [Vasya Clerk](https://github.com/louvang/js-exercises/blob/main/codewars/vasya-clerk.js) (Codewars) - `Array.forEach()`
- [Where Do I Belong](https://github.com/louvang/js-exercises/blob/main/freecodecamp/where-do-i-belong.js) (freeCodeCamp) - `Array.sort()`

#### Misc Methods

- [Dates](https://github.com/louvang/js-exercises/blob/main/hackerrank/date.js) (HackerRank) - `Date()`, `Date.getDay()`
- [Find the Oldest](https://github.com/louvang/js-exercises/blob/main/the-odin-project/find-the-oldest.js) (The Odin Project) - `Date.getFullYear()`

#### Objects

- [Count Characters in Your String](https://github.com/louvang/js-exercises/blob/main/codewars/count-chars.js) (Codewars) - adding props to an object
- [Get the Titles](https://github.com/louvang/js-exercises/blob/main/the-odin-project/get-the-titles.js) (The Odin Project) - get titles from an array of objects: `Array.map()`
- [Object Constructor Exercise](https://github.com/louvang/js-exercises/blob/main/the-odin-project/object-constructor.js) (The Odin Project) - dot notation, bracket notation
- [Create Objects](https://github.com/louvang/js-exercises/blob/main/hackerrank/count-objects.js) (HackerRank) - iterating through array of objects
- [Create a Rectangle Object](https://github.com/louvang/js-exercises/blob/main/hackerrank/rectangle-object.js) (HackerRank) - return an object
- [Roman to Integer](https://github.com/louvang/js-exercises/blob/main/leetcode/roman-to-integer.js) (LeetCode) - hash table
- [Who likes this?](https://github.com/louvang/js-exercises/blob/main/codewars/who-likes-this.js) (Codewars) - `switch` statement
- [Vasya Clerk](https://github.com/louvang/js-exercises/blob/main/codewars/vasya-clerk.js) (Codewars) - `switch` statement

#### Constructors

- [Find the Oldest](https://github.com/louvang/js-exercises/blob/main/the-odin-project/find-the-oldest.js) (The Odin Project) - `Date()`
- [Inheritance](https://github.com/louvang/js-exercises/blob/main/hackerrank/inheritance.js) (HackerRank) - `this`, `prototype`, `extends`, `super()`,
- [Object Constructor Exercise](https://github.com/louvang/js-exercises/blob/main/the-odin-project/object-constructor.js) (The Odin Project) - `new NameOfConstructor()`
- [Polygon Class](https://github.com/louvang/js-exercises/blob/main/hackerrank/polygon-class.js) (HackerRank) - `this`

#### Other

- [Convert Celsius to Fahrenheit](https://github.com/louvang/js-exercises/blob/main/freecodecamp/convert-ctof.js) (freeCodeCamp)
- [Binary Calculator](https://github.com/louvang/js-exercises/blob/main/hackerrank/binary-calc.js) (HackerRank) - DOM methods
- [Boo Who](https://github.com/louvang/js-exercises/blob/main/freecodecamp/boo-who.js) (freeCodeCamp) - `typeof` operator
- [Buttons Container](https://github.com/louvang/js-exercises/blob/main/hackerrank/buttons-container.js) (HackerRank) - DOM methods
- [Factorial](https://github.com/louvang/js-exercises/blob/main/hackerrank/factorial.js) (HackerRank) - recursion
- [Get Grade](https://github.com/louvang/js-exercises/blob/main/hackerrank/get-grade.js) (HackerRank) - if-else statements
- [Get Letter](https://github.com/louvang/js-exercises/blob/main/hackerrank/get-letter.js) (HackerRank) - switch statement
- [Multi-tap Keypad](https://github.com/louvang/js-exercises/blob/main/codewars/vasya-clerk.js) (Codewars) - objects, loops, array methods
- [Prefill an Array](https://github.com/louvang/js-exercises/blob/main/codewars/prefill-an-array.js) (Codewars) - `throw`, `new TypeError()`
- [Sum of Pairs](https://github.com/louvang/js-exercises/blob/main/codewars/sum-of-pairs.js) (Codewars) - memoization, convert object into array
- [Tagged Template Literals](https://github.com/louvang/js-exercises/blob/main/hackerrank/tagged-template-literals.js) (HackerRank) - `Math.sqrt()`, `Math.pow()`, `sort()`
- [Throw](https://github.com/louvang/js-exercises/blob/main/hackerrank/throw.js) (HackerRank) - try...catch statement
- [Valid Parentheses](https://github.com/louvang/js-exercises/blob/main/codewars/valid-parentheses.js) (Codewars) - `String.replace()`, `String.indexOf()`, recursion
