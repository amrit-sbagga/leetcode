/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   const unique = [...new Set(nums)];
   unique.forEach((val, i) => nums[i] = val);
   return unique.length;
};
