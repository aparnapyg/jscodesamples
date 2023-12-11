/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0] 
    let maxProfit = 0;
    for(let i=0; i<prices.length; i++) {
      if(prices[i] < buy) {
          buy = prices[i];
      }  
      if(prices[i]-buy > maxProfit) {
          maxProfit = prices[i]-buy
      }
    }
    return maxProfit
 };
const prices = [2, 4, 1];
console.log('Max profit:', maxProfit(prices));