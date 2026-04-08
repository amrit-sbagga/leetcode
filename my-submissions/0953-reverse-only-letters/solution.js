/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let letters = []
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
            letters.push(s[i]);
        }
    }
    letters = letters.reverse();
    let newStr = "";
    let k = 0;
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
            newStr += letters[k];
            k++;
        } else {
            newStr += s[i];
        }
    }

    // console.log(res.join(""));
    return newStr;

};
