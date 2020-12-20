input_data = list(map(int, input().split()))

row = input_data[0]
column = input_data[1]

graph = []
result = 0

for i in range(row):
  graph.append(list(map(int, input())))


def dfs(x, y):  
  if x < 0 or x > row - 1  or y < 0 or y > column - 1:
    return False

  if graph[x][y] == 1:
    return False
  
  graph[x][y] = 1

  dfs(x + 1, y)
  dfs(x - 1, y)
  dfs(x, y + 1)
  dfs(x, y - 1)
  
  return True


for i in range(row):
  for j in range(column):
    if dfs(i, j) == True:
      result += 1

print('결과',result)