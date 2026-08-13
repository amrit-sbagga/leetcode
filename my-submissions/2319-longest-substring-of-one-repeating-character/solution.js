/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;

    const tree = new Array(4 * n);

    const createNode = () => ({
        leftChar: '',
        rightChar: '',
        len: 0,
        prefix: 0,
        suffix: 0,
        best: 0
    });

    const merge = (left, right) => {
        const res = createNode();

        res.leftChar = left.leftChar;
        res.rightChar = right.rightChar;
        res.len = left.len + right.len;

        res.best = Math.max(left.best, right.best);

        res.prefix = left.prefix;

        if (
            left.prefix === left.len &&
            left.rightChar === right.leftChar
        ) {
            res.prefix = left.len + right.prefix;
        }

        res.suffix = right.suffix;

        if (
            right.suffix === right.len &&
            left.rightChar === right.leftChar
        ) {
            res.suffix = left.suffix + right.len;
        }

        if (left.rightChar === right.leftChar) {
            res.best = Math.max(
                res.best,
                left.suffix + right.prefix
            );
        }

        return res;
    };

    const build = (node, l, r) => {
        if (l === r) {
            tree[node] = {
                leftChar: s[l],
                rightChar: s[l],
                len: 1,
                prefix: 1,
                suffix: 1,
                best: 1
            };
            return;
        }

        const mid = Math.floor((l + r) / 2);

        build(node * 2, l, mid);
        build(node * 2 + 1, mid + 1, r);

        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    };

    const update = (node, l, r, idx, char) => {
        if (l === r) {
            tree[node] = {
                leftChar: char,
                rightChar: char,
                len: 1,
                prefix: 1,
                suffix: 1,
                best: 1
            };
            return;
        }

        const mid = Math.floor((l + r) / 2);

        if (idx <= mid) {
            update(node * 2, l, mid, idx, char);
        } else {
            update(node * 2 + 1, mid + 1, r, idx, char);
        }

        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    };

    build(1, 0, n - 1);

    const answer = [];

    for (let i = 0; i < queryCharacters.length; i++) {
        update(
            1,
            0,
            n - 1,
            queryIndices[i],
            queryCharacters[i]
        );

        answer.push(tree[1].best);
    }

    return answer;
};
