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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let queue = [root]
    let ans = []
    while (queue.length) {
        let n = queue.length
        const val = queue[n-1]?.val
        if(val !== undefined) ans.push(val)
        // ans.push[]
        
        for (let i = 0; i < n; i++) {
            let node = queue.shift()
            node?.left && queue.push(node?.left)
            node?.right && queue.push(node?.right)
        }
    }
    return ans
};