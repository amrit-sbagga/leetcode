/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    words.sort((a, b) => a.length - b.length);
    // console.log(words);
    let res = [];
    let n = words.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (words[j].includes(words[i])) {
                res.push(words[i]);
                break;
            }
        }
        // console.log(res);
    }
    return res;
};
