// Last updated: 9/16/2025, 3:11:15 PM
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    let left = 0, right = m * n - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const value = matrix[Math.floor(mid / n)][mid % n]
        if (value == target) {
            return true
        }
        else if (value > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return false

};