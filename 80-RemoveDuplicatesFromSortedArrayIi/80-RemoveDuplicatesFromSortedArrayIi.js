// Last updated: 9/16/2025, 3:11:13 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let times = 1
    let num = nums[0]
    let k=1
   
    // Iterate over each element in the array
    for (let i=1;i<nums.length;i++ ) {
        
        // If the current number is not equal to the value we want to remove, we place it at the newLength index
        if (num === nums[i]) {
            if( times<2)
           {
            num = nums[i]
            nums[k] = num
             times++
             k++
             }
        } else {
            times=1
            num = nums[i]
            nums[k] = num
            k++
        }
    }
    return k
};