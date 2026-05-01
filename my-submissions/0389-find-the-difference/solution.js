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
        const count = (map.get(char) || 0) - 1;

        if (count === -1) {
            return char;
        }
        map.set(char, count);

        // if (map.get(char) === 0) {
        //     map.delete(char);
        // }
    }

    //  console.log(map);

    // for (const [k, v] of map) {
    //     if (v === -1) {
    //         return k;
    //     }
    // }

};
