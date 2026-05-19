/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const n = grid.length;
    const rowMap = new Map();

    for (const row of grid) {
        const key = row.join(',')
        rowMap.set(key, (rowMap.get(key) || 0) + 1);

    }

    // console.log(rowMap);
    let count = 0;

    for (let col = 0; col < n; col++) {
        const colArr = [];

        for (let row = 0; row < n; row++) {
            colArr.push(grid[row][col])
        }

        // console.log(colArr);
        const key = colArr.join(',');
        if (rowMap.has(key)) {
            count += rowMap.get(key);
        }
    }
    return count;
};
