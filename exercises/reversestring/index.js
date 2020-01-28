// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
  var reverseString = '';
  for (var i = 0; i < str.length; i++) {
    reverseString = str[i] + reverseString;
  }
  return reverseString;
}
// function reverse(str) {
//   var reverseString = '';
//   for (let char of str) {
//     reverseString = char + reverseString;
//   }
//   return reverseString;
// }

// Solution 2
// function reverse(str) {
//   const str_list = str.split('');
//   return str_list.reverse().join('');
// }

// Solution 3
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

module.exports = reverse;
