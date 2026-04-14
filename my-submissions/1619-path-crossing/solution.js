/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let x = 0, y = 0;
    const visited = new Set();
    visited.add(`${x}-${y}`);

    for (const direction of path) {
        if (direction === 'E') x++;
        else if (direction === 'W') x--;
        else if (direction === 'N') y++;
        else y--;

        const position = `${x}-${y}`;
        if (visited.has(position)) return true;
        visited.add(position);
    }
    return false;
};
