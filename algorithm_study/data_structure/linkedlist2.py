class Node:
  def __init__(self, data, next = None):
    self.data = data
    self.next = next

class NodeMgnt:
  def __init__(self, data):
    self.head = Node(data)

  def add(self, data):
    node = self.head
    while node.next:
      node = node.next
    node.next = Node(data)

  def delete(self, data):
    if self.head.data == data:
      temp = self.head
      self.head = self.head.next
      del temp
    else:
      node = self.head
      while node.next:
        if node.next.data == data:
          temp = node.next
          node.next = node.next.next
          del temp
          return
        else:
          node = node.next
  
  def desc(self):
    node = self.head
    while node:
      print(node.data)
      node = node.next

test = NodeMgnt(0)

for index in range(1,2):
  test.add(index)

test.delete(1)
test.desc()