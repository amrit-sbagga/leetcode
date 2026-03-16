/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(" ").filter(item => item !== "");
    return words[words.length - 1].length;
};
