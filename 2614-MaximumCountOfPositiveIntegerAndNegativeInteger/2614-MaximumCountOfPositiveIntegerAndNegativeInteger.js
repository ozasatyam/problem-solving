// Last updated: 9/16/2025, 3:09:48 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let negCount = binarySearch(nums, 0)
    let posCount = nums.length - binarySearch(nums, 1)
    return Math.max(negCount, posCount)



};
let binarySearch = function (nums, target) {
    let result = nums.length;
    let left = 0
    let right = result - 1
    let mid =  nums.length
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            result = mid
            right = mid - 1
        }
    }
    return result

}