/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = [];
    arr.forEach((item, idx) => {
       newArr.push(fn(item, idx));
    })
    return newArr;
};
