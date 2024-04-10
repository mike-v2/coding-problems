//https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    // perform search by continuously splitting the array in half (O(log n)) (instead of sequential search (O(n)))
    // 1. init greatest value as array[0], subarray as array
    // 2. find middle value of subarray
    // 3. decide whether to take left side or right side of subarray
    // if rotated, if greater than first or less than middle, take left, otherwise take right
    // if not rotated, if target is between middle and start value, take left, otherwise take right

    if (target === nums[0]) return 0;
    if (nums.length === 1) return -1;

    let subarray = nums;

    const isRotated = (leftValue, rightValue) => rightValue < leftValue;
    const sliceLeft = (arr, middleIndex) => arr.slice(0, middleIndex);
    const sliceRight = (arr, middleIndex) => arr.slice(middleIndex + 1);
    let numsAnchor = 0; // start index of subarray is this index in nums array
    let middleIndex = 0;
    let middle = 0;

    while (subarray.length > 0) {
        middleIndex = Math.floor(subarray.length / 2);
        middle = subarray[middleIndex];
        if (target === subarray[0]) return numsAnchor;
        if (target === subarray[middleIndex]) return numsAnchor + middleIndex;

        if (isRotated(subarray[0], subarray[middleIndex])) {
            if (target >= subarray[0] || target < subarray[middleIndex]) {
                subarray = sliceLeft(subarray, middleIndex);
            } else {
                subarray = sliceRight(subarray, middleIndex);
                numsAnchor += middleIndex + 1;
            }
        } else {
            if (target < subarray[middleIndex] && target >= subarray[0]) {
                subarray = sliceLeft(subarray, middleIndex);
            } else {
                subarray = sliceRight(subarray, middleIndex);
                numsAnchor += middleIndex + 1;
            }
        }
    }
    return -1;
};