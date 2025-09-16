// Last updated: 9/16/2025, 3:10:50 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        const mid = Math.floor((right + left) / 2)
        if (nums[mid] > nums[mid + 1]) {
            right = mid 
        } else {
            left = mid + 1
        }
    }
    return left
};