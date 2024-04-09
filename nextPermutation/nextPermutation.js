// https://leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    // 1. find element to swap
    // element to swap will be the greatest index that has subsequent elements with greater values
    // values after swap index will therefore be in descending order
    // find swap element by searching from end of the array to find first element that decreases value

    // 2. swap element with next greatest value in subsequent indices
    
    // 3. sort elements after swap element in ascending order
    // since subsequent elements are guaranteed to be sorted in descending order, we can just reverse



    if (nums.length === 1) return nums;

    // 1. find element to swap
    for (let i=nums.length-2; i>=0; i--) {
        if (nums[i] < nums[i+1]) {
          console.log('found swap index: ', i);
            // found swap index = i
            // 2. swap element with next greatest value in subsequent indices
            // start at end of array since it's in descending order
            for (let j=nums.length - 1; j>i; j--) {
                if (nums[j] > nums[i]) {
                  console.log('found index of next greatest value: ', j);
                  [nums[i], nums[j]] = [nums[j], nums[i]];
                  break;
                }
            }

            console.log('array before reversing: ', nums);
            // 3. sort elements after swap element in ascending order
            reverse(i+1);
            console.log('array after reversing: ', nums);


            return;
        }
    }
    
    // if it's the last lexicographical permutation, reverse order to get first permutation
    reverse(0);

    function reverse(startIndex) {
        let endIndex = nums.length-1;
        
        while(startIndex < endIndex) {
            [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]];
            startIndex++;
            endIndex--;
        }
    }
};

nextPermutation([1,3,2])
