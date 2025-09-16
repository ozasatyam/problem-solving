// Last updated: 9/16/2025, 3:11:26 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let maxReach = 0;
    let minSteps = 0;
    let lastSteps = 0;
    for (let i = 0; i < nums.length - 1; ++i) {
        if (maxReach < i) {
            return 0
        }
        if (maxReach < (nums[i] + i)) {
            maxReach = nums[i] + i
        }
        if (maxReach >= (nums.length - 1)) {
            return (minSteps + 1)
        }
        if (lastSteps == i) {
            minSteps++
            lastSteps = maxReach
        }

    }
    return minSteps
};