/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const n = grid.length;
    const m = grid[0].length;

    health -= grid[0][0];
    if (health <= 0) return false;

    const best = Array.from({ length: n }, () => Array(m).fill(-1));
    best[0][0] = health;

    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

    const q = [[0, 0, health]];
    let head = 0;

    while (head < q.length) {
        const [i, j, hp] = q[head++];

        if (i === n - 1 && j === m - 1)
            return true;

        if (hp < best[i][j])
            continue;

        for (const [dx, dy] of dirs) {
            const ni = i + dx;
            const nj = j + dy;

            if (ni < 0 || ni >= n || nj < 0 || nj >= m)
                continue;

            const newHp = hp - grid[ni][nj];

            if (newHp <= 0)
                continue;

            if (newHp > best[ni][nj]) {
                best[ni][nj] = newHp;
                q.push([ni, nj, newHp]);
            }
        }
    }

    return false;
};
