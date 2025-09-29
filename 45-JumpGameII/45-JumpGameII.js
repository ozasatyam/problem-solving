// Last updated: 9/29/2025, 4:30:50 PM
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
        console.log(sMap, patternMap, word, ch)

        if (sMap[word] && patternMap[ch]) {
            if (word !== patternMap[ch]) {
                return false
            }
            if (ch !== sMap[word]) return false
            continue
        }
        if (!sMap[word] && patternMap.hasOwnProperty(ch)) {
            console.log("here2")

            return false
        } if (sMap[word] && !patternMap[ch]) {
            console.log("here1]3")

            return false
        }
        patternMap[ch] = word
        sMap[word] = ch

    }
    return true
};