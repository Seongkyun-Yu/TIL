/**
 * MEDIUM
 * https://leetcode.com/problems/employee-importance/
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const employeesHash = {};
  for (const emplpoyee of employees) {
    employeesHash[emplpoyee.id] = emplpoyee;
  }

  const dfs = (node) => {
    if (!node) return 0;

    let cur = node.importance;
    for (const subordinate of node.subordinates) {
      cur += dfs(employeesHash[subordinate]);
    }

    return cur;
  };

  const queue = employees;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.id === id) return dfs(node);

      for (const subordinate of node.subordinates) {
        queue.push(employeesHash[subordinate]);
      }
    }
  }
};
