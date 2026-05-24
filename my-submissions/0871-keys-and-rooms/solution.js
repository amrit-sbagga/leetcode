/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const n = rooms.length;
    const visited = new Array(n).fill(false);
   // console.log(n, visited); //4, [false, false, false, false]

    function dfs(room) {
        if (visited[room]) return;
        visited[room] = true;
       // console.log("room visited here =>", room, visited); 
        for (let key of rooms[room]) {
           // console.log("key here =>", key, room); 
            dfs(key);
        }
    }

    dfs(0);
    return visited.every(hasKey => hasKey)
};
// [[1,3],[3,0,1],[2],[0]] -> false
