/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let commonMap = new Map();

    for (let char of words[0]) {
        commonMap.set(char, (commonMap.get(char) || 0) + 1);
    }

    for (let i = 1; i < words.length; i++) {
        let currentMap = new Map();

        for (let char of words[i]) {
            currentMap.set(char, (currentMap.get(char) || 0) + 1);
        }

        // compare
        for (let [char, freq] of commonMap) {
            if (currentMap.has(char)) {
                commonMap.set(char, Math.min(freq, currentMap.get(char)));
            } else {
                commonMap.set(char, 0);
            }
        }

        for (let [char, freq] of commonMap) {
            if (freq === 0) {
                commonMap.delete(char);
            }
        }
    }

    // convert to arr
    let res = [];
    for (let [char, freq] of commonMap) {
        for (let i = 0; i < freq; i++) {
            res.push(char);
        }
    }
    return res;
};
