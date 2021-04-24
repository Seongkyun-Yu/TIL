from collections import deque

result = 0

def solution(numbers, target):
  findNum(deque(numbers), 0, target)

  return result


def findNum(numbers, acc, target):
  print(acc)
  if len(numbers) <= 0:
    if acc == target:
      print('여기', result)
      result += 1
    return

  num = numbers.popleft()

  findNum(numbers, acc - num, target)
  findNum(numbers, acc + num, target)


print(solution([1, 1, 1, 1, 1], 3))