from collections import defaultdict

def isBipartite(graph, n) -> bool:
        colors = [0] * (n + 1)
        
        def dfs(node, color):
            if not node:
                return
            if colors[node] != 0:
                return colors[node] == color
            
            colors[node] = color
            
            for neigh in graph[node]:
                if not dfs(neigh, -color):
                    return False
                
            return True
        
        if dfs(1, 1):
            return True
        else:
            return False

while True:
    n = int(input())
    if n == 0:
        break
    l = int(input())

    graph = defaultdict(list)
    for _ in range(l):
        u, v = map(int, input().split())
        graph[u].append(v)
        graph[v].append(u)

    if isBipartite(graph, n):
        print("BICOLOURABLE.")
    else:
        print("NOT BICOLOURABLE.")