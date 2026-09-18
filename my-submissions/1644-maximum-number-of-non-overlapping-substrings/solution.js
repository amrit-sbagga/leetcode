/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {

    const n = s.length;

    const first =
        new Array(26).fill(n);

    const last =
        new Array(26).fill(-1);

    const code = ch =>
        ch.charCodeAt(0) -
        'a'.charCodeAt(0);

    // Step 1: first and last occurrence.
    for (let i = 0; i < n; i++) {

        const c = code(s[i]);

        first[c] =
            Math.min(first[c], i);

        last[c] = i;
    }

    function getRight(L) {

        let R =
            last[code(s[L])];

        for (let i = L; i <= R; i++) {

            const c = code(s[i]);

            // Character occurs before L,
            // so this candidate is impossible.
            if (first[c] < L) {
                return -1;
            }

            // Include every occurrence
            // of this character.
            R = Math.max(
                R,
                last[c]
            );
        }

        return R;
    }

    const intervals = [];

    // Step 2: generate valid intervals.
    for (let c = 0; c < 26; c++) {

        if (first[c] === n)
            continue;

        const L = first[c];
        const R = getRight(L);

        if (R !== -1) {
            intervals.push([L, R]);
        }
    }

    // Earliest finishing time first.
    intervals.sort((a, b) => {

        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }

        return b[0] - a[0];
    });

    // Step 3: greedy interval scheduling.
    const ans = [];

    let lastEnd = -1;

    for (const [L, R] of intervals) {

        if (L > lastEnd) {

            ans.push(
                s.slice(L, R + 1)
            );

            lastEnd = R;
        }
    }

    return ans;
};
