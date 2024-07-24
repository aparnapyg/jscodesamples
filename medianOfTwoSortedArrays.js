/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let a = nums2.length + nums1.length
    let i1 = 0 
    let i2 = 0
    let ans = []
    for (let i = 0; i<a; i++){
        if(nums1[i1] <= nums2[i2] || nums2.length<=i2){
            ans.push(nums1[i1])
            i1 = i1 + 1
        }
        else{
            ans.push(nums2[i2])
            i2 = i2 + 1
        }
    }
    if((ans.length % 2) == 0){
        return (ans[(ans.length/2)-1] + ans[ans.length/2])/2
    }
    else{
        return (ans[(ans.length-1)/2])
    }
};