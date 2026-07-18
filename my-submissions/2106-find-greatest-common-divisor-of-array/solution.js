/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {

    function gcd(a, b) {
        while(b != 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const sorted = nums.sort((a, b) => a - b);

    // console.log("sorted =>", sorted);

    const smallest = sorted[0];
    const largest = sorted[sorted.length - 1];

    // console.log("smallest, largest =>", smallest, largest);

    return gcd(smallest, largest)
    
};
