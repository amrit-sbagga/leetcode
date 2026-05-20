/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        // found a valid pair
        if (sum === k) {
            left++;
            right--;
            count++;
        } else if (sum < k) {
            // current sum too small, move left pointer to larger value
            left++;
        } else {
            // current sum too large, move right pointer to smaller value
            right--;
        }
    }
    return count;
};
