// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

  // comparing all combinations is an easy solution but too slow - O(n^2)

  // better solution with O(n) time complexity:
  // initialize with the left-most and right-most lines
  // increment the left side or decrement the right side, depending on which one is shorter
  // calculate the area at each step to keep track of the maximum

  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxArea = 0;
  let currentArea = 0;
  let containerHeight = 0;

  while (leftIndex < rightIndex) {
    containerHeight = Math.min(height[leftIndex], height[rightIndex]);
    currentArea = (rightIndex - leftIndex) * containerHeight;
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }

    if (height[leftIndex] < height[rightIndex]) leftIndex++;
    else rightIndex--;
  }

  return maxArea;
};