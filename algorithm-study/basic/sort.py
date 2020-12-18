# 람다를 이용한 정렬

array = [('홍길동', 50), ('이순신', 32), ('아무개', 74)]

print(sorted(array, key=lambda x: x[1])) # 두번째 인자 기준으로 정렬