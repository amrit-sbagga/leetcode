var firstStableIndex = function(nums, k) {
    let n = nums.length;

    let minVal = new Array(n);
    minVal[n - 1] = nums[n - 1];

    for(let i = 1; i < n; i++) {
        minVal[n - i - 1] = Math.min(
            nums[n - i - 1],
            minVal[n - i]
        );
    }

    let maxVal = nums[0];

    for(let i = 0; i < n; i++) {
        maxVal = Math.max(nums[i], maxVal);

        let diff = maxVal - minVal[i];

        if(diff <= k) {
            return i;
        }
    }

    return -1;
};
