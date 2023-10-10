// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  // sort array, then loop through and set anchor to current index
  // for each index anchor, find two values that sum to anchor
  // choose second value just higher than anchor, and third value to be greatest number
  // increment second value and decrement third value until sum is reached

  const answer = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    //avoid duplicates
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let second = i + 1;
      let third = nums.length - 1;

      while (second < third) {
        const sum = nums[i] + nums[second] + nums[third];
        if (sum == 0) {
          answer.push([nums[i], nums[second], nums[third]]);

          // avoid duplicates
          while (nums[second] == nums[second + 1]) {
            second++;
          }
          while (nums[third] == nums[third - 1]) {
            third--;
          }

          second++;
          third--;
        } else if (sum > 0) {
          third--;
        } else {
          second++;
        }
      }
    }
  }

  return answer;
};