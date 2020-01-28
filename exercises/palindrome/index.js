// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Solution 2
// Not ideal solution because it's doing double work, rechecking char index after mid-point
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - 1 - i];
//   });
// };

module.exports = palindrome;
