n = int(input())
alice = list(map(int, input().split()))
king = list(map(int, input().split()))
target = list(map(int, input().split()))
directions = [(0, 1), (0, -1), (1, 0), (-1, 0), (-1, -1), (-1, 1), (1, -1), (1, 1)]
visited = set()
def isCheck(row, col):
    if row == alice[0] or col == alice[1] or abs(row - alice[0]) == abs(col - alice[1]) or row + col == alice[0] + alice[1]:
        return True

def isValid(row, col):
            return (0 <= row < n and 0 <= col < n)
            
def dfs(row, col):
    if isCheck(row, col):
        return False
        
    visited.add((row, col))
    
    for row_change, col_change in directions:
        new_row, new_col = row_change + row, col_change + col
        if isValid(new_row, new_col) and (new_row, new_col) not in visited:
            if not dfs(new_row, new_col):
                return False
                
    return True

if dfs(king[0], king[1]):
    print("YES")
else:
    print("NO")