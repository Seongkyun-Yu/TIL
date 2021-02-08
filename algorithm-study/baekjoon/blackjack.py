# 2798 블랙잭
# https://www.acmicpc.net/problem/2798

min, max = map(int, input().split())
cardList = list(map(int, input().split()))

sumMax = 0

for i in range(len(cardList)):
  for j in range(i + 1, len(cardList)):
    for k in range(j + 1, len(cardList)):
      sum = cardList[i] + cardList[j] + cardList[k]
      if sum > max:
        continue
      if sum > sumMax:
        sumMax = sum

print(sumMax)
