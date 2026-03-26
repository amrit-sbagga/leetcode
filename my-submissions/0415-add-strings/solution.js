/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // if(num1 === "0" || num2 === "0"){
    //    return "0";
    // }
    return (BigInt(num1) + BigInt(num2)).toString()
};
