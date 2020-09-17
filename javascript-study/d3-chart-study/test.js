function solution(new_id) {
  let string1 = new_id.toLowerCase();
  string1 = string1
    .match(/[a-z0-9\\.\-\\_]/g)
    .reduce((acc, cur) => acc + cur, '');

  let string2 = '';
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === '.' && string1[i] === string1[i + 1]) continue;
    string2 += string1[i];
  }

  if (string2[0] === '.') string2 = string2.slice(1);
  if (string2[string2.length - 1] === '.')
    string2 = string2.slice(0, string2.length - 1);

  if (string2.length === 0) string2 = 'a';
  if (string2.length > 15) string2 = string2.slice(0, 15);
  if (string2[string2.length - 1] === '.')
    string2 = string2.slice(0, string2.length - 1);

  if (string2.length < 3) {
    while (string2.length < 3) {
      string2 += string2[string2.length - 1];
    }
  }

  return string2;
}
