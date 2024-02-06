/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let ans = {}
    strs.forEach((str) => {
        temp = str.split("").sort().join("")
        ans[temp] = [...(ans[temp] || []), str]
    })
    const finam = Object.values(ans) 
    return finam.length ? finam : [[""]]
};