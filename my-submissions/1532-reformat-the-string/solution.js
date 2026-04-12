/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    // let letters = [];
    // let digits = [];
    // let n = s.length;

    // for (let i = 0; i < n; i++) {
    //     if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
    //         letters.push(s[i]);
    //     } else if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
    //         digits.push(s[i]);
    //     }
    // }

    const letters = s.split('').filter(c => c >= 'a' && c <= 'z');
    const digits = s.split('').filter(c => c >= '0' && c <= '9');
    // console.log(letters, digits);

    if (Math.abs(letters.length - digits.length) > 1) {
        return "";
    }

    let result = [];
    let [longList, shortList] = letters.length >= digits.length ?
        [letters, digits] : [digits, letters];

    for (let i = 0; i < longList.length; i++) {
        result.push(longList[i]);
        if (i < shortList.length) {
            result.push(shortList[i]);
        }
    }
    return result.join('')
};
