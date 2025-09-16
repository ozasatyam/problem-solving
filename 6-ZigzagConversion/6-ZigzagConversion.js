// Last updated: 9/16/2025, 3:11:47 PM
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const zigzag = Array(numRows).fill('')
    let upDown = 0
    let i = 0
    if(numRows ==1 ) {
        return s
    }
    for (c of s) {
        if (upDown == 0) {
            zigzag[i] += c
            i++
            if (i == numRows-1) {
                upDown = 1
            }
        } else {
            zigzag[i] += c
            i--
            if (i == 0) {
                upDown = 0
            }
        }
    }
    return zigzag.join("")
     
   
};