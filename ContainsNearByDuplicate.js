/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]] || hashmap[nums[i]] === 0) {
            if (i - hashmap[nums[i]] <= k) {
                return true;
            }
        }
        hashmap[nums[i]] = i;
    }
    return false;
};