// Last updated: 9/16/2025, 3:09:55 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    const n = nums.length
    let sumOfNums = [0]
    let ans = 0
    for (let i = 0; i < n; i++) {
        sumOfNums[i + 1] = sumOfNums[i] + nums[i]
    }
    for (let i = 1; i < n ; i++) {
        if (sumOfNums[i] >= (sumOfNums[n] - sumOfNums[i]))
            ans++
    }

    return ans
};