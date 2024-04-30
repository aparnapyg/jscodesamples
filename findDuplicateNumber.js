/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const hashSet = new Set();
    for(let i = 0; i < nums.length; i++){
       if (!hashSet.has(nums[i])) { hashSet.add(nums[i]); }
       else { return nums[i]; }
    }
};

const nums = [1,3,4,2,2];
console.log(findDuplicate(nums));