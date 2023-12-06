/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let element2;
    
    if (nums.length === 2) { return [0,1]; }
    for(let i = 0; i < nums.length; i++){
        element2 = target - nums[i];
        if (nums.includes(element2)) { 
            if(i === nums.indexOf(element2)) { continue; }
            else{  return [i, nums.indexOf(element2)]; }
            }
    }

};