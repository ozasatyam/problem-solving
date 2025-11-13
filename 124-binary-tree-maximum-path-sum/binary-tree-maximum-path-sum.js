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
 * @return {number}
 */
var maxPathSum = function (root) {
    let result = root.val
    function resolver(root) {
        if (root == undefined) return 0
        const l = resolver(root.left)
        const r = resolver(root.right)
        const bestAVG = l + r + root.val
        const bestEdges = Math.max(r, l) + root.val
        result = Math.max(bestAVG, bestEdges, root.val, result)
        return Math.max(root.val, bestEdges)
    }
    resolver(root)
    return result
};