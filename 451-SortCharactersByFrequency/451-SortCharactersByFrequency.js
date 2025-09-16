// Last updated: 9/16/2025, 3:10:28 PM
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const ans = {}
    s.split("").forEach((ch, i) => {
        ans[ch] = (ans[ch] || 0) + 1
    })
    return ''.concat(...Object.keys(ans).sort((p, n) => ans[n] - ans[p]).map((ch) => {
        return ch.repeat(ans[ch])
    }))

};