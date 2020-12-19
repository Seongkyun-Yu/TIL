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

# DFS 메서드 정의
def dfs(graph, v, visited):
  # 현재 노드를 방문 처리
  visited[v] = True
  print(v, end= " ")
  # 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for i in graph[v]:
    if not visited[i]:
      dfs(graph, i, visited)