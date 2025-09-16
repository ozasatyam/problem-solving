// Last updated: 9/16/2025, 3:11:00 PM
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let candy = 1
    let n = ratings.length - 1
    let candies = new Array(n + 1).fill(1)
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (ratings[i - 1] < ratings[i]) {
            candies[i] = candies[i - 1] + 1
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (ratings[i + 1] < ratings[i]) {
            let temp = candies[i + 1] + 1
            if (candies[i] < temp)
                candies[i] = temp
            
        }
        sum += candies[i]
    }
   return sum+candies[n]
};