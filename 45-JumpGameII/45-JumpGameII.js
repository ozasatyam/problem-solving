// Last updated: 9/19/2025, 2:23:55 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let node = new ListNode(0, head);
    let delayedNode = node
    let k = 1
    while (head) {
        if (k > n) {
            delayedNode = delayedNode.next
        }
        head = head.next
        k++
    }
    delayedNode.next = delayedNode.next?.next
    return node.next

};