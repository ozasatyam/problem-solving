// Last updated: 9/16/2025, 3:09:51 PM
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let value = new Set()
    let ans = 0
    for(let i=0;i<s.length;i++) {
            if(value.has(s[i])) {
            ans++
            value = new Set()
        }
        value.add(s[i])
    }
    if(value.size)
        return ++ans
    return ans

};