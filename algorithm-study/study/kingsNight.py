# 행: 알파벳
# 열: 숫자
# 체스에서 나이트가 움직일 수 있는 개수 구하기

# 나이트 위치 받기
input_data = input()
row = int(input_data[1])
column = int(ord(input_data[0])-int(ord('a'))) + 1

# 이동 가능 패턴
steps = [(-2, 1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)]

# 움직임 가능한지 체크
result = 0
for step in steps:
  next_row = row + step[0]
  next_column = column + step[1]

  if next_row >= 1 and next_row <=8 and next_column >=1 and next_row <=8:
    result += 1

print(result)

