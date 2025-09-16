// Last updated: 9/16/2025, 3:10:59 PM
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) {
        return null
    }
    let curr = head
    let map = new Map();
    while (curr) {
        map.set(curr, new Node(curr.val))
        curr = curr.next
    }
    curr = head
    while (curr) {
        const copyn = map.get(curr)
        copyn.next = map.get(curr.next) || null
        copyn.random = map.get(curr.random) || null
        curr = curr.next
    }
    return map.get(head)
};