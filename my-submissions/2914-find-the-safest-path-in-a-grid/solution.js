/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const dist = Array.from({length: n}, () => Array(n).fill(-1));

    // ---------- Multi‑source BFS from all thieves ----------
    const q = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dist[i][j] = 0;
                q.push([i,j]);
            }
        }
    }

    let head = 0;
    while (head < q.length) {
        const [x,y] = q[head++];
        for (const [dx,dy] of dirs) {
            const nx = x+dx, ny = y+dy;
            if (nx >= 0 && ny >= 0 && nx < n && ny < n && dist[nx][ny] === -1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push([nx,ny]);
            }
        }
    }

    // ---------- Decision function for a given minimum safety ----------
    const canReach = (val) => {
        if (dist[0][0] < val) return false;   // start already too close

        const vis = Array.from({length: n}, () => Array(n).fill(false));
        const queue = [[0,0]];
        vis[0][0] = true;
        let head = 0;
        while (head < queue.length) {
            const [x,y] = queue[head++];
            if (x === n-1 && y === n-1) return true;
            for (const [dx,dy] of dirs) {
                const nx = x+dx, ny = y+dy;
                if (nx >= 0 && ny >= 0 && nx < n && ny < n &&
                    !vis[nx][ny] && dist[nx][ny] >= val) {
                    vis[nx][ny] = true;
                    queue.push([nx,ny]);
                }
            }
        }
        return false;
    };

    // ---------- Binary search the answer ----------
    let lo = 0, hi = 2*n, ans = 0;
    while (lo <= hi) {
        const mid = Math.floor((lo+hi)/2);
        if (canReach(mid)) {
            ans = mid;      // feasible, try larger
            lo = mid + 1;
        } else {
            hi = mid - 1;   // too strict, decrease requirement
        }
    }
    return ans;
};
