// Last updated: 9/16/2025, 3:10:58 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head
    let fast = head

    while (slow && fast?.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) { return true }
        
    }
    return false
};