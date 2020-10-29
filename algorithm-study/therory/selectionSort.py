import random

data_list = random.sample(range(100), 50)

def selectionSort(arr):
  for index1 in range(len(arr) - 1):
    lowestIndex = index1
    for index2 in range(index1, len(arr)):
      if(arr[lowestIndex] > arr[index2]):
        lowestIndex = index2
    arr[index1] = arr[lowestIndex]
  
  return arr

print(selectionSort(data_list))

      

