class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        res, curr = 0, 0
        for i in range(len(gain)):
            curr += gain[i]
            res = max(res, curr)
        return res

