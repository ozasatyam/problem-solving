// Last updated: 9/16/2025, 3:11:30 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    function findIndex(isLeft) {
        let idx = -1
        let start = 0
        let last = nums.length - 1
        while (start <= last) {
            let mid = Math.floor((start + last) / 2)
            if (target == nums[mid]) {
                idx = mid
                if (isLeft) {
                    start = mid + 1
                } else {
                    last = mid - 1
                }
            } else if (target > nums[mid]) {
                start = mid + 1
            } else {
                last = mid - 1
            }
        }
        return idx
    }
    const leftIndex = findIndex(true)
    const rightIndex = findIndex(false)
    return [rightIndex, leftIndex]

};