// Last updated: 9/19/2025, 4:07:48 PM
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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let cur = head
    let prev = dummy

    while (cur && cur.next) {
        if (cur.next.val === cur.val){
            while (cur.next && cur.val === cur.next.val) {
                cur = cur.next
            }
            prev.next = cur.next
        } else {
            prev = cur
        }

        cur = cur.next
    }

    return dummy.next
};