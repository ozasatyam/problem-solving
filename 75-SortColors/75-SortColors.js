// Last updated: 9/16/2025, 3:11:14 PM
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i=0;i<nums.length;i++){
        let min=i
        for(let j=i;j<nums.length;j++){
        if(nums[j]<nums[min]){
            min=j
        }
            
        }
        if(i !== min){
                    let temp = nums[i]
        nums[i] = nums[min]
        nums[min] = temp
        }

    }
};