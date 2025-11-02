/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {

    let head = null //head of the next level
    let prev = null //the leading node on the next level
    let curr = root;
    while (curr != null) {
        while (curr != null) {
            if (curr.left !== null) {
                if (prev !== null) {
                    prev.next = curr.left
                } else {
                    head = curr.left
                }
                prev = curr.left
            }
            if (curr.right !== null) {
                if (prev !== null) {
                    prev.next = curr.right
                } else {
                    head = curr.right
                }
                prev = curr.right
            }
            curr = curr.next
        }
        curr = head
        head = null
        prev = null
    }
    return root
};