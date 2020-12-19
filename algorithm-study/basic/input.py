import sys
# list(map(int, input().split())) 으로 보통 입력 받음 (공백으로 구분된 입력)

# print(list(map(int, input().split())))

# sys.stdin.readline() 메서드가 더 입력속도 빠름
# 엔터 후 줄바꿈 기호로 입력되기 때문에 strip()함께 사용해야함
# map일시 stript 생략가능
print(sys.stdin.readline().strip())

print(list(map(int, sys.stdin.readline().strip().split())))

# 출력할때 print(x, end=" ") 이렇게 end에 빈문자열 넣어주면 자동 줄갱신 안함
print(1, end=" ")
print(2)

# f-string
answer = 7
result = f'정답은 {answer}입니다.'
print(result)