/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of t) {
        map.set(char, (map.get(char) || 0) - 1);
    }

    // Now this exact syntax works!
    for (const [k, v] of map) {
        if (v === -1) {
            return k;
        }
    }

};
