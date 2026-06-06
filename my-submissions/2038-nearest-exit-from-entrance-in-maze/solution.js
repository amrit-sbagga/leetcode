/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    let st = []
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[0].length; j++) {
            if (maze[i][j] == "." && (i == 0 || i == maze.length - 1 || j == 0
                || j == maze[0].length - 1) && !isEquals([i, j], entrance)) {
                st.push([i, j, 0])
            }
        }
    }
    return bfs(st, maze, entrance)
};

function isEquals(a, b) {
    return a[0] == b[0] && a[1] == b[1]
}

function bfs(st, maze, start) {
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let visited = {};
    while (st.length) {
        const [row, col, len] = st.shift();
        visited[[row, col]] = 1
        for (let i of directions) {
            let r = row + i[0];
            let c = col + i[1];
            if (isEquals([r, c], start)) {
                return len + 1;
            }
            if (r < 0 || c < 0 || r > maze.length - 1 || c > maze[0].length - 1 ||
                maze[r][c] == "+" || visited[[r, c]]) {
                continue;
            }
            st.push([r, c, len + 1])
            visited[[r, c]] = 1
        }
    }
    return -1;
}
