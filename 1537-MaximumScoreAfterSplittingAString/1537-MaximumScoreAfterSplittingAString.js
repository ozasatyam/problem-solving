// Last updated: 9/16/2025, 3:10:11 PM
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let n = s.length
    let totalOne = 0
    let totalZero = 0
    let total = 0
    for(char of s){
      if(char==1){
        totalOne++
      }
    }

    for (let i = 0; i < n-1; i++) {
        if (s[i] === '1')
            totalOne--;
        else
            totalZero++;
       
        total = Math.max(total, totalOne + totalZero) 

    }
    return total
};