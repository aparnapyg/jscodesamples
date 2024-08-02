/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let i = 0;
    let j = n;
    let output = [];
    while (i < n && j < nums.length){
        output.push(nums[i]);
        output.push(nums[j]);
        i++;
        j++;
    }
    return output;
};

/**
 * [2,5,1,3,4,7], n = 3
 */