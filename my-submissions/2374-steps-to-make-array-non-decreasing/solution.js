/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function(nums) {
    let count = 0, stack = [];
    for (let i = nums.length - 1; i >= 0; i--){
        let maxSteps = 0; 
        while(stack.length > 0 && stack[stack.length - 1][0] < nums[i]){
          maxSteps = Math.max(maxSteps + 1, stack.pop()[1])
        }

        stack.push([nums[i], maxSteps]);
        count = Math.max(count, maxSteps);
    }
    return count;
};
