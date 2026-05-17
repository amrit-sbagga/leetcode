/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let currentCount = 0;
    let maxCount = 0;

    // 1 - count in first k chars
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) currentCount++;
    }

    maxCount = currentCount;

    // 2 - sliding from position k
    // Update - Add the new character (if vowel), 
    // remove the old one (if vowel) -> from (i-k)
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) currentCount++;
        if (vowels.has(s[i - k])) currentCount--;
        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;
};
