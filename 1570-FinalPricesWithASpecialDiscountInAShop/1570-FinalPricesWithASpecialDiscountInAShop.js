// Last updated: 9/16/2025, 3:10:08 PM
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const length = prices.length - 1
    const answer = []
    for(let i=0;i< prices.length - 1; i++) {
        let ans = prices[i]
        for(let j=i+1;j<prices.length;j++){
        if(prices[i]>=prices[j]) {
            ans =ans - prices[j]
            break;
        } 
        }
        answer.push(ans)
    }
    return [...answer,prices[prices.length-1]]
};