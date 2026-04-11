/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    const ch = {};
    for (const c of chars) {
        ch[c] = 1 + (ch[c] || 0);
    }

    let res = 0;
    let flag = false;
    for (const word of words) {
        const copy = { ...ch };
        let isValid = true;
        // console.log(copy);

        for (const c of word) {
            if (c in copy && copy[c] !== 0) {
                copy[c] -= 1;
            } else {
                isValid = false;
                break;
            }
        }
        if (isValid) res += word.length;
    }
    return res;
};
// Input - ["cat","bt","hat","tree"]
// Output = 6
