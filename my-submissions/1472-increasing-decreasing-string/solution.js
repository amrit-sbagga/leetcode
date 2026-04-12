/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let temp = new Array(26).fill(0);
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        temp[s.charCodeAt(i) - 97] += 1;
    }

    // console.log(temp);
    let flag = true;
    while (ans.length < s.length) {
        for (let i = 0; i < temp.length; i++) {
            var pos = flag ? i : (25 - i);
            if (temp[pos] !== 0) {
                ans.push(String.fromCharCode(pos + 97));
                temp[pos] -= 1;
            }
        }
        flag = !flag;
    }
    ans = ans.join('');
    return ans;
};
