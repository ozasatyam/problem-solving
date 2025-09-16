// Last updated: 9/16/2025, 3:09:59 PM
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    const ans = new Set()
    const left = new Set()
    const right = {}
    for (const char of s) {
        right[char] = right[char] ? right[char] + 1 : 1
    }
    for(const mid of s)
    {
        right[mid] = right[mid] - 1
        for(const c of left){
            if(right[c]>0){
                ans.add(c+mid+c)
            } 
        }
        left.add(mid)  
    }
    return ans.size

};