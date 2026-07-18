/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    let length = intervals.length;
    const ans = new Array(length).fill(-1);

   // console.log("length, ans =>", length, ans);

    let mappedIntervals = intervals.map((elem, i) => [elem[0], elem[1], i]);
    mappedIntervals.sort((a, b) => a[0] - b[0]);

   // console.log("mappedIntervals =>", mappedIntervals);;

    for(let i = 0; i < length; i++){
        let low = i;
        let high = length;

        let target = mappedIntervals[i][1];

        while(low < high){
            let mid = (low + high) >> 1;

            if(target > mappedIntervals[mid][0]){
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        if(low < length){
            ans[mappedIntervals[i][2]] = mappedIntervals[low][2]
        }
    }
    return ans;
    
};
