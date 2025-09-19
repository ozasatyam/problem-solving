// Last updated: 9/19/2025, 4:06:12 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let res = new ListNode(0, head)
    let dummy = head
    let curr = res
    while (dummy) {
        if (dummy.next && dummy.val === dummy?.next.val) {
            while (dummy.next && dummy.val === dummy.next.val) {
                dummy = dummy.next
            }
            curr.next = dummy.next
        } else {
            // dummy = dummy.next
            curr = curr.next
        }
        dummy = dummy.next
    }
    return res.next
};