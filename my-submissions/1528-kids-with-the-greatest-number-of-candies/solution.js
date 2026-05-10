/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let maxVal = Math.max(...candies);

    for(let c of candies){
      result.push(c + extraCandies >= maxVal);
    }
    
    // console.log(result);
    return result;
};
