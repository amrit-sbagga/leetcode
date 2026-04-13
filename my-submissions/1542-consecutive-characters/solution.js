/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let maxPower = 1;
    let start = 0;
    for (let end = 1; end < s.length; end++) {
        if (s[start] !== s[end]) {
            start = end;
        }
        // console.log(maxPower, start, end, (end - start + 1));
        maxPower = Math.max(maxPower, end - start + 1);
    }

    return maxPower;
};
