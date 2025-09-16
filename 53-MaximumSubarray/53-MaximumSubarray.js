// Last updated: 9/16/2025, 3:11:23 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let max = -Infinity;
    let meh = 0;
    for (let i = 0; i < nums.length; i++) {
        meh += nums[i];
        if (meh > max) {
            max = meh;
        }
        if (meh < 0) {
            meh = 0;
        }
    }
    return max;
};