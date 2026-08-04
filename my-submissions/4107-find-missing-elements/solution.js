/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
   const seen = new Set(nums);

    let mn = Math.min(...nums);
    let mx = Math.max(...nums);

    const ans = [];

    for (let x = mn; x <= mx; x++) {
        if (!seen.has(x)) {
            ans.push(x);
        }
    }

    return ans;
    
};
