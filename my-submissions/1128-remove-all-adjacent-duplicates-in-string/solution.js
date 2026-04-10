/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = [];
    for (let char of s) {
        stack[stack.length - 1] === char ?
            stack.pop() : stack.push(char);
    }
    return stack.join("");

    // using recursion
    // for (let i = 0; i < s.length - 1; i++) {
    //     if (s[i + 1] == s[i]) {
    //         let remaining = s.substring(0, i) + s.substring(i + 2);
    //         return removeDuplicates(remaining);
    //     }
    // }
    // return s;
};

