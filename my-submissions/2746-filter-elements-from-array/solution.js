/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filteredArray = [];
    arr.forEach((item, idx) => {
        if (fn(item, idx)) {
            filteredArray.push(item)
        }
    });

    return filteredArray;
}
