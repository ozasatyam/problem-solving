// Last updated: 9/16/2025, 3:09:39 PM
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const ans = [-1, -1]
    const sequense = Array(grid[0].length* grid.length).fill(0)
    const a = new Set()
    for (row of grid) {
        for (item of row) {
            if (a.has(item))
                ans[0] = item
            else {
                a.add(item)
                sequense[item-1] = item
            }
        }
    }
    ans[1] = sequense.findIndex((i)=>i==0) + 1
    return ans
};