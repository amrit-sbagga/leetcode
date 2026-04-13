/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    // const startCities = new Set();
    // for (const path of paths) {
    //     startCities.add(path[0]);
    // }

    const startCities = new Set(paths.map(path => path[0]));
    for (const path of paths) {
        if (!startCities.has(path[1])) {
            return path[1];
        }
    }
    return "";
};
