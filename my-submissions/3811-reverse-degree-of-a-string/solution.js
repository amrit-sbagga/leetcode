/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {

    function getReverseAlphaNum(char) {
       return 27 - (char.toLowerCase().charCodeAt(0) - 96);
    }

    let sum = 0;

    for(let i = 0; i < s.length; i++){
        sum += getReverseAlphaNum(s[i]) * (i+1);
        // console.log(i, s[i], getReverseAlphaNum(s[i]));
    }

    return sum;
    
};
