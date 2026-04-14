/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let arr = s.split('');
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i] !== arr[i + 1] &&
            arr[i].toLowerCase() === arr[i + 1].toLowerCase()
        ) {
            arr.splice(i, 2);
            i = 0;
        } else {
            i++;
        }
    }
    return arr.join('')
};

