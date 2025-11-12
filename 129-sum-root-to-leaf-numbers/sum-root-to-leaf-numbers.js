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
var sumNumbers = function (root) {
    let sum = 0
    function dfs(root, path) {
        if (!root) return null
        path *= 10
        path += root.val
        if (!root.left && !root.right) return sum += path
        dfs(root.left, path)
        dfs(root.right, path)
    }
    dfs(root, 0)


    return sum

};