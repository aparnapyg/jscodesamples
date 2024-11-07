/**
 * Check Balanced String
 * /
 * 
 * 
 * 
 * Example 1:

Input: num = "1234"

Output: false

Explanation:

The sum of digits at even indices is 1 + 3 == 4, and the sum of digits at odd indices is 2 + 4 == 6.
Since 4 is not equal to 6, num is not balanced.
Example 2:

Input: num = "24123"

Output: true

Explanation:

The sum of digits at even indices is 2 + 1 + 3 == 6, and the sum of digits at odd indices is 4 + 2 == 6.
Since both are equal the num is balanced.


/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let sumOfNumberAtEvenIndices = 0;
    let sumOfNumberAtOddIndices = 0;

    for(let i = 0; i < num.length; i++){
        if(i % 2 === 0) { sumOfNumberAtEvenIndices = sumOfNumberAtEvenIndices + parseInt(num[i]) }
        else{ sumOfNumberAtOddIndices = sumOfNumberAtOddIndices + parseInt(num[i]); }
    }
    if(sumOfNumberAtEvenIndices === sumOfNumberAtOddIndices) { return true; }
    else{ return false; }
};