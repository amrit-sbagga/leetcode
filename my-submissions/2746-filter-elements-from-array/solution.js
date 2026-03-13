/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArray = [];
    arr.forEach((item, i) => {
        if(fn(item, i)) { 
            filteredArray.push(item); 
        }
    })
    return filteredArray;
};
