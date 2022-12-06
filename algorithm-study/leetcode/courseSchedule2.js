/**
 * MEDIUM
 * https://leetcode.com/problems/course-schedule-ii/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) {
    const result = [];
    for (let i = 0; i < numCourses; i++) {
      result.push(i);
    }
    return result;
  }
  const visited = {};
  const courses = {};
  const noNeedCrs = [];

  for (const [crs, pre] of prerequisites) {
    if (courses[crs]) courses[crs].push(pre);
    else courses[crs] = [pre];
  }

  for (let i = 0; i < numCourses; i++) {
    console.log(courses[i], courses[courses[i]]);
    if (!courses[i] && !courses[courses[i]]) noNeedCrs.push(i);
  }

  let result = [];
  const dfs = (crs, acc) => {
    if (visited[crs]) return false;
    if (!courses[crs]) {
      acc.push(crs);
      if (acc.length === numCourses) result = [...acc];
      return true;
    }
    acc.push(crs);
    visited[crs] = true;
    for (const pre of courses[crs]) {
      if (!dfs(pre, acc)) return false;
    }
    acc.pop(crs);
    visited[crs] = false;

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    const acc = [];
    if (!dfs(i, acc)) return [];
    result = [...result, ...noNeedCrs];
    console.log(result);
    if (result.length === numCourses) return result.reverse();
  }

  return [];
};
