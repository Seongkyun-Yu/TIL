function solution(w, h) {
  let max = 0;
  let min = 0;
  if (w > h) {
    max = w;
    min = h;
  } else {
    max = h;
    min = w;
  }

  let fragle = 0;
  let accFragle = max;
  let halfCount = 0;
  for (let i = 0; i < min; i++) {
    fragle = i % 2 ? Math.round(max / min) - 1 : Math.round(max / min);
    accFragle -= fragle;

    halfCount += accFragle > 0 ? accFragle : 0;
  }

  return halfCount * 2;
}

console.log(solution(8, 12));
