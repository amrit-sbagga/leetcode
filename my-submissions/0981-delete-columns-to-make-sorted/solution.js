/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let count = 0;
    let colCount = strs[0].length;
    let rowCount = strs.length;
    for (let col = 0; col < colCount; col++) {
        for (let row = 1; row < rowCount; row++) {
            if (strs[row][col] < strs[row - 1][col]) {
                count++;
                break;
            }
        }
    }
    return count;
};
// input - ["cba","daf","ghi"]
