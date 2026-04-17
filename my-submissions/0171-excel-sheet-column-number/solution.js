/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let result = 0;
  for(let i = 0; i < columnTitle.length; i++){
     let char = columnTitle[i];

     // shift res by left, base-26
     // let digitValue = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
     let digitValue = char.charCodeAt(0) - 64;
     result = result * 26 + digitValue;
     // console.log(char, char.charCodeAt(0), 'A'.charCodeAt(0), digitValue, result)
  }  
  return result;
};
