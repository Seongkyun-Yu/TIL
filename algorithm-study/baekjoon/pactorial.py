n = int(input())

def recursive(num):
  if num <= 1:
     return num
  
  return num * recursive(num - 1)

result = recursive(n)

if n == 0:
  print(1)
else:
  print(result)