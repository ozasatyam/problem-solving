// Last updated: 9/16/2025, 3:11:21 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, nums[i] + i)
        if (nums.length <= maxReach) return true
    }
    return true
};