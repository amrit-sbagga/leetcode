class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        n=len(prices)
        dp=[[-1]*2 for _ in range(n)]
        def f(day,buy):
            if day==n:
                return 0
            if dp[day][buy]!=-1:
                return dp[day][buy]
            if buy:
                profit=max(-prices[day]+f(day+1,0),f(day+1,1))
            else:
                profit=max(prices[day]-fee+f(day+1,1),f(day+1,0))
            dp[day][buy]=profit
            return dp[day][buy]
        return f(0,1)
