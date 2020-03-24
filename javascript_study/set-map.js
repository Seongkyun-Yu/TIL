// Set 객체 받아 교집합 구하기
const getIntersection = function(set1, set2) {
  let result = new Set();

  for (const value of set1) {
    if (set2.has(value)) result.add(value);
  }

  return result;
};

// 배열과 Set 객체 받아 교집합 구해서 배열로 내보내기
const getAllTypeIntersection = function(iter1, iter2) {
  iter1 = new Set([...iter1]);
  iter2 = new Set([...iter2]);

  let result = new Set();

  for (const value of iter1) {
    if(iter2.has(value)) result.add(value);
  }

  return [...result];
};

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([3, 4, 5, 6, 7]);

console.log(getIntersection(set1, set2)); // Set { 3, 4, 5 }
console.log(getAllTypeIntersection(set1, set2)); // [ 3, 4, 5 ]
