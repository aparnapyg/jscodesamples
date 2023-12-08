/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let updatedNums = [];
    for (const num of nums){
        if (num !== val){
            updatedNums.push(num);
        }
    }
  nums.length = updatedNums.length;
  for(let i = 0; i < updatedNums.length; i++){
  nums[i] = updatedNums[i];
  }
  return nums.length;
};