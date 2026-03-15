/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const absValue = Math.abs(x);
    const absReversed = absValue
        .toString()
        .split('')
        .reverse()
        .join('');

    if (absReversed > 2 ** 31) {
        return 0;
    }

    return absReversed * Math.sign(x);
};
