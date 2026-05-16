/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let firstMin = Infinity;
    let secondMin = Infinity;

    for (const num of nums) {
        if (num <= firstMin) {
            firstMin = num;
        } else if (num <= secondMin) {
            secondMin = num;
        } else {
            return true;
        }
    }
    return false;
};
