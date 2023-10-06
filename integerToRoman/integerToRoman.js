// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {

  // determine the largest roman numeral that can be subtracted from the number
  // shave off largest roman numeral and repeat until number is 0

  let numeral = '';

  // must be in decreasing order
  const allNumerals = [
    {
      number: 1000,
      symbol: 'M'
    },
    {
      number: 900,
      symbol: 'CM'
    },
    {
      number: 500,
      symbol: 'D'
    },
    {
      number: 400,
      symbol: 'CD'
    },
    {
      number: 100,
      symbol: 'C'
    },
    {
      number: 90,
      symbol: 'XC'
    },
    {
      number: 50,
      symbol: 'L'
    },
    {
      number: 40,
      symbol: 'XL'
    },
    {
      number: 10,
      symbol: 'X'
    },
    {
      number: 9,
      symbol: 'IX'
    },
    {
      number: 5,
      symbol: 'V'
    },
    {
      number: 4,
      symbol: 'IV'
    },
    {
      number: 1,
      symbol: 'I'
    },
  ]

  while (num > 0) {
    for (let i = 0; i < allNumerals.length; i++) {
      if (num >= allNumerals[i].number) {
        numeral += allNumerals[i].symbol;
        num -= allNumerals[i].number;
        break;
      }
    }
  }

  return numeral;
};