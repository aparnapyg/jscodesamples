/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)

        const prev = nums[mid - 1] || -Infinity
        const next = nums[mid + 1] || -Infinity

        if (prev < nums[mid] && nums[mid] > next) return mid;
        else if (next > nums[mid]) start = mid + 1
        else end = mid - 1
    }
};
