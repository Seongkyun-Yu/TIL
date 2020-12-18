a = [1, 2, 3, 4, 5, 5]
remove_set = {3, 5}

# remove_list에 포함되지 않은 값만을 저장
result = [i for i in a if i not in remove_set]
print(result) # [1, 2, 4]