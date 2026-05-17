/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let maxLength = 0;

    // slide to right
    for (let right = 0; right < nums.length; right++) {
        // If we encounter a 0, we decrease our allowed flips (k)
        if (nums[right] === 0) {
            k--;
        }

        // If k < 0, the current window is invalid. 
        // We shift the left pointer by 1 to maintain the window size.
        if (k < 0) {
            if (nums[left] === 0) {
                // We give back a flip if a 0 leaves the window
                k++;
            }
            left++;
        }
         
        // current window size => right - left + 1
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
