


def solution(n, computers):
  global network
  global nets
  network = computers
  nets = n
  count = 0

  for i in range(n):
    for j in range(n):
      if checkLink(i, j):
        count += 1

  return count

def checkLink(i, j):
  if network[i][j] == 0:
    return False

  network[i][j] = 0

  for k in range(nets):
    checkLink(j, k)

  return True


print(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))