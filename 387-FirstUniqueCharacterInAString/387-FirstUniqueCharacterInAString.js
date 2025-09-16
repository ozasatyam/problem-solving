// Last updated: 9/16/2025, 3:10:33 PM
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let chs = {}
    for (ch of s) {
        chs[ch] = (chs[ch] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if (chs[s[i]]===1) {
return i
        }
    }
    return -1

};