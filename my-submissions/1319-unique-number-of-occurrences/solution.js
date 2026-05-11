/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = {};

    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    // console.log(map);
    let values = Object.values(map);
    let uniqueValues = new Set(values);
    return values.length === uniqueValues.size;
};
