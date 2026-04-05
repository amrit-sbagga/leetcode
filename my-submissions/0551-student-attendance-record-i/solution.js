/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    if (s.includes('LLL')) return false;
    let absCount = 0;
    
    for (let ch of s) {
        if (ch === 'A') absCount++;
    }
    return absCount < 2;
};
