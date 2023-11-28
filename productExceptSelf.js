/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftArr = [];
    let rightArr = [];
    let product;

    leftArr[0] = 1;
    product = 1;

    for(let i = 1; i <= nums.length - 1; i++){
        product = product * nums[i - 1];
        leftArr[i] = product;
    }

    rightArr[nums.length - 1] = 1;
    product = 1;

    for(let i = nums.length - 2; i >= 0; i--){
        product = product * nums[i + 1];
        rightArr[i] = product;
        
    }

    let resultArr = [];
    for (let k = 0; k < nums.length; k++){
        resultArr[k] = leftArr[k] * rightArr[k];
    }

    return resultArr;
};

// const nums = [1, 2, 3, 4];
// productExceptSelf(nums);
// const nums = [-1, 1, 0, -3, 3];
// productExceptSelf(nums);

