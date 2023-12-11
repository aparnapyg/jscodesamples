/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyPrice = prices[0];
    let sellingPrice = 0;
    let index = 0;

    for (i = 1; i < prices.length; i++) {
        if (prices[i] < buyPrice && i !== prices.length - 1 && prices[i] !== 0) {
            buyPrice = prices[i];
            index = i;
        }
    }

    if (index + 1 === prices.length) { return 0; }

    for (let j = index + 1; j < prices.length; j++) {
        if (prices[j] > sellingPrice) {
            sellingPrice = prices[j];
        }
    }

    if (sellingPrice < buyPrice) { return 0; }
    
    return sellingPrice - buyPrice;
};
const prices = [2, 4, 1];
console.log('Max profit:', maxProfit(prices));