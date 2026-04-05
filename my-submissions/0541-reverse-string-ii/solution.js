/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split("");
    let step = 2 * k;

    for (let i = 0; i < arr.length; i += step) {
        // console.log(i, s[i])
        let start = i;
        let end = Math.min(i + k - 1, arr.length - 1);

        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            // [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr.join("");
};
