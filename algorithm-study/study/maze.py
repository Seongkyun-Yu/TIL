from collections import deque
row, column = map(int ,input().split())

graph = []
results = []

for i in range(row):
  graph.append(list(map(int, input())))

# def dfs(x, y, count):
#   if x < 0 or x >= row or y < 0 or y >= column:
#     return False
  
#   if graph[x][y] == 0:
#     return False

#   if x == row - 1 and y == column - 1:
#     results.append(count)
#     return True
  
#   graph[x][y] = 0
#   dfs(x + 1, y, count + 1)
#   dfs(x - 1, y, count + 1)
#   dfs(x, y + 1, count + 1)
#   dfs(x, y - 1 , count + 1)
#   return False

# dfs(0, 0, 1)

# print(min(results))

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def bfs(x, y):
  queue = deque()
  queue.append((x, y))

  while queue:
    print('큐:', queue)
    x, y = queue.popleft()
    for lis in graph:
      print(lis)
    

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if nx < 0 or nx >= row or ny < 0 or ny >= column:
        continue

      if graph[nx][ny] == 0:
        continue

      if graph[nx][ny] == 1:
        graph[nx][ny] = graph[x][y] + 1
        queue.append((nx, ny))

  return graph[row - 1][column - 1]

print(bfs(0, 0))
