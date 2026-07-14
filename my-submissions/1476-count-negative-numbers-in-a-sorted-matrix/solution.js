/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;

    for(const row of grid){
        for(const num of row){
            count += (num < 0);
        }
    }

    return count;
};
