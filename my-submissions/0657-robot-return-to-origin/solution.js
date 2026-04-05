/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    // for odd moves, robot cannot return to origin
    // to check odd in js - use (n & 1)
    if (moves.length & 1) return false;

    const freq = { 'U': 0, 'D': 0, 'L': 0, 'R': 0 };

    for (const c of moves)
        freq[c]++;

    return freq.U === freq.D && freq.L === freq.R;
};
