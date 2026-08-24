/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function(stones) {
    for (let i = 1; i < stones.length; i++) {
        stones[i] += stones[i - 1];
    }

    let best = stones[stones.length - 1];

    for (let i = stones.length - 2; i >= 1; i--) {
        best = Math.max(best, stones[i] - best);
    }

    return best;
};
