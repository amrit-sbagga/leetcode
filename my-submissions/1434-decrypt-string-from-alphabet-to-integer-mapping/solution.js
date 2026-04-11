/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {

    let res = '';

    for (let i = 0; i < s.length; i++) {
        let currNumber = s[i];
        if (s[i+2] === '#') {
            currNumber = s.slice(i, i + 2);
            i += 2;
        }
        res += String.fromCharCode(parseInt(currNumber) + 96);
    }
    return res;
};
