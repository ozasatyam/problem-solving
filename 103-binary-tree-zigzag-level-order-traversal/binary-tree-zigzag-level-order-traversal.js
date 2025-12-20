/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let zigzag = false
    let array = (root !== null) ? [root] : []
    let ans = []
    while (array.length) {
        let n = array.length
        let arr = []
        for (let i = 0; i < n; i++) {
            const node = array.shift()
            if (node?.val !== undefined) {
                if (zigzag) {
                    arr.unshift(node.val)

                } else {
                    arr.push(node.val)
                }
                node?.left && array.push(node.left)
                node?.right && array.push(node.right)
            }
        }
        ans.push(arr)
        zigzag = !zigzag
    }
    return ans
};