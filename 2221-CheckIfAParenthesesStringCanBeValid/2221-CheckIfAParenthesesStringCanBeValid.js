// Last updated: 9/16/2025, 3:09:58 PM
/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    let wc = 0
    let opening = 0
    let closing = 0
    if (s.length % 2 !== 0) return false
    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '0') {
            wc++
        } else {
            if (s[i] === '(') {
                opening++
            } else {
                closing++
            }
            if ((closing - opening) > wc) return false
        }
    }
    wc = 0
    opening = 0
    closing = 0
    for (let i = s.length-1; i >= 0; i--) {
        if (locked[i] === '0') {
            wc++
        } else {
            if (s[i] === '(') {
                opening++
            } else {
                closing++
            }
            if ((opening - closing) > wc) return false
        }
    }
    return true
};