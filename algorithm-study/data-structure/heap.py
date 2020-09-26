class Heap:
  def __init__(self, data):
    self.heap_array = list()
    self.heap_array.append(None)
    self.heap_array.append(data)

  def move_up(self, inserted_idx):
    if inserted_idx <= 1:
      return False
    
    parent_idx = inserted_idx // 2
    if self.heap_array[inserted_idx] > self.heap_array[parent_idx]:
      return True
    else:
      return False

  def insert(self, data):
    if len(self.heap_array) == 0:
      self.heap_array.append(None)
      self.heap_array.append(data)
      return True
    
    self.heap_array.append(data)

    inserted_idx = len(self.heap_array) - 1

    while(self.move_up(inserted_idx)):
      parent_idx = inserted_idx // 2
      self.heap_array[inserted_idx], self.heap_array[parent_idx] = self.heap_array[parent_idx], self.heap_array[inserted_idx]
      inserted_idx = parent_idx

    return True
      