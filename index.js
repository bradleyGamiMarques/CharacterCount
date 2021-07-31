/**
 * Write a function that takes a string and returns the character counts of each
 * character in the string.
 */

/**
 * Understand the problem:
 * Can I restate the problem in my own words?
 * Given a string return the count of each character in the string.
 *
 * What are the inputs to this problem?
 * A string of n length where n is >= 1 and n <= 10000.
 *
 * What are the outputs that should come from the solution to the problem?
 * An object of key/value pairs where the key is the character and the value
 * is the number of occurrences in the string.
 *
 * Can the outputs be determined from the inputs?
 * No.
 *
 * Should I include non-alphanumeric characters? Only include alphanumeric
 * characters.
 *
 * Should I include capitalized characters as a different character?
 * No. Treat all alpha characters the same regardless of capitalization.
 *
 * How should I label important pieces of data that are a part of the program?
 * const characterCount = (str) => {}
 */

/**
 * Concrete examples:
 * str = 'h' return {h: 1}
 * str = 'aaaa' return {a: 4}
 * str = 'hi' return {h: 1, i: 1}
 * str = 'Hello World' return {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 * str = '' return {}
 */

/**
 * Break it down:
 * Explicitly write out the steps you need to take.
 */

// const characterCount = (str) => {
//   // Create an object to hold the result.
//   const result = {};
//   // Lowercase the string.
//   str = str.toLowerCase();
//   // Loop over the string and add the count of each character to our result.
//   for (char of str) {
//     if (result[char] > 0) {
//       result[char] ++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   // Return the result.
//   return result;
// };

/**
 * Solve and Simplify
 * If you can solve the problem right away great! But if not then solve a
 * simpler problem first then move on to where you are having difficulty.
 * Above I did not solve for alphanumeric only.
 */

/**
 *
 * @param {string} char - Character to test if is alphanumeric.
 * @return {boolean} - Boolean response if character is alphanumeric.
 */
const isAlphaNumeric = (char) => {
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) &&
     !(code > 64 && code < 91) &&
     !(code > 96 && code < 123)) {
    return false;
  }
  return true;
};

/**
 *
 * @param {string} str - A string of characters to count.
 * @return {object} - Object with key value pairs containing the character and
 * number of occurences.
 */
const characterCount = (str) => {
  // Create an object to hold the result.
  const result = {};
  // Lowercase the string.
  str = str.toLowerCase();
  // Loop over the string and add the count of each character to our result.
  for (char of str) {
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  // Return the result.
  return result;
};
console.log(characterCount('h'));
console.log(characterCount('aaaa'));
console.log(characterCount('hi'));
console.log(characterCount('Hello World'));
console.log(characterCount(''));
