// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //console.log(`checking string: {${s}}`);
  let longestLength = 0;

  for (let i = 0; i < s.length; i++) {
    const totalSubstring = s.substring(i);
    //console.log(`checking subString: {${totalSubstring}}`);
    const unique = [];
    for (let j = 0; j < totalSubstring.length; j++) {
      const character = totalSubstring[j];
      //console.log(`character: {${character}}`);
      if (unique.includes(character)) {
        //console.log('character already included')
        if (unique.length > longestLength) {
          longestLength = unique.length;
        }
        break;
      } else {
        //console.log('unique character')
        unique.push(character);
      }
    }
    if (unique.length > longestLength) {
      longestLength = unique.length;
    }
  }

  return longestLength;
};