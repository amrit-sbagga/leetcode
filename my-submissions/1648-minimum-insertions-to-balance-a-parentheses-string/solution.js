/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let open = 0, ans = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') open++;
        else {
            // Step 1: make a "))"
            if (i + 1 < s.length && s[i + 1] === ')') i++;
            else ans++;

            // Step 2: find its '('
            if (open > 0) open--;
            else ans++;
        }
    }

    return ans + open * 2;
};
