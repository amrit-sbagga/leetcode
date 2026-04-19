/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // set for faster lookup
    // let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowels = 'aeiouAEIOU';
    const arr = s.split('');
    let left = 0, right = arr.length - 1

    while(left < right) {
        // for set
        // while(left < right && !vowels.has(arr[left])) left++;
        // while(left < right && !vowels.has(arr[right])) right--;

        while(left < right && !vowels.includes(arr[left])) left++;
        while(left < right && !vowels.includes(arr[right])) right--;
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    // console.log(arr);
    return arr.join('');
};
// input : IceCreAm
