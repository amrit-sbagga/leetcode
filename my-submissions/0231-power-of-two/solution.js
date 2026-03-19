/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    console.log(n)
    if (n < 1) return false;
    if (n == 1) return true;
    if (n % 2 !== 0) return false;
    return isPowerOfTwo(n / 2)
};
