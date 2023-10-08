// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

  // sort array, then loop through and set anchor to current index
  // for each index anchor, find two values that sum to anchor
  // choose first value just higher than anchor, and second value to be greatest number
  // increment first value and decrement second value until sum is reached

  const answer = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    //avoid duplicates
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let first = i + 1;
      let second = nums.length - 1;

      while (first < second) {
        const sum = nums[i] + nums[first] + nums[second];
        if (sum == 0) {
          answer.push([nums[i], nums[first], nums[second]]);

          // avoid duplicates
          while (nums[first] == nums[first + 1]) {
            first++;
          }
          while (nums[second] == nums[second - 1]) {
            second--;
          }

          first++;
          second--;
        } else if (sum > 0) {
          second--;
        } else {
          first++;
        }
      }
    }
  }

  return answer;
};