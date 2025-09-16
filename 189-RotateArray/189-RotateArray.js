// Last updated: 9/16/2025, 3:10:44 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const rotations = k % nums.length;
    if (rotations === 0) {
        return nums
    }
    const removedElements = nums.splice(nums.length - rotations);
    nums.unshift(...removedElements);
};