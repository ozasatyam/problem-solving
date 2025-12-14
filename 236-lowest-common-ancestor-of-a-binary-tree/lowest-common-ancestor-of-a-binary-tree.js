/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function lca(node) {
        if (!node) return
        if (node.val === p.val || node.val === q.val) {
            return node
        }
        const leftLCA = lca(node.left)
        const rightLCA = lca(node.right)

        if (leftLCA && rightLCA) {
            return node
        }
        return leftLCA ? leftLCA : rightLCA
    }
    return lca(root)

};