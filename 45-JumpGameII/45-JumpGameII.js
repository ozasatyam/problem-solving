// Last updated: 9/19/2025, 2:12:57 PM
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
    let node = head
    let delayedNode = head
    let k = 1
    while (node.next) {
        if (k > n) {
            delayedNode = delayedNode.next
        }
        node = node.next
        k++
    }
    if(k==n){
        return head.next
    }
    if (delayedNode && delayedNode.next) {
        delayedNode.next = delayedNode.next?.next
        return head
    }
        return null
};