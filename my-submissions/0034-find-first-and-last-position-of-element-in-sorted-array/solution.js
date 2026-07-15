/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let high = nums.length - 1;
    let low = 0;
    let x = -1;
    let y = -1;

    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) {
            let mid1 = mid;
            let mid2 = mid;
            while (mid1 >= low && nums[mid1] === target) {
                x = mid1;
                mid1--;
            }
            while (mid2 <= high && nums[mid2] === target) {
                y = mid2;
                mid2++;
            }
            return [x, y];
        }
        else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [x, y];
}
