// Last updated: 9/16/2025, 3:10:35 PM
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let mCount = {}
    if (ransomNote.length > magazine.length) {
        return false;
    }

    for (let rns of new Set(ransomNote)) {
        if (magazine.split(rns).length - 1 < ransomNote.split(rns).length - 1){
            return false
        }
    }
    return true
};