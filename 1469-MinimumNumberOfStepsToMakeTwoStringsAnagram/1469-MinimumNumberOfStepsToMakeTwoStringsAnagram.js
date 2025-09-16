// Last updated: 9/16/2025, 3:10:16 PM
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        count[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    let res = 0;

    for (const sum of count) {
        if (sum > 0) {
            res += sum;
        }
    }

    return res;
};