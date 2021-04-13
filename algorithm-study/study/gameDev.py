row, column = map(int, input().split())

x, y, look = map(int, input().split())

mapData = []
for _ in range(row):
  mapData.append(list(map(int, input().split())))

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

# 시작점 방문 표시
mapData[x][y] = 1

count = 1
changeLookCount = 0
while(True):
  if changeLookCount 
  # 방향전환
  look -= 1
  look = 3 if look-1 < 0 else look-1
  changeLookCount += 1

  if mapData[x + dx][y + dy] == 1:
    continue

  x = x + dx
  y = y + dy
  mapData[x][y] = 1
  count += 1