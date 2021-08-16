import sys

n = int(input())
points = list(map(int, input().split()));

average = round(sum(points)/n)

minDif = 1000
stundentNumber = 0
mathNumb = 0

for i, point in enumerate(points):
  dif = abs(point - average);

  if(dif < minDif):
    minDif = dif
    stundentNumber = i + 1
    mathNumb = point
  elif(dif == minDif and point > mathNumb):
    mathNumb = point
    stundentNumber = i + 1

print(mathNumb, stundentNumber)