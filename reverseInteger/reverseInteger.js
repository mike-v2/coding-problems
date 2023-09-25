// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

  // shave off last digit of x using mod and division by 10
  // we will add this digit to the ones place of the new number by multiplying by 10 and adding new digit
  // before adding, check if the new number would be outside 32-bit integer range

  const INT_MIN = -1 * Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  const isNeg = x < 0;
  x = Math.abs(x);

  let lastDigit = 0;
  let reversed = 0;

  while (x != 0) {
    lastDigit = x % 10;
    x = Math.floor(x / 10);

    if (reversed > (INT_MAX - lastDigit) / 10) return 0;

    reversed = reversed * 10 + lastDigit;
  }

  if (isNeg) reversed *= -1;
  return reversed;
};