var removeDuplicates = function (nums) {
        if (!nums.length) return 0;
     
       let k = 0;
     
       for (let i = 0; i < nums.length; i++) {
         if (k < 2 || nums[i] > nums[k-2]) {
            nums[k] = nums[i];
            k++;
         }
       }
       return k;
}
 nums = [0,0,1,1,1,1,2,3,3];
 // const nums = [1, 1, 1, 2, 2, 3];
 console.log(removeDuplicates(nums));