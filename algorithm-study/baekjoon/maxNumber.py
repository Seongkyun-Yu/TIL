numbers = [ int(input()) for _ in range(9) ]

max = 0
index = 0

for idx, number in enumerate(numbers):
  if max < number:
    max = number
    index = idx

print(max, index + 1)