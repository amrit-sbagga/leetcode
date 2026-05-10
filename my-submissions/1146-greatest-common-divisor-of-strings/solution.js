/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";

    let a = str1.length; // 6
    let b = str2.length; // 3

    while(b > 0){
      [a, b] = [b, a % b];
    }

    return str1.slice(0, a);
};
// ABCABC, ABC
