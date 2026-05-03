/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let res  = [];
    for(let i = 0; i < m; i++){
       res.push(nums1[i])
    }

    for(let j = 0; j < n; j++){
       res.push(nums2[j])
    }

    // console.log('res here', res);

    res = res.sort((a, b) => a - b);
    // console.log('Sorted res =>', res);
    
    // nums1 = [...res];
    // return nums1;

    // Copy the sorted values back into nums1
    // for (let i = 0; i < res.length; i++) {
    //     nums1[i] = res[i];
    // }

    nums1.splice(0, nums1.length, ...res);


};


