/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    if (n === 1) return nums[0];

    let prev1 = 0, prev2 = 0;
    for (let num of nums) {
        let temp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = temp;
    }
    return prev1;

};
