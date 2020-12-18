# 회문
def palindrome(string):
  if len(string) <= 1:
    return True

  if string[0] == string[-1]:
    return palindrome(string[1:-1])
  else:
    return False

def func(n):
  print(n)
  if n == 1:
    return
  
  if n % 2 == 1:
    return (func((3 * n) + 1))
  else:
    return (func(n/2))
