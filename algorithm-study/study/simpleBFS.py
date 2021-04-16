from collections import deque

def bfs(graph, start, visited):
  queue = deque([start])

  visited[start] = True

  while(queue):
    node = queue.popleft()

    print(node, end=" ")

    for linkedNode in graph[node]:
      if visited[linkedNode] == False:
        visited[linkedNode] = True
        queue.append(linkedNode)

graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
]

visited = [False] * 9

bfs(graph, 1, visited)