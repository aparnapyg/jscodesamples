/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let index = 0;
    let maxSteps = 0;
    let target = nums.length - 1;

    while (index < nums.length) {
        maxSteps = Math.max(maxSteps, index + nums[index]);

        if (maxSteps >= target) {
            return true;   // One loop completed
        }

        if (maxSteps <= index && nums[index] === 0) {
            return false;    // Cannot move forward
        }

        index++;
    }

    return false;
};