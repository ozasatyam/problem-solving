// Last updated: 9/16/2025, 3:10:13 PM
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    const ans = []
    for (const word of words) {
        for (let j = 0; j < words.length; j++) {
            if (words[j].includes(word) && words[j] !== word) {
                ans.push(word)
                break;
            }
        }
    }
    return ans
};