/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let max = amount + 1;
    let dp = [];
    dp.length = amount+1;
    dp.fill(max);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};

// const coins = [25, 10, 5] 
// const value = 30

// const coins = [9, 6, 5, 1] 
// const value = 11

const coins = [1, 2, 5] 
const value = 11

console.log(coinChange(coins, value));