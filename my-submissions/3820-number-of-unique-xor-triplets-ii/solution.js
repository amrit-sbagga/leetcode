/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    let n = nums.length;

    let pairSeen = new Array(2048).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            pairSeen[nums[i] ^ nums[j]] = 1;
        }
    }

    let pairs = [];
    for (let v = 0; v < 2048; v++) {
        if (pairSeen[v]) pairs.push(v);
    }

    let tripSeen = new Array(2048).fill(0);
    let count = 0;
    for (let p of pairs) {
        for (let i = 0; i < n; i++) {
            let x = p ^ nums[i];
            if (!tripSeen[x]) {
                tripSeen[x] = 1;
                count++;
            }
        }
    }

    return count;
};
