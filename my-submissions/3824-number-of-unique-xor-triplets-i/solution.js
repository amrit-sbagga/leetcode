/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;

    if(n < 3){
        return n;
    }

    const bits = Math.floor(Math.log2(n)) + 1;

    return 1 << bits;
    
};
