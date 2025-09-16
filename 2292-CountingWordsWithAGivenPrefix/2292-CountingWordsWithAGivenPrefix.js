// Last updated: 9/16/2025, 3:09:56 PM
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0
    for(let i=0;i<words.length;i++){
        if(words[i].startsWith(pref))
        count++
    }
    return count
};