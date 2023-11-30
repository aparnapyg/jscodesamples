/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
        if (nums.length <= 2) {
           for (let i = 0; i <= k; i++) {
             nums.unshift(nums[nums.length - 1]);
             nums.pop();
           }
         } else {
          let arr = nums.splice(nums.length - k);
          nums.unshift(...arr);
         }
         return nums;
};

// const nums = [1,2,3,4,5,6,7];
// const nums = [-1,-100,3,99];
//const nums = [-1];

