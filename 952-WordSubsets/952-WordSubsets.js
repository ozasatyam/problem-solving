// Last updated: 9/16/2025, 3:10:20 PM
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    const wordCount = {}
    const ans = []
    for (const word of words2) {
        const tempChar = {}
        for (const char of word) {
            tempChar[char] = (tempChar[char] ?? 0) + 1
        }
        for (const char in tempChar) {
            wordCount[char] = wordCount[char] ? Math.max(tempChar[char], wordCount[char]) : tempChar[char]
        }
    }
    // console.log(wordCount)
    for (const word of words1) {
        const tempWord = { ...wordCount }
        for (const letter of word) {
            if (tempWord[letter]) {
                tempWord[letter]--
            }
            if (tempWord[letter] === 0) {
                delete tempWord[letter]
            }
        }
        if (!Object.keys(tempWord).length) ans.push(word)
    }
    return ans
};