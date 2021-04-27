

def solution(n, computers):
  linked = [0 for i in range(n)]
  count = 0

  for i in range(n):
    for j in range(n):
      if checkLink(i, j):
        count += 1

  return count
    

def checkLink(i, j):
  if linked[i][j] == 1 or linked[i] == 1 or linked[j] == 1:
    return False
  
  linked[i] = 1
  linked[j] = 1

  for k in range(len(linked)):
    checkLink(j, k)

  return True


print(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))