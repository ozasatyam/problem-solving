// Last updated: 9/16/2025, 3:11:46 PM
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const temp= x.toString()
   return temp.split('').reverse().join('') === temp
};