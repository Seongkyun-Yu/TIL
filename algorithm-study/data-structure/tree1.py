# 이진탐색트리
class Node:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None
  
class NodeMgmt:
  def __init__(self, head):
    self.head = head

  def insert(self, value):
    self.current_node = self.head

    while True:
      if value < self.current_node.value:
        if self.current_node != None:
          self.current_node = self.current_node.left
        else:
          self.current_node.left = Node(value)
          break
      else:
        if self.current_node.right != None:
          self.current_node = self.current_node.right
        else:
          self.current_node.right = Node(value)
          break

  def search(self, value):
    self.current_node = self.head
    while self.current_node:
      if self.current_node.value == value:
        return True
      elif value < self.current_node.value:
        self.current_node = self.current_node.left
      else:
        self.current_node = self.current_node.right
    return False

head = Node(1)
BST = NodeMgmt(head)
BST.insert(2)
BST.insert(4)
BST.insert(7)

print(BST.search(7))