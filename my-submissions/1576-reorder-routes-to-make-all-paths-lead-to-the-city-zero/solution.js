/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    let neighbors = {};
    const isZeroReachable = Array(n).fill(false);
    isZeroReachable[0] = true;

    for (let city = 0; city < n; city++) neighbors[city] = [];

    for (const [sourceCity, destinationCity] of connections) {
        neighbors[sourceCity].push([destinationCity, false]);
        neighbors[destinationCity].push([sourceCity, true]);
    }

    let reorderCount = 0;
    traverseCities(0);

    return reorderCount;

    function traverseCities(zeroReachableCity) {
        for (const [neighborCity, isSourceCity] of neighbors[zeroReachableCity]) {
            if (isZeroReachable[neighborCity]) continue;
            if (!isSourceCity) reorderCount++;
            isZeroReachable[neighborCity] = true;
            traverseCities(neighborCity);
        }
    }

};
