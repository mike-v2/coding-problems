// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

  // use a recursive function that adds one parenthesis at a time
  // can't add an open parenthesis if number of unclosed parentheses is greater than remaining
  // can't add a close parenthesis if number of unclosed parentheses is 0

  const combos = makeCombos(['('], 2 * n - 1);
  return combos;
};

function makeCombos(combos, n) {
  if (n === 0) return combos;

  for (let i = combos.length - 1; i >= 0; i--) {
    const open = getCharacterCount('(', combos[i]);
    const closed = getCharacterCount(')', combos[i]);
    const unclosed = open - closed;
    if (unclosed === 0) {
      combos[i] += '(';
    } else if (unclosed === n) {
      combos[i] += ')';
    } else {
      const newCombo = combos[i] + '(';
      combos[i] += ')';
      combos.push(newCombo);
    }
  }

  n--;
  return makeCombos(combos, n);
}

function getCharacterCount(char, combo) {
  let count = 0;

  for (let i = 0; i < combo.length; i++) {
    if (combo.charAt(i) === char) count++;
  }

  return count;
}