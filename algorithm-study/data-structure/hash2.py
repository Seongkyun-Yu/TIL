hash_table = list([0 for i in range(8)])


# Chaining 기법으로 충돌 회피하는 해시
def get_key(data):
  return hash(data)

def hash_function(key):
  return key % 8

def save_data(data, value):
  index_key = get_key(data)
  hash_address = hash_function(index_key)
  if hash_table[hash_address] != 0:
    for index in range(len(hash_table[hash_address])):
      if hash_table[hash_address][index][0] == index_key:
        hash_table[hash_address][index][1] = value
        return
      hash_table[hash_address].append([index_key, value])
  else:
    hash_table[hash_address] = [[index_key, value]]
    
def read_data(data):
  index_key = get_key(data)
  hash_address = hash_function(index_key)

  if hash_table[hash_address] != 0:
    for index in range(len(hash_table[hash_address])):
      if hash_table[hash_address][index][0] == index_key:
        return hash_table[hash_address][index][1]
      return None
  else:
    return None