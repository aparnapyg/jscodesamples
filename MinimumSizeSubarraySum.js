/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let start = 0;
    let minLength = Infinity;
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while (sum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }
    return (minLength === Infinity) ? 0 : minLength;
}

// const nums = [2,3,1,2,4,3];
// const target = 7;

// const nums = [1, 4, 4];
// const target = 4;

const target = 11
const nums = [1, 1, 1, 1, 1, 1, 1, 1];

console.log(minSubArrayLen(target, nums));

