function solution(strings, n) {
  return strings.sort((string1, string2) =>
    string1[n] === string2[n]
      ? string1.localeCompare(string2)
      : string1[n].localeCompare(string2[n]),
  );
}

console.log(solution(['abce', 'abcd', 'cdx'], 2));
