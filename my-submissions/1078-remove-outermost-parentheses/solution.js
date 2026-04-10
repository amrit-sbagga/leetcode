/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let ans = "";
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (count === 0 && s[i] === '(') {
            count++;
        } else if (s[i] === '(') {
            count++;
            ans += s[i]
        } else if (count === 1 && s[i] === ')') {
            count--;
        } else {
            count--;
            ans += s[i];
        }
    }
    return ans;
};
