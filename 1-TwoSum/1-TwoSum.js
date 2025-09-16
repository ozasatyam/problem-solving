// Last updated: 9/16/2025, 3:11:52 PM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
   const seen = {}
   for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i]
      if (seen[diff]!= undefined) {
         return [seen[diff], i]
      } else {
         seen[nums[i]] = i
      }
   }
};