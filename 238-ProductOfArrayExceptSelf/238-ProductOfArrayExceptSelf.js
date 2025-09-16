// Last updated: 9/16/2025, 3:10:41 PM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    let output = [1]

    let prev = 1
    for(i=0;i<n;i++){
        output[i] = prev
        prev *= nums[i]
    }
    prev = 1
    for(i=n-1;i>=0;i--){
       output[i] *= prev
       prev *= nums[i]
    }
     return output
};