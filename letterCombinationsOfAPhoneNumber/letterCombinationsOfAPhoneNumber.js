// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */

const digitToLetters = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
}

var letterCombinations = function (digits) {

  // create an object that maps digits to letters
  // if we had a predetermined number of digits, we could do n nested for loops. Instead, use recursion
  // build a recursive function that takes the current combinations and the remaining digits
  // the recursive function iterates over each combination to create new combinations

  if (digits.length === 0) return [];
  if (digits.length === 1) return digitToLetters[digits.charAt(0)].split('');

  const startCombos = digitToLetters[digits.charAt(0)].split('');
  const remainingDigits = digits.substring(1);
  console.log(`startCombos: ${startCombos}   remainingDigits: ${remainingDigits}`)
  return makeNewCombinations(startCombos, remainingDigits);
};

function makeNewCombinations(currentCombos, remainingDigits) {
  if (remainingDigits.length === 0) return currentCombos;

  const newLetters = digitToLetters[remainingDigits.charAt(0)].split('');
  remainingDigits = remainingDigits.substring(1);
  const newCombos = [];

  for (let i = 0; i < currentCombos.length; i++) {
    const currentCombo = currentCombos[i];

    for (let j = 0; j < newLetters.length; j++) {
      newCombos.push(currentCombo + newLetters[j]);
    }
  }

  return makeNewCombinations(newCombos, remainingDigits);
}