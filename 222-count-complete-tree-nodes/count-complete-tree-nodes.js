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
var countNodes = function (root) {
    if (root == null) return 0
    let lh = countLeftHeight(root)
    let rh = countRighttHeight(root)

    if (lh === rh) return Math.pow(2,lh) -1
    return 1 + countNodes(root.left) + countNodes(root.right)

}
function countLeftHeight(node) {
    let count = 0
    while (node) {
        node = node.left
        count++
    }
    return count
}
function countRighttHeight(node) {
    let count = 0
    while (node) {
        node = node.right
        count++
    }
    return count
}

