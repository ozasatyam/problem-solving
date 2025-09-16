// Last updated: 9/16/2025, 3:11:02 PM
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {

    let startIndex = 0
    let total = 0
    let sum = 0
    for (let i = 0; i < gas.length; i++) {
        total += (gas[i] - cost[i])
        sum += (gas[i] - cost[i])

        if (total < 0) {
            total = 0
            startIndex = i + 1
        }

    }
    return sum >= 0 ? startIndex : -1

};