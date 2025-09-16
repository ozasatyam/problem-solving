// Last updated: 9/16/2025, 3:09:45 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
       let score = 0;
    const marked = new Set(); // To track marked indices

    // Sort nums along with indices
    const sortedNums = nums.map((value, index) => ({ value, index }))
                           .sort((a, b) => a.value - b.value);

    for (const { value, index } of sortedNums) {
        // Skip if the current index is already marked
        if (marked.has(index)) continue;

        // Add the value to the score
        score += value;

        // Mark the current index and its neighbors
        marked.add(index);
        if (index > 0) marked.add(index - 1);
        if (index < nums.length - 1) marked.add(index + 1);
    }

    return score;
};