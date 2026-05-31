/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    const visited = Array(n).fill(false);
    let provinces = 0;

    const dfs = (node) => {
        visited[node] = true;
        for (let i = 0; i < n; i++) {
            if (isConnected[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            provinces++;
        }
    }
    return provinces;
};
