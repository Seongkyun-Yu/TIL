wantCount = int(input())

def fibonacci(count, num1, num2):
  if wantCount == count:
    return num1

  sum = num1 + num2
  num1 = num2
  num2 = sum

  return fibonacci(count+1, num1, num2)

print(fibonacci(0, 0, 1))





