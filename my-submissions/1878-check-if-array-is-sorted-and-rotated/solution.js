/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
        let n = nums.length;
        let count = 0;

        // count no of positions where prev element is greater than current
        for(let i = 1; i < n; i++) {
            if(nums[i - 1] > nums[i]) {
              count++;
            }
        }

        // circular break check between last element & first element
        if(nums[n - 1] > nums[0]){
          count++;
        }
        
        return count <= 1;
};
