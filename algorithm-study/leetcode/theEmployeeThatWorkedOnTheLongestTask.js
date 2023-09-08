/**
 * EASY
 * https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let highestTaskCompletionTime = 0;
  let employeeId = 0;

  let previousTaskCompletion = 0;

  for (task of logs) {
    const taskCompletionTime = task[1] - previousTaskCompletion;

    if (taskCompletionTime > highestTaskCompletionTime) {
      highestTaskCompletionTime = taskCompletionTime;
      employeeId = task[0];
    }

    if (
      taskCompletionTime === highestTaskCompletionTime &&
      task[0] < employeeId
    ) {
      employeeId = task[0];
    }

    previousTaskCompletion = task[1];
  }

  return employeeId;
};
