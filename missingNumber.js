/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const newArray = [];
    for(let i = 0; i <= nums.length; i++){
        newArray.push(i);
    }

    for(let i = 0; i < newArray.length; i++){
        if(!nums.includes(newArray[i])) { return newArray[i]; }
    }
};