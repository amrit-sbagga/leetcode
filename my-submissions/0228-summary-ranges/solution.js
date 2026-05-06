/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0) return [];

    const res = [];
    let start = nums[0];

    for(let i = 0; i < nums.length; i++){
        if(i === nums.length - 1 || nums[i + 1] !== nums[i] + 1){
            if(start === nums[i]){
               res.push(`${start}`)
            } else {
               res.push(`${start}->${nums[i]}`)
            }
            start = nums[i + 1]
        }
    }
    return res;
};
