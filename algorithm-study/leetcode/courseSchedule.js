/**
 * MEDIUM
 * https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const visited = {};
  const course = {};

  for (const [dest, start] of prerequisites) {
    if (course[dest]) course[dest].push(start);
    else course[dest] = [start];
  }

  const dfs = (crs) => {
    if (visited[crs]) return false;
    if (!course[crs]) return true;

    visited[crs] = true;

    for (const pre of course[crs]) {
      if (!dfs(pre)) return false;
    }
    visited[crs] = false;
    course[crs] = false;

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};
