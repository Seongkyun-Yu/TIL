class Heap:
  def __init__(self, data):
    self.heap_array = list()
    self.heap_array.append(None)
    self.heap_array.append(data)

  def insert(self, data):
    if len(self.heap_array) == 0:
      self.heap_array.append(None)
      self.heap_array.append(data)
      return True
    
    self.heap_array.append(data)
    return True
      