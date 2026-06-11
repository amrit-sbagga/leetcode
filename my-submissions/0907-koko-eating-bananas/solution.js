/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 1;
    let r = piles[0];
    for (let i = 1; i < piles.length; i++) {
        r = Math.max(piles[i], r);
    }

    let res;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        let sum = 0;
        for (let i = 0; i < piles.length; i++) {
            sum += Math.ceil(piles[i] / m);
        }

        if (sum <= h) {
            res = m;
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return res;
};
