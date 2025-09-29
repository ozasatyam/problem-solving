// Last updated: 9/29/2025, 4:31:22 PM
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let patternMap = {}
    let sMap = {}
    let n = pattern.length
    let splitS = s.split(" ")

    if (n !== splitS.length) return false
    for (let i = 0; i < n; i++) {
        let ch = splitS[i]
        let word = pattern[i]
        if (sMap[word] && patternMap[ch]) {
            if (word !== patternMap[ch]) {
                return false
            }
            if (ch !== sMap[word]) return false
            continue
        }
        if (!sMap[word] && patternMap.hasOwnProperty(ch)) {

            return false
        } if (sMap[word] && !patternMap[ch]) {

            return false
        }
        patternMap[ch] = word
        sMap[word] = ch

    }
    return true
};