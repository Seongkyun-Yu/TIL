# 큐를 사용함
from collections import deque

# graph
graph = [
  [], # 0번째 노드 생략
  [2, 3, 8], # 연결된 노드들 
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8,],
  [1, 7]
]

# 방문 체크용
visite = [False] * 9

def bfs(graph, start, visited):
  queue = deque([start])
  visited[start] = True

  while queue:
    v = queue.popleft()
    print(v, end=" ")

    for i in graph[v]:
      if not visited[i]:
        queue.append(i)
        visited[i] = True