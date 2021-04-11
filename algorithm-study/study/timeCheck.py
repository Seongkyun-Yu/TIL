hours = int(input())

result = 0

for hour in range(hours+1):
  for minute in range(60):
    for second in range(60):
      strHour = str(hour)
      strMinute = str(minute)
      strSecond = str(second)

      if "3" in strHour or "3" in strMinute or "3" in strSecond:
        result += 1

print(result)