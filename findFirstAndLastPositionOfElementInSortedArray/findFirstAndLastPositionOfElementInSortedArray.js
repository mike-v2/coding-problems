// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    // use binary search to find target
    // check for surrounding values that match target

    if (nums.length === 0) return [-1,-1];

    let lowIndex = 0;
    let highIndex = nums.length - 1;

    if (nums[lowIndex] === target) return findAdjacentTargets(lowIndex);
    if (nums[highIndex] === target) return findAdjacentTargets(highIndex);

    let middleIndex = 0;

    while (highIndex - lowIndex > 1) {
        middleIndex = Math.floor((lowIndex + highIndex) / 2);
        if (nums[middleIndex] === target) return findAdjacentTargets(middleIndex);

        if (target < nums[middleIndex]) {
            highIndex = middleIndex;
        } else {
            lowIndex = middleIndex;
        }
    }
    return [-1, -1];

    function findAdjacentTargets(targetIndex) {
        let min = targetIndex;
        let max = targetIndex;

        while (nums[min-1] === target) min--;
        while (nums[max+1] === target) max++;

        return [min, max];
    }
};