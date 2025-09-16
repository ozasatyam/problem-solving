// Last updated: 9/16/2025, 3:11:40 PM
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let ans = ""
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
        const substring = ans + strs[0][i];
        if (strs.every((ar) => ar[i] === strs[0][i])) {
            ans = substring
        } else {
            break;
        }

    }
    return ans
}