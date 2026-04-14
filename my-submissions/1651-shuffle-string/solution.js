/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = new Array(s.length);
    for(let i = 0; i < s.length; i++){
       let index = indices[i];
       res[index] = s[i];
    }
    // console.log(res)
    return res.join('');
};
