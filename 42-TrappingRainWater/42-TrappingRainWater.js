// Last updated: 9/16/2025, 3:11:27 PM
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // let n = height.length
    // let maxRight = Array(n)
    // let maxLeft = Array(n)
    // maxLeft[0] = height[0]
    // let total = 0
    // for (let i = 1; i < n; i++) {
    //     maxLeft[i] = Math.max(maxLeft[i - 1], height[i])
    // }
    // maxRight[n - 1] = height[n - 1]
    // for (let i = n - 2; i >= 0; i--) {
    //     maxRight[i] = Math.max(maxRight[i + 1], height[i])
    // }
    // for (let i = 0; i < n; i++) {
    //    total += Math.min(maxLeft[i],maxRight[i]) - height[i] 
    // }
    // return total


    let n = height.length
    let r = n - 1
    let l = 0
    let leftMax = 0
    let total = 0
    let rightMax = 0

    while (l < r) {
        rightMax = Math.max(rightMax, height[r])
        leftMax = Math.max(leftMax, height[l])
        if (leftMax < rightMax) {
            total += leftMax - height[l]
            l++
        }
        else {
            total += rightMax - height[r]
            r--
        }

    }
    return total

};