/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

  // create an array holding an array for each row
  // loop through string, keeping track of current row and direction
  // deposit next character in appropriate row and increment/decrement row depending on direction

  if (numRows === 1) return s;

  let isMovingDown = true;
  let currentRow = 0;

  let rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    rows[currentRow].push(s[i]);

    if (currentRow === 0) isMovingDown = true;
    else if (currentRow === numRows - 1) isMovingDown = false;

    if (isMovingDown) currentRow++;
    else currentRow--;
  }

  let finalString = '';
  for (let i = 0; i < rows.length; i++) {
    finalString += rows[i].join('');
  }
  return finalString;
};