// Last updated: 9/28/2025, 3:42:31 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let llist = new ListNode(0)
    let glist = new ListNode(0)
    let less = llist
    let greater = glist
    while (head !== null) {
        if (head.val >= x) {
            greater.next = head
            greater = greater.next
        } else {
            less.next = head
            less = less.next
        }
        head = head.next
    }
    less.next = glist.next
    greater.next = null
    return llist.next

};