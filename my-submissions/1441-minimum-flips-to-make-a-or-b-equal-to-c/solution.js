/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    let flips = 0;
    while (a || b || c) {
        let x = a & 1;
        let y = b & 1;
        let z = c & 1;
        if (z === 1) {
            if (x === 0 && y === 0) {
                flips++;
            }
        } else {
            if (x === 1 && y === 1) {
                flips += 2;
            }

            if (x === 0 && y === 1 || x === 1 && y === 0) {
                flips++;
            }
        }
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    return flips;
};
