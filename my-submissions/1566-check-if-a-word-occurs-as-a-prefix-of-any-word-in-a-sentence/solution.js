/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        // console.log(i, words[i].includes(searchWord));
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
};
