// Last updated: 9/16/2025, 3:09:37 PM
/**
 * @param {string} s
 * @param {number[]} order
 * @param {number} k
 * @return {number}
 */
var minTime = function (s, order, k) {
    let n = s.length
    let left = 0
    let right = n - 1
    let answer = -1
        let totalSubString = n * (n + 1) / 2

    function checkActiveString(t) {
        let starA = Array(n)
        for (let i = 0; i <= t; i++) {
            starA[order[i]] = true
        }
        let invalidIndex = 0
        let subStringCount = 0
        for (let i = 0; i < n; i++) {
            if (!starA[i]) {
                subStringCount++
            } else {
                invalidIndex += (subStringCount * (subStringCount + 1)) / 2
                subStringCount = 0
            }
        }
        if (subStringCount > 0) {
            invalidIndex += (subStringCount * (subStringCount + 1)) / 2
        }
        return (totalSubString - invalidIndex) >= k
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (checkActiveString(mid)) {
            right = mid - 1
            answer = mid
        } else {
            left = mid + 1
        }
    }
    return answer
};