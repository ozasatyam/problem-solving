// Last updated: 9/16/2025, 3:10:14 PM
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    let odd = 0
    let obj = {}
    if (k > s.length) return false
    for (let char of s) {
        obj[char] = obj[char] ? obj[char] + 1 : 1
        if (obj[char] % 2 == 0) odd-- 
        else odd++ 
    }
    if (odd > k) {
        return false
    }
    return true
};