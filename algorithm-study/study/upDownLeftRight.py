max = int(input())
movs = list(input().split())

movDic = {
  "R": 1,
  "L": -1,
  "U": -1,
  "D": 1
}

positionArr = [1,1]

for mov in movs:
  if((mov == 'R' or mov == "L") and (positionArr[1] + movDic[mov] < max and positionArr[1] + movDic[mov] > 0)):
    positionArr[1] += movDic[mov]
  elif((mov == 'U' or mov == "D") and (positionArr[0] + movDic[mov] < max and positionArr[0] + movDic[mov] > 0)):
    positionArr[0] += movDic[mov]

print(positionArr[0], positionArr[1])