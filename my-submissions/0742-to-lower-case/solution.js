/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    // A-Z : 65-90
    // a-z : 97-122
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            result += String.fromCharCode(ascii + 32);
        } else {
            // append if not caps
            result += s.charAt(i);
        }

    }
    return result;

};
