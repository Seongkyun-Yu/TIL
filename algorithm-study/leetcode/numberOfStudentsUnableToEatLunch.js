/**
 * EASY
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let studentsOnes = 0;
  let studentsZeros = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i] == 1) studentsOnes++;
    else studentsZeros++;
  }

  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] == 1) {
      studentsOnes--;
      if (studentsOnes < 0) return sandwiches.length - i;
    } else {
      studentsZeros--;
      if (studentsZeros < 0) return sandwiches.length - i;
    }
  }

  return 0;
};
