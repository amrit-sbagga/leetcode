/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let ans = "";
    while (columnNumber > 0) {
        columnNumber--;
        // console.log(columnNumber, (columnNumber % 26), (columnNumber % 26) + 65);
        ans = String.fromCharCode((columnNumber % 26) + 65) + ans;
        // console.log(ans);
        columnNumber = Math.floor(columnNumber / 26)
    }
    return ans;
};
