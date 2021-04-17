row, column = map(int, input().split())

graph = []
for _ in range(row):
  graph.append(list(map(int, input()))) 

def find(x, y):
  if x >= row or y >= column or x < 0 or y < 0:
    return False
  if graph[x][y] == 1:
    return False

  graph[x][y] = 1

  find(x + 1, y)
  find(x, y + 1)
  find(x - 1, y)
  find(x, y - 1)

  return True

count = 0
for x in range(row):
  for y in range(column):
    if find(x, y):
      count += 1

print(count)