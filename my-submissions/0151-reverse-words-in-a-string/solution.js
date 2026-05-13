/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // s = s.trim();
    // let splitArr = s.split(/\s+/);
    // return splitArr.reverse().join(' ');

    let resArr = [];
    let splitArr = s.trim().split(" ");
    for(let i = splitArr.length - 1; i >= 0; i--){
        let word = splitArr[i];
        if(word){
            resArr.push(word + " ") 
        }
    }
    // console.log("resArr =>", resArr.join(""));
    return resArr.join("").trim();
};
