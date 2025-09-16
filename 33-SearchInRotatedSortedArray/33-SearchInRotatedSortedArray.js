// Last updated: 9/16/2025, 3:11:31 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    function findPivot(left, right) {
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] > nums[right]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left
    }
    function binarySearch(l, r) {
        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            if (target == nums[mid]) {
                return mid
            }
            if (nums[mid] < target) {
                l = mid +1
            } else {
                r = mid - 1
            }
        }
        return -1
    }

    const idx = findPivot(left, right)
    const leftIndex = binarySearch(0, idx)
    if (leftIndex != -1) return leftIndex
    return binarySearch(idx, nums.length - 1)
};