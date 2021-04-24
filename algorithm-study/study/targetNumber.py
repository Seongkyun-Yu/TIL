result = 0
def solution(numbers, target):

  findNum(numbers, 0, 0, target)

  return result


def findNum(numbers, index, acc, target):
  global result
  
  if len(numbers) == index:
    if acc == target:
      result += 1
    return

  num = numbers[index]

  findNum(numbers, index + 1, acc - num, target)
  findNum(numbers, index + 1, acc + num, target)


print(solution([1, 1, 1, 1, 1], 3))