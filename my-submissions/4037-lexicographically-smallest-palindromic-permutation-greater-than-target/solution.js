/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function(s, target) {
    const frequency = Array(26).fill(0);

    for (const ch of s) {
        frequency[ch.charCodeAt(0) - 97]++;
    }

    let middle = "";
    let oddCount = 0;

    for (let c = 0; c < 26; c++) {
        if (frequency[c] % 2 === 1) {
            oddCount++;
            middle = String.fromCharCode(97 + c);
        }
    }

    if (oddCount > 1) {
        return "";
    }

    const halfCount = frequency.map(count => Math.floor(count / 2));
    const k = Math.floor(s.length / 2);
    const targetHalf = target.slice(0, k);

    function smallestGreaterOrEqual(originalCount, prefix) {
        const count = [...originalCount];
        let matched = 0;

        while (matched < k && count[prefix.charCodeAt(matched) - 97] > 0) {
            count[prefix.charCodeAt(matched) - 97]--;
            matched++;
        }

        if (matched === k) {
            return prefix;
        }

        for (let pos = matched; pos >= 0; pos--) {
            if (pos < matched) {
                count[prefix.charCodeAt(pos) - 97]++;
            }

            const current = prefix.charCodeAt(pos) - 97;

            for (let c = current + 1; c < 26; c++) {
                if (count[c] === 0) continue;

                let result = prefix.slice(0, pos);
                result += String.fromCharCode(97 + c);
                count[c]--;

                for (let ch = 0; ch < 26; ch++) {
                    result += String.fromCharCode(97 + ch).repeat(count[ch]);
                }

                return result;
            }
        }

        return "";
    }

    function buildPalindrome(half) {
        const reversed = half.split("").reverse().join("");
        return half + middle + reversed;
    }

    function nextPermutation(chars) {
        let pivot = chars.length - 2;

        while (pivot >= 0 && chars[pivot] >= chars[pivot + 1]) {
            pivot--;
        }

        if (pivot < 0) {
            return false;
        }

        let swapPos = chars.length - 1;

        while (chars[swapPos] <= chars[pivot]) {
            swapPos--;
        }

        [chars[pivot], chars[swapPos]] = [chars[swapPos], chars[pivot]];

        let left = pivot + 1;
        let right = chars.length - 1;

        while (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }

        return true;
    }

    let half = smallestGreaterOrEqual(halfCount, targetHalf);

    if (half === "" && k > 0) {
        return "";
    }

    const candidate = buildPalindrome(half);

    if (candidate > target) {
        return candidate;
    }

    const chars = half.split("");

    if (!nextPermutation(chars)) {
        return "";
    }

    return buildPalindrome(chars.join(""));
};
