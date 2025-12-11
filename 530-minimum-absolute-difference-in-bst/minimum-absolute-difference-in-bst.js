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
var getMinimumDifference = function (root) {
    let minDiff = Infinity;
    let preVal = null;
    function findMinimumDiff(node) {
        if (!node) return
        findMinimumDiff(node.left)
        if (preVal !== null)
            minDiff = Math.min(minDiff, node.val - preVal)
        preVal = node.val
        findMinimumDiff(node.right)
    }
    findMinimumDiff(root)
    return minDiff
};