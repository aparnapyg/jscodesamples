/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let sortedArray = nums.slice().sort((a, b) => a - b);

    let startIdx = nums.length - 1;
    let endIdx = -1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== sortedArray[i]) {
            startIdx = Math.min(startIdx, i);
            endIdx = Math.max(endIdx, i);
        };
    };

    if(endIdx === -1) return 0;

    return endIdx - startIdx + 1;
   
};
const nums = [1, 2, 3, 4];
console.log(findUnsortedSubarray(nums));
