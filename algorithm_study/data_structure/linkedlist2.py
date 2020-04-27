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
  
  def desc(self):
    node = self.head
    while node:
      print(node.data)
      node = node.next

test = NodeMgnt(0)

for index in range(1,10):
  test.add(index)

test.desc()