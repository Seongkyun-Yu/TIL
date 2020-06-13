function solution(w, h) {
  if (w === 1 || h === 1) return 0;
  if (h < w) return w * h - Math.ceil(w / h) * h;
  return w * h - Math.ceil(h / w) * w;
}

console.log(solution(8, 12));
