// Last updated: 9/16/2025, 3:11:20 PM
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const temp = s.trim().split(" ")
    return temp[temp.length -1].length
};