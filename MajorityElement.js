 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let elementFrequency = {};
 
    for(num of nums){
       if(!elementFrequency[num]){
           elementFrequency[num] = 1;
       }else{
           elementFrequency[num]++;
       }
    }
   
   for(key in elementFrequency){
       if (elementFrequency[key] >= nums.length/2) {
           return key;
       }
   }
   return -1;
 };

 
const nums = [3, 2, 3];
majorityElement(nums);