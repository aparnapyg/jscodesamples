// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

 

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"


/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    if (nums.length === 0) {
        return '0';
    }

    // Sort numbers based on their concatenated values
    nums.sort((a, b) => (`${b}${a}` > `${a}${b}` ? 1 : -1));

    // If the largest number is '0', return '0'
    if (nums[0] === 0) {
        return '0';
    }

    // Join sorted numbers to form the largest number
    return nums.join('');
}