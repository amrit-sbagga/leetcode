class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        smaller, equal, greater = [], [], []
        for i in nums:
            if i < pivot:
                smaller.append(i)
            elif i > pivot:
                greater.append(i)
            else:
                equal.append(i)
        return smaller + equal + greater
        
