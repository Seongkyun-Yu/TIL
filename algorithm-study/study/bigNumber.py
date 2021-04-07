n, m, k = map(int, input().split())

numbers = list(map(int, input().split()))

numbers.sort(reverse=True)

result = 0
count = 0
index = 0

for _ in range(m):
  count += 1
  index = 0

  if count > k:
    index = 1
    count = 0

  result += numbers[index]
  
print(result)