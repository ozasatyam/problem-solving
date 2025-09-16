// Last updated: 9/16/2025, 3:10:02 PM
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (ss) {
    let s = ss.toLowerCase()
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let firstHalf = 0
    let sec = 0
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (vowels.has(s[i]))
            firstHalf++
    }

    for (let i = Math.floor(s.length / 2); i < s.length; i++) {
        if (vowels.has(s[i]))
            sec++
    }
    return (firstHalf === sec)
};