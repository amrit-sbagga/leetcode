class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        st = []
        rows, cols = len(maze), len(maze[0])

        for i in range(rows):
            for j in range(cols):
                if maze[i][j] == "." and (i == 0 or i == rows - 1 or j == 0 or j == cols - 1) and [i, j] != entrance:
                    st.append((i, j , 0))
        
        return self.bfs(st, maze, entrance)


    def isEquals(self, a: List[int], b:List[int]) -> bool:
        return a[0] == b[0] and a[1] == b[1]
    

    def bfs(self, st: List[tuple], maze: List[List[str]], start: List[int]) -> int:
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        visited = set()

        while st:
            row, col, length = st.pop(0)
            visited.add((row, col))

            for r_offset, c_offset in directions:
                r, c = row + r_offset, col + c_offset

                if [r, c] == start:
                    return length + 1

                if r < 0 or c < 0 or r >= len(maze) or c >= len(maze[0]):
                    continue

                if maze[r][c] == '+' or (r, c) in visited:
                    continue

                st.append((r, c, length + 1 ))
                visited.add((r, c))
            
        return -1;
        
