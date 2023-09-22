// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  // for each character in string, try to start palindrome at current letter
  // loop backwards through string to find start letter
  // check if this string is a palindrome

  let longestPalindrome = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        const numChecks = Math.floor((j - i - 1) / 2);
        let isPalindrome = true;
        for (let k = 1; k <= numChecks; k++) {
          if (s[i + k] !== s[j - k]) {
            isPalindrome = false;
            break;
          }
        }
        if (isPalindrome) {
          const palindrome = s.substring(i, j + 1);
          if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome;
          }
        }
      }
    }
  }

  if (longestPalindrome === '') longestPalindrome = s[0];
  return longestPalindrome;
};