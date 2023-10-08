// https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

  // sort array, then loop through, making current number the anchor
  // for each anchor, initialize the second number to be one greater and the third number to be the greatest
  // at each step, determine the difference between sum and target
  // then, determine whether to increment second number or decrement third number

  nums = nums.sort((a, b) => a - b);
  let answer = 0;
  let smallestError = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let second = i + 1;
    let third = nums.length - 1;

    while (second < third) {
      const sum = nums[i] + nums[second] + nums[third];
      const error = sum - target;
      const absError = Math.abs(error);

      if (absError < smallestError) {
        smallestError = absError;
        answer = sum;
      }

      if (error === 0) {
        return target;
      } else if (error > 0) {
        third--;
      } else {
        second++;
      }
    }
  }

  return answer;
};