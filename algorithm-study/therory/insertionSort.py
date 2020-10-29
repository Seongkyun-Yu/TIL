import random

data_list = random.sample(range(100), 50)

def insertionSort(arr):
  for index in range(1, len(arr)):
    while index - 1 >= 0 and arr[index-1] > arr[index]:
      arr[index-1], arr[index] = arr[index], arr[index-1]
      index-=1
  
  return arr

def insertionSort2(arr):
  for index in range(len(arr) - 1):
    for index2 in range(index + 1, 0, -1):
      if(arr[index2] < arr[index2-1]):
        arr[index2], arr[index2-1] = arr[index2-1], arr[index2]
      else:
        break
  
  return arr


print(insertionSort2(data_list))