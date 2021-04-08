row, column = map(int, input().split())

result = 0

for _ in range(row):
  datas = list(map(int, input().split()))
  minData = min(datas)

  if result < minData:
    result = minData

print(result)