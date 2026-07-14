class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        count = 0

        for row in grid:
            for num in row:
                count += (num < 0)

        return count
        
