/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

var isEmpty = (obj) => {
    for(let key in obj)
        return false;
    return true;
}
