/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let arr = [-1, -1];
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) {
            arr[0] = mid;
            r = mid - 1
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1;
        }
    }

    l = 0;
    r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) {
            arr[1] = mid;
            l = mid + 1
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1;
        }
    }
    return arr;
};


 const nums = [5,7,7,8,8,10];
 const target = 8;

// const nums = [5,7,7,8,8,10];
// const target = 6;

// const nums = [1, 2, 3];
// const target = 1;

// const nums = [];
// const target = 0;

// const nums = [1];
// const target = 0;

// const nums = [1];
// const target = 1;

// const nums = [2, 2];
// const target = 2;

// const nums = [1, 3];
// const target = 1;

 console.log(searchRange(nums, target));