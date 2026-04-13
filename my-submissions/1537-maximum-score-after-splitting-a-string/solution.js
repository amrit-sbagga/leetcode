/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let zeros = 0, maxScore = 0, ones = 0;
    //let ones = [...s].filter(c => c === '1').length;
    for (const char of s) {
        if (char === '1') ones++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') zeros++;
        else ones--;
        // maxScore = Math.max(maxScore, zeros + ones);
        let currentScore = zeros + ones;
        if(currentScore > maxScore) maxScore = currentScore;
    }
    return maxScore;
};
