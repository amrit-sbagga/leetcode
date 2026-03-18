/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // const newArray = [...nums1, ...nums2].sort((a, b) => a - b);
    // const arraylength = newArray.length;
    // console.log(newArray, arraylength / 2);
    // if (arraylength % 2 == 1) {
    //     return newArray[Math.ceil(arraylength / 2) - 1]
    // } else {
    //     return (newArray[arraylength / 2] + newArray[(arraylength / 2) - 1]) / 2
    // }

    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        const p1 = Math.floor((low + high) / 2);
        const p2 = Math.floor((m + n + 1) / 2) - p1;

        const maxLeft1 = p1 === 0 ? -Infinity : nums1[p1 - 1];
        const minRight1 = p1 === m ? Infinity : nums1[p1];
        const maxLeft2 = p2 === 0 ? -Infinity : nums2[p2 - 1];
        const minRight2 = p2 === n ? Infinity : nums2[p2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // correct partition found
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeft1, maxLeft2);
            } else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            }
        } else if (maxLeft1 > minRight2) {
            high = p1 - 1; // move partition left in nums1
        } else {
            low = p1 + 1;  // move partition right in nums1
        }
    }
};
