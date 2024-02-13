/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let leftPosition = 0;
    let rightPosiition = nums.length - 1;
    let middle = Math.floor((leftPosition + rightPosiition) / 2);
    let insertedPosition = 0;

    while (leftPosition <= rightPosiition) {
        if (target < nums[middle]) {
            insertedPosition = middle;
            rightPosiition = middle - 1;
        } else if (target > nums[middle]) {
            insertedPosition = middle + 1;

            leftPosition = middle + 1;
        } else if (target === nums[middle]) {
            return middle;
        }
        middle = Math.floor((leftPosition + rightPosiition) / 2);
    }
    if (nums[middle] === target) {
        return middle;
    } else {
        return insertedPosition;
    }

}; 

// const nums = [1, 3, 5, 6];
// const target = 2;

const nums = [1, 3, 5];
const target = 4;

// const target = 7;

// const target = 5;
console.log(searchInsert(nums, target));