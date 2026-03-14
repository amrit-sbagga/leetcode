/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i];
        if (numMap.has(remaining)) {
            return [numMap.get(remaining), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
};
