// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
// function mapChars(str) {
//   // Function to strip whitespace and special chars using regex
//   let dict = {};
//
//   for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
//     dict[char] = dict[char] + 1 || 1;
//   }
//   return dict
// }

// function anagrams(stringA, stringB) {
//   const dictA = mapChars(stringA)
//   const dictB = mapChars(stringB)
//   if (Object.keys(dictA).length !== Object.keys(dictB).length) {
//     return false;
//   }
//   for (let char in dictA) {
//     if (dictA[char] !== dictB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// Solution 2
function cleanString(str) {
   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
}

function anagrams(stringA, stringB) {
  const cleanStringA = cleanString(stringA)
  const cleanStringB = cleanString(stringB)
  return cleanStringA === cleanStringB
}
module.exports = anagrams;
