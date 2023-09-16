# from collections import defaultdict

# def isBipartite(graph, n) -> bool:
#         colors = [0] * n
        
#         def dfs(node, color):
#             if colors[node] != 0:
#                 return colors[node] == color
            
#             colors[node] = color
            
#             for neigh in graph[node]:
#                 if not dfs(neigh, -color):
#                     return False
                
#             return True
        
#         for i in range(n):
#             if colors[i] == 0:
#                 if not dfs(i, 1):
#                     return False
        
#         return True

# n = int(input())
# l = int(input())

# graph = defaultdict(list)
# for _ in range(l):
#     u, v = map(int, input().split())
#     graph[u - 1].append(v - 1)
#     graph[v - 1].append(u - 1)

# if isBipartite(graph, n):
#     print("BICOLOURABLE.")
# else:
#     print("NOT BICOLOURABLE.")

chars = {chr(i + 97): 0 for i in range(26)}
print(chars)