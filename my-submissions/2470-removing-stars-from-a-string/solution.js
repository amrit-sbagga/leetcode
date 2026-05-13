/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            res.pop();
        } else {
            res.push(s[i]) // l, e, e, t
        }
    }
    // console.log(res);
    return res.join("");
};
