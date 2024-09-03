/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // create array to store the counts
    let countArr=[];

    // iterate the array for selecting each element
    for(let i =0;i<nums.length;i++){
        // declare a variable to store the count 
        let count = 0;
        
        // iterate the array for comparing with nums[i] with each element
        for(let j = 0; j<nums.length;j++){

            // if nums[i] greater than other elements of that array 
            if(nums[i] > nums[j] ){
                count++;
            }
        }
        // we add the each elment count into countArray
        countArr.push(count)
    }

    // return the count
    return countArr
};
const nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));
/**
 * Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
 */