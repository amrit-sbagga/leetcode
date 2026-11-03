/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {

    let max= -Infinity

    for(let i=0;i<nums.length;i++){

        if(nums[i]>max)

            max=nums[i]

    }

    count=0

    for(let i=0;i<nums.length;i++){

        if(nums[i]!=max)

            count +=max-nums[i]
        
    }

    return count
};
