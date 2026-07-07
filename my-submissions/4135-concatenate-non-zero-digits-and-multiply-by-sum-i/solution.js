/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    if (n === 0) {
        return 0;
    }

    const arr = [];

    while (n > 0) {
        const d = n % 10;
        if (d > 0) {
            arr.push(d);
        }
        n = Math.floor(n / 10);
    }

    let sum = 0;
    for (const d of arr) {
        sum += d;
    }

    let value = 0;
    let tens = 1;

    for (const d of arr) {
        value += d * tens;
        tens *= 10;
    }

    return value * sum;
};
