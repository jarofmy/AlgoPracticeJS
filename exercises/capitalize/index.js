// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let str_list = str.split(' ')
  let new_list = [];
  for (let word of str_list) {
    let upper_word = word[0].toUpperCase() + word.slice(1)
    new_list.push(upper_word)
  }
  return new_list.join(' ')
}

// Solution 2
// function capitalize(str) {
//   let new_str = str[0].toUpperCase();
//   for(let i = 1; i < str.length; i++) {
//     if(str[i-1] === ' ') {
//       new_str += str[i].toUpperCase();
//     } else {
//       new_str += str[i]
//     }
//   }
//   return new_str
// }

module.exports = capitalize;
