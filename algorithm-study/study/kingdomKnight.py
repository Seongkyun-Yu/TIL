position = list(input())

xPos = int(position[1])
yPos = int(ord(position[0])) - int(ord('a')) + 1

result = 0

# x 2칸 이동
if xPos + 2 > 0 and yPos - 1 > 0:
  result += 1

if xPos + 2 > 0 and yPos + 1 > 0:
  result += 1

if xPos - 2 > 0 and yPos - 1 > 0:
  result += 1

if xPos - 2 > 0 and yPos + 1 > 0:
  result += 1

# y 2칸 이동
if xPos + 1 > 0 and yPos - 2 > 0:
  result += 1

if xPos + 1 > 0 and yPos + 2 > 0:
  result += 1

if xPos - 1 > 0 and yPos - 2 > 0:
  result += 1

if xPos - 1 > 0 and yPos + 2 > 0:
  result += 1

print(result)