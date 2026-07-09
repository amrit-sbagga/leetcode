/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const dp = new Array(n).fill(0);
    // console.log("dp =>", dp)
    let cnt = 0;
    for(let i = 1; i < n; i++){
        if(nums[i] - nums[i - 1] > maxDiff){
            cnt++;
        }
        dp[i] = cnt;
    }
    // console.log("dp =>", dp)
    return queries.map(([u, v]) => dp[u] === dp[v]);
};
