/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let maxDistance = -1;
    const firstIndexMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (firstIndexMap.has(char)) {
            maxDistance = Math.max(maxDistance, i - firstIndexMap.get(char) - 1);
        } else {
            firstIndexMap.set(char, i);
        }
    }
    return maxDistance;
};

