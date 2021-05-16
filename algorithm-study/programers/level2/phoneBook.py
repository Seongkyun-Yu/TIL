def solution(phone_book):
  phone_book = sorted(phone_book)

  for i, number in enumerate(phone_book):
    if i == len(phone_book) - 1:
      break;
    numbLen = len(number)
    if number == phone_book[i+1][0:numbLen] :
      return False
  
  return True

print(solution(["99","123","1245","567","88", "23", "2349"]))