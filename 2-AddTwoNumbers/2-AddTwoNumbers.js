// Last updated: 9/16/2025, 3:11:50 PM
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let l = l1
    let l1Digit = ""
    let l2Digit = ""
    while (l?.val !== undefined) {
        l1Digit = ( l.val+"" + l1Digit)
        l = l.next
    }
    l = l2
    while (l?.val !== undefined) {
        l2Digit = ( l.val+"" + l2Digit)
        l = l.next
    }

    let final = (BigInt(l1Digit) + BigInt(l2Digit)).toString()
    let finalLink
    if (final) {
        finalLink = new ListNode(final[0], undefined)
        final = final.slice(1)
        while (final) {
            finalLink = new ListNode(final[0], finalLink)
            final = final.slice(1)
        }
    }
    return finalLink


};