# 이진탐색트리 삭제 코드 구현
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

  def delete(self, value):
    searched = False
    self.current_node = self.head
    self.parent = self.head

    while self.current_node:
      if self.current_node.value == value:
        searched = True
        break
      elif value < self.current_node.value:
        self.parent = self.current_node
        self.current_node = self.current_node.left
      else:
        self.parent = self.current_node
        self.current_node = self.current_node.right

    if searched == False:
      return False
    
    # 삭제할 노드의 자식이 없는 경우 (leaf Node)
    if self.current_node.left == None and self.current_node.right == None:
      if value < self.parent.value:
        self.parent.left = None
      else:
        self.parent.right = None
      del self.current_node

    # 삭제할 노드 왼쪽에 자식이 있는 경우
    if self.current_node.left != None and self.current_node.right == None:
      if value < self.parent.value:
        self.parent.left = self.current_node.left
      else:
        self.parent.right = self.current_node.left

    # 삭제할 노드 오른쪽에 자식이 있는 경우
    elif self.current_node.left == None and self.current_node.right != None:
      if value < self.parent.value:
        self.parent.left = self.current_node.right
      else:
        self.parent.right = self.current_node.right
    
    # 삭제할 노드 왼쪽 오른쪽 모두 자식이 있는 경우
    if self.current_node.left != None and self.current_node.right != None:
      if value < self.parent.value:
        self.change_node = self.current_node.right
        self.change_node_parent = self.current_node.right

        while self.change_node.left != None:
          self.change_node_parent = self.change_node
          self.change_node = self.change_node.left
        
        if self.change_node.right != None:
          self.change_node_parent = self.change_node.right
        else:
          self.change_node_parent.left = None

        self.parent.left = self.change_node
        self.change_node.right = self.current_node.right
        self.change_node.left = self.change_node.left

      else:
        self.change_node = self.current_node.right
        self.change_node_parent = self.current_node.right

        while self.change_node.left != None:
          self.change_node_parent = self.change_node
          self.change_node = self.change_node.left

        if self.change_node.right != None:
          self.change_node_parent.left = self.change_node.right
        else:
          self.change_node_parent.left = None
        
        self.parent.right = self.change_node
        self.change_node.left = self.current_node.left
        self.change_node.right = self.current_node.right


head = Node(1)
BST = NodeMgmt(head)
BST.insert(2)
BST.insert(4)
BST.insert(7)

print(BST.search(7))