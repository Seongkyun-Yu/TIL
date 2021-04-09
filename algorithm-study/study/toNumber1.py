number, dividingNum = map(int, input().split())

count = 0

while(number != 1):
  if number % dividingNum:
    number -= 1
  else:
    number = number // dividingNum
  
  count += 1

print(count)