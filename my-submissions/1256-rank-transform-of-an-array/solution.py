class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        List = {}
        sortArray = sorted(arr)
        rank = 1
        for i in sortArray:
            if i not in List:
                List[i] = rank
                rank += 1
        return [List[i] for i in arr]
        
