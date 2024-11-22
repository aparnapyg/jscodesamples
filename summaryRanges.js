/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ranges = [];
    for(let i = 0; i < nums.length; i++){
       let start = nums[i];

       while(i+1 < nums.length && nums[i] + 1 === nums[i+1]){
        i++;
       }

       if(start != nums[i]){
        ranges.push((start).toString() + '->' + (nums[i]).toString())
       }else{
        ranges.push((start).toString())
       }
    }
    return ranges;
};