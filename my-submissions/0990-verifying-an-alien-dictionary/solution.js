/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    const map = new Map();

    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i)
    }

    for (let i = 0; i < words.length - 1; i++) {
        const leftWord = words[i];
        const rightWord = words[i + 1];
        len = Math.max(leftWord.length, rightWord.length);

        for (let j = 0; j < len; j++) {
            const leftChar = leftWord[j], rightChar = rightWord[j];
            if (leftChar && rightChar && map.get(rightChar) > map.get(leftChar)) {
                break;
            }

            if ((leftChar && rightChar && map.get(leftChar) > map.get(rightChar)) ||
                leftChar && !rightChar
            ) {
                return false;
            }

        }
    }
    return true;
};
