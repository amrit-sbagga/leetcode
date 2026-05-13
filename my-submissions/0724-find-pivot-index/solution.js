/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSum = 0;
    let leftSum = 0;

    // cal sum of entire array
    nums.forEach((v) => (rightSum += v));

    for(let i = 0; i <= nums.length - 1; i++){
        let curr = nums[i];

       // remove from right sum, one by one
        rightSum -= curr;

        // if match, return index
        if(leftSum === rightSum) return i;

        // no match, add the curr no to leftSum
        leftSum += curr;
    }

    return -1;
    
};
