// Last updated: 9/16/2025, 3:11:34 PM
function removeElement(nums: number[], val: number): number {
    let newLength: number = 0;
  
    // Iterate over each element in the array
    for (const number of nums) {
        // If the current number is not equal to the value we want to remove, we place it at the newLength index
        if (number !== val) {
            nums[newLength] = number;
            newLength++; // Increment the index for the next placement
        }
    }
  
    // Return the new length of the array after all removals
    return newLength;

};