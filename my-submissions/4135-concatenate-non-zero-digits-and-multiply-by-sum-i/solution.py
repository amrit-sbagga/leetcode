class Solution:
    def sumAndMultiply(self, n: int) -> int:
        if n == 0:
            return 0
        arr = []
        while n:
            d = n % 10
            if d > 0:
                arr.append(d)
            n = n // 10
        s = sum(arr)
        res = 0
        for i, d in enumerate(arr):
            res += (d * 10 ** i)
        return res * s
