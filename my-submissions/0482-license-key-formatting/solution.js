/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let newArr = s.replaceAll('-', '').toUpperCase().split('');
    // console.log(res);
    for(let i = newArr.length - 1 - k; i >= 0; i-= k){
        newArr[i] = newArr[i] + '-';
    }
    
    return newArr.join('');
    // console.log(newArr);
};
