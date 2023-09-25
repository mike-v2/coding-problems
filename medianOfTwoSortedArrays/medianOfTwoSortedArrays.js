// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

  // calculate halfway index using Array.length
  // loop through each array simultaneously and sort
  // stop sorting when halfway index is reached

  let currentIndex1 = 0;
  let currentIndex2 = 0;
  const halfwayIndex = (nums1.length + nums2.length - 1) / 2;
  const stopIndex = Math.ceil(halfwayIndex);
  const sortedNums = [];

  while (sortedNums.length <= stopIndex) {
    if (currentIndex2 >= nums2.length || nums1[currentIndex1] < nums2[currentIndex2]) {
      sortedNums.push(nums1[currentIndex1]);
      currentIndex1++;
    } else {
      sortedNums.push(nums2[currentIndex2]);
      currentIndex2++;
    }
  }

  if (halfwayIndex % 1 > .4) {
    return (sortedNums[sortedNums.length - 1] + sortedNums[sortedNums.length - 2]) / 2;
  } else {
    return sortedNums[sortedNums.length - 1];
  }
};