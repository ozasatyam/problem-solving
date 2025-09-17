// Last updated: 9/17/2025, 9:52:16 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let newNode = head
    for (let i = 0; i < k; i++) {
        if (!newNode) return head
        newNode = newNode.next

    }

    let nextNode = reverseKGroup(newNode, k)
    let temp = head
    let m = k
    while (m > 0) {
        m--;
        let next = temp.next
        temp.next = nextNode
        nextNode = temp
        temp = next
    }
    return nextNode

};