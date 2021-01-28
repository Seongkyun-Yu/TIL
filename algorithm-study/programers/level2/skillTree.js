// https://programmers.co.kr/learn/courses/30/lessons/49993
function solution(skill, skill_trees) {
  let result = 0;

  skill_trees.forEach((item) => {
    let queue = [];
    for (let i = 0; i < skill.length; i++) {
      let index = item.indexOf(skill[i]);

      if (i === 0) {
        queue.unshift(index);
        continue;
      } else if (index === -1) {
        queue.unshift(0);
      } else if (queue[0] < index) {
        queue.unshift(index);
      }
    }
    if (queue.length === skill.length) result++;
  });

  return result;
}
