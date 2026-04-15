/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    let result = s.split("");
    const alphabet = ['a', 'b', 'c'];

    for (let i = 0; i < s.length; i++) {
        if (result[i] === '?') {
            for (let char of alphabet) {
                if (char !== result[i - 1] && char !== result[i + 1]) {
                    result[i] = char;
                    break;
                }
            }
        }
    }

    console.log(result)
    return result.join('');
};


