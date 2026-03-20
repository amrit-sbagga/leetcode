/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};
