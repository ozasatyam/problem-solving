// Last updated: 9/16/2025, 3:09:42 PM
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    const commonSet = new Set()
    const ans = []
    let prevousCount = 0
    for (i = 0; i < A.length; i++) {
        const lastDigit = ans[i]
        if (A[i] === B[i]) {
            prevousCount++
            commonSet.add(B[i])
            ans.push(prevousCount)
        } else {
            if (commonSet.has(A[i])) {
                prevousCount++
            } if (commonSet.has(B[i])) {
                prevousCount++
            }
            commonSet.add(B[i])
            commonSet.add(A[i])
            ans.push(prevousCount)
        }

    }
    // console.log(ans)
    return ans
};