# 2447번 https://www.acmicpc.net/problem/2447

n = int(input())

def starString(count):
  if count < 3:
    return "*"

  coreStr = starString(count/3)

  newStarStr = ""

  for i in range(3):
    print(i)
    for j in range(3):
      if(i % 2 & j % 2):
        newStarStr += coreStr.replace("*", " ")
      else:
        newStarStr += coreStr
    if(i != 2):
      newStarStr+= "\n"
    print(newStarStr)
  

  return newStarStr

print(starString(n))