// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

  // loop through string and check if character is pos/neg sign or a digit
  // keep track of whether we have found a sign or digit
  // sign only valid if we haven't found sign or digit
  // non digit or sign is only valid if it is leading whitespace
  // if character is pos/neg sign or digit, add it to running value
  // before adding digit to running value, check if doing so would put it out of 32-bit integer range

  const INT_MIN = -1 * Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  let hasFoundSign = false;
  let hasFoundDigit = false;
  let digit = null;
  let char = '';
  let isSign = false;
  let isWhitespace = false;
  let isNeg = false;
  let parsedInt = 0;

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    isSign = char === '+' || char === '-';
    isWhitespace = char === ' ';
    digit = digitStringToInt(char);

    if (isSign) {
      if (hasFoundSign || hasFoundDigit) {
        break;
      }

      if (char === '-') {
        isNeg = true;
        hasFoundSign = true;
        continue;
      } else if (char === '+') {
        hasFoundSign = true;
        continue;
      }
    }


    if (!hasFoundSign && !hasFoundDigit && isWhitespace) continue;
    if (digit == null) break;

    hasFoundDigit = true;

    if (parsedInt > (INT_MAX - digit) / 10) {
      return isNeg ? INT_MIN : INT_MAX;
    }
    parsedInt = parsedInt * 10 + digit;
  }

  if (isNeg) parsedInt *= -1;
  return parsedInt;
};

function digitStringToInt(s) {
  return s === '0' ? 0 :
    s === '1' ? 1 :
      s === '2' ? 2 :
        s === '3' ? 3 :
          s === '4' ? 4 :
            s === '5' ? 5 :
              s === '6' ? 6 :
                s === '7' ? 7 :
                  s === '8' ? 8 :
                    s === '9' ? 9 :
                      null;
}