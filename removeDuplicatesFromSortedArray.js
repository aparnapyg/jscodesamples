/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp = [];
    let k = 0;
     for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            temp[k] = nums[i];
            k++
        }
    }
    nums.length = temp.length;
    for(let i = 0; i < temp.length; i++){
        nums[i] = temp[i];
    }
    return temp;
};