# 2447번 https://www.acmicpc.net/problem/2447

n = int(input())

starsArr = [[" " for _ in range(n)] for _ in range(n)]

def drawStar(size, x, y):
  if size == 1:
    starsArr[y][x] = "*"
    return
  
  for i in range(3):
    for j in range(3):
      if i == 1 & j == 1:
        continue
      drawStar(size//3, x + j*size//3, y + i*size//3)

drawStar(n, 0, 0)

for i in starsArr:
  print("".join(i))

# def starString(count):
#   if count < 3:
#     return "*"

#   coreStr = starString(count/3)

#   newStarStr = ""

#   for i in range(3):
#     print(i)
#     for j in range(3):
#       if(i % 2 & j % 2):
#         newStarStr += coreStr.replace("*", " ")
#       else:
#         newStarStr += coreStr
#     if(i != 2):
#       newStarStr+= "\n"
#     print(newStarStr)
  

#   return newStarStr

# print(starString(n))