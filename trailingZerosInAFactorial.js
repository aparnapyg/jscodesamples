/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    if (n < 0) //Negative Number Edge Case
        return -1;

    let count = 0;

    // Keep dividing n by powers of 
    // 5 and update count
    for (let i = 5; parseInt(n / i) >= 1; i *= 5)
        count = count + parseInt(n / i);

    return count;

};