/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let currentString = "1"; // base case

    for (let i = 1; i < n; i++) {
        let nextString = "";
        let j = 0;

        while (j < currentString.length) {
            let count = 1;
            let char = currentString[j];

            while ((j + 1) < currentString.length && currentString[j] === currentString[j + 1]) {
                count++;
                j++;
            }

            nextString += count.toString() + char;
            j++;

        }

        currentString = nextString;
    }

    return currentString;

};
