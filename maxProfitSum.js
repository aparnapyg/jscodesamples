/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = [];
    let maxProfit = 0;

    for(let i = 0, j = i+1; i < prices.length, j < prices.length; i++, j++){
        if (prices[i] > prices[j]) { continue; }
        profit[i] = prices[j] - prices[i];
        console.log('profit --:', profit[i]);
        if (profit[i] > 0) { maxProfit += profit[i]; }     
    }
    return maxProfit;
};

// const prices = [7,1,5,3,6,4];
// const prices = [1,2,3,4,5];
const prices = [7,6,4,3,1];
console.log(maxProfit(prices));