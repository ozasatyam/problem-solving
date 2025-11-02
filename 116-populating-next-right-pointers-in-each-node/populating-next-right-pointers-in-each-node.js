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
var connect = function(root) {
    if (!root) return null;
    
    let leftmost = root;
    
    while (leftmost && leftmost.left) {
        let curr = leftmost;
        
        while (curr) {
            // Connect left child to right child
            curr.left.next = curr.right;
            
            // Connect right child to next node's left child
            if (curr.next) {
                curr.right.next = curr.next.left;
            }
            
            curr = curr.next;
        }
        
        leftmost = leftmost.left;
    }
    
    return root;
};