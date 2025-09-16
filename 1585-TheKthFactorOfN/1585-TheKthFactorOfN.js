// Last updated: 9/16/2025, 3:10:06 PM
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    var list = []
    var result;
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            list.push(i);
        } if (list.length === k)
            break;
    }
    if (list.length < k) return -1

    return list[k - 1]
};