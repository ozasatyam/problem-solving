// Last updated: 9/16/2025, 3:11:05 PM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0], max = prices[0]
    let prep = 0
    prices.forEach((price, i) => {
        if (price <= min) {
            min = price
            max = price
        } else if (price > max) {
            if (prep < (price - min)) {
                prep = price - min
            }
            max = price
        }
    })

    return prep
};