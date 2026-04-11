/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const ch = {};
    for (const c of text) {
        ch[c] = 1 + (ch[c] || 0)
    }

    // console.log(ch);
    let balloonCount = 0;
    while (ch['b'] > 0 && ch['a'] > 0 && ch['l'] > 1 && ch['o'] > 1
        && ch['n'] > 0) {
        balloonCount++;
        ch['b']--;
        ch['a']--;
        ch['l'] -= 2;
        ch['o'] -= 2;
        ch['n']--;
    }
    // console.log(balloonCount);
    return balloonCount
};
// Input - "nlaebolko"
// Output = 1
