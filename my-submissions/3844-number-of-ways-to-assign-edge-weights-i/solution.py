class Solution:
    MOD = 10**9 + 7

    def dfs(self, adj, node, parent):
        depth = 0

        for child in adj[node]:
            if child == parent:
                continue

            depth = max(depth, 1 + self.dfs(adj, child, node))

        return depth


    def assignEdgeWeights(self, edges: List[List[int]]) -> int:
        n = len(edges) + 1
        adj = [[] for _ in range(n + 1)]

        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        depth = self.dfs(adj, 1, -1)

        res = 1
        for _ in range(1, depth):
            res = (res * 2) % self.MOD

        return res
        
