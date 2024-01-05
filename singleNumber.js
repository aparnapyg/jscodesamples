/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let countMap = {};

    // Loop through the array and count the occurrences of each element
    nums.forEach(element => {
        if (countMap[element] === undefined) {
            countMap[element] = 1;
        } else {
            countMap[element]++;
        }
    });

    for (let key in countMap) {
        if (countMap[key] === 1) { return key; }
    }
};