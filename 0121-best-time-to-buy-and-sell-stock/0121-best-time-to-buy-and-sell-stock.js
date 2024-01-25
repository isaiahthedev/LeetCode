/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];
    for(let i = 0; i < prices.length; i++) {
        if(profit < prices[i] - buy) {
            profit = prices[i] - buy;
        }
        if(prices[i] < buy) {
            buy = prices[i]
        }
    }
    return profit;
};