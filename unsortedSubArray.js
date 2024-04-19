/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let arrayToBeSorted = [];
    let min = Infinity;
    let max = -Infinity;
    let startIdx = 0;
    let lastIdx = 0;
    let shouldSubArrayBeSorted = false;

    if (nums.length === 1 || 0) { return 0; }
    
    for(let i = 0; i < nums.length; i++){
       if (nums[i] < min) { min = nums[i]; startIdx = i+1; }
    }

    for(let i = 0; i < nums.length; i++){
       if (nums[i] > max) { max = nums[i]; lastIdx = i; }
    }
    
    for(let i = startIdx; i <= lastIdx; i++){
        if (min > nums[i]) { min = nums[i]; startIdx = i+1; }
    }

    for(let i = lastIdx; i >= startIdx; i--){
        if (max < nums[i]) { max = nums[i]; lastIdx = i; }
    }

   return Math.abs(lastIdx - startIdx);

   
};
const nums = [1, 2, 3, 4];
console.log(findUnsortedSubarray(nums));
