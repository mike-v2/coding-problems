/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {

    // create equation for the average with our variables:
    //   (sum(rolls) + sum(x)) / (rolls.length + n) = mean, where x is array of length n
    // rearrange equation to solve for missing values:
    //   sum(x) = mean * (rolls.length + n) - sum(rolls)
    // use algo to find values for array of length n that sum to s:
    //   initialize array of length n to the floor of the average value
    //   use mod to find remainder and add back into array

    const sum = mean * (rolls.length + n) - sumArr(rolls);
    if (sum > 6 * n || sum < n) return [];
    const arr = calculateArrayValuesWithSum(sum, n);
    return arr;
};

function sumArr(arr) {
    return arr.reduce((acc, item) => acc + item);
}

function calculateArrayValuesWithSum(s, n) {
    let low = Math.floor(s/n);
    const arr = new Array(n).fill(low);

    const remainder = s % n;
    for (let i=0; i<remainder; i++) {
        arr[i]++;
    }
    
    return arr;
}