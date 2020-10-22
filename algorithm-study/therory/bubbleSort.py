import random

data_list = random.sample(range(100), 50)

def bubbleSort(data):
  for index1 in range(len(data)-1):
    swap = False
    for index2 in range(len(data) - index1 - 1):
      if data[index2] > data[index2 + 1]:
        data[index2], data[index2 + 1] = data[index2 + 1], data[index2]
        swap = True

    if swap == False:
      break

  return data

print(bubbleSort(data_list))
