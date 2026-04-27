/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let splitArr = s.split(/\s+/);
    return splitArr.reverse().join(' ');
};
